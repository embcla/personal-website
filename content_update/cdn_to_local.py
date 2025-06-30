#!/usr/bin/env python3

import os
import re
from pathlib import Path
import shutil
import requests
from urllib.parse import urlparse, unquote
import html
import argparse
import sys
import hashlib

# List of domains to keep as remote URLs (not downloaded locally)
DENIED_DOMAINS = {
    'cloudfront.net',
    'google.com',
    'webflow.com'
}

def ensure_site_tmp_root():
    site_tmp_root = os.environ.get('SITE_TMP_ROOT')
    if not site_tmp_root:
        print("[ERROR] SITE_TMP_ROOT environment variable is not set. This script must be run from update_workflow.sh.")
        sys.exit(1)
    if not os.path.isdir(site_tmp_root):
        print(f"[ERROR] SITE_TMP_ROOT directory does not exist: {site_tmp_root}")
        sys.exit(1)
    os.chdir(site_tmp_root)
    return site_tmp_root

def get_file_hash(file_path):
    """Calculate SHA-256 hash of a file."""
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()

def get_remote_file_hash(url, referer=None):
    """Calculate SHA-256 hash of a remote file."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9',
        }
        if referer:
            headers['Referer'] = referer
            
        response = requests.get(url, stream=True, headers=headers)
        response.raise_for_status()
        
        sha256_hash = hashlib.sha256()
        for chunk in response.iter_content(chunk_size=4096):
            sha256_hash.update(chunk)
        return sha256_hash.hexdigest()
    except Exception as e:
        return None

def find_next_available_filename(base_path, extension):
    """Find next available filename with incremental number."""
    counter = 1
    while True:
        new_path = base_path.parent / f"{base_path.stem}_{counter}{extension}"
        if not new_path.exists():
            return new_path
        counter += 1

def clean_filename(url, context=None):
    """Clean and normalize filename from URL. Optionally prepend context for generic names."""
    # Parse URL and get the path
    parsed = urlparse(url)
    path = unquote(parsed.path)
    
    # Get the base filename
    filename = os.path.basename(path)
    
    # Remove any query parameters
    filename = filename.split('?')[0]
    
    # Remove any size/quality indicators (e.g., -p-500, -p-130x130q80)
    # filename = re.sub(r'-p-\d+(?:x\d+q\d+)?', '', filename)
    
    # Remove everything from start until first dash or underscore (including the dash or underscore)
    if 'css' in filename:
        filename = re.sub(r'\.webflow\.shared\.[a-zA-Z0-9]+', '', filename)
    else:
        filename = re.sub(r'^[^-_]+[-_]', '', filename)
        if 'svg' in filename:
            filename = re.sub(r'^[^_]+[_]', '', filename)
    
    # Decode URL-encoded characters
    filename = unquote(filename)
    filename = re.sub(r'[^a-zA-Z0-9.-]', '-', filename)
    filename = re.sub(r'-+', '-', filename)
    
    # Remove leading/trailing hyphens
    filename = filename.strip('-')
    # If filename is generic (e.g., 01.jpg), prepend context
    if context and re.match(r'^\d+\.(jpg|jpeg|png|gif|svg)$', filename, re.IGNORECASE):
        filename = f"{context}-{filename}"
    return filename

def download_file(url, local_path, referer=None):
    """Download a file from URL to local path."""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
        }
        if referer:
            headers['Referer'] = referer
            
        response = requests.get(url, stream=True, headers=headers)
        response.raise_for_status()
        
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        
        with open(local_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        return False, str(e)

def process_css_file(css_path, verbose=False):
    """Process CSS file to download and update font references."""
    print(f"\nProcessing CSS file {css_path}...")
    
    # Read the CSS file
    try:
        with open(css_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading CSS file {css_path}: {e}")
        return False
    
    # Find all font URLs in the CSS file
    font_url_pattern = r'url\([\'"]?(https://[^\'"]+)[\'"]?\)'
    font_urls = re.findall(font_url_pattern, content)
    
    if not font_urls:
        return True
    
    # Stats
    found = len(font_urls)
    already_local = 0
    downloaded = 0
    errors = []
    
    def update_progress():
        """Print current progress"""
        print(f"\r  Found: {found} | Already local: {already_local} | Downloaded: {downloaded} | Errors: {len(errors)}", end='', flush=True)
    
    # Process each font URL
    for font_url in font_urls:
        if verbose:
            print(f"\nFound font URL: {font_url}")
        
        filename = clean_filename(font_url)
        fonts_dir = Path('fonts')
        local_path = fonts_dir / filename
        
        if local_path.exists():
            already_local += 1
        else:
            if verbose:
                print(f"Downloading font {filename}...")
            result = download_file(font_url, local_path, referer=str(css_path))
            if isinstance(result, tuple):
                success, error = result
                if not success:
                    errors.append(f"Failed to download font {filename}: {error}")
                    continue
            downloaded += 1
        
        # Replace font URL in CSS content
        local_url = f"../fonts/{filename}"
        content = content.replace(font_url, local_url)
        update_progress()
    
    # Write the modified CSS content back to file
    try:
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        errors.append(f"Failed to write CSS file: {e}")
        return False
    
    print(f"\nCompleted processing CSS file {css_path}")
    print(f"  Found: {found} | Already local: {already_local} | Downloaded: {downloaded} | Errors: {len(errors)}")
    if errors:
        print("  Errors:")
        for error in errors:
            print(f"    - {error}")
    
    return True

def process_source_file(file_path, verbose=0, is_css=False):
    """Process HTML or CSS file to replace CDN links with local ones and report stats."""
    if verbose >= 1:
        print(f"\n[process_source_file] START: {file_path} (is_css={is_css})")
    # Read the source file
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return
    

    # Find all CDN links in src and srcset attributes
    if is_css:
        # For CSS files, look for URLs in url() functions and background-image properties
        cdn_pattern = r'(url\(["\']?|background-image:\s*url\(["\']?)(https://[^"\')]+)(["\']?\))'
    else:
        # For HTML files, look for direct URLs
        cdn_pattern = r'https://cdn\.prod\.website-files\.com/[^"\']+'
    
    # Use source file stem as context
    context = Path(file_path).stem
    
    # Calculate relative paths based on file location
    file_dir = file_path.parent
    if is_css:
        # CSS files are in css/ directory, need to go up one level
        css_to_root = Path('..')
        css_to_images = css_to_root / 'images'
        css_to_fonts = css_to_root / 'fonts'
    else:
        # HTML files can be in any directory, calculate relative paths to root
        html_to_root = Path('/'.join(['..'] * len(file_dir.parts)))
        html_to_css = html_to_root / 'css'
        html_to_images = html_to_root / 'images'
        html_to_fonts = html_to_root / 'fonts'
        html_to_js = html_to_root / 'js'
    
    # Stats
    found = set()  # Set of unique URLs found
    processed = {}  # Dict to track processed URLs and their status
    errors = []
    unique_domains = set()  # Track unique domains
    skipped_domains = set()  # Track domains that were skipped
    resource_types = {'js': 0, 'css': 0, 'image': 0, 'font': 0, 'other': 0}
    
    def update_progress():
        """Print current progress"""
        already_local = sum(1 for status in processed.values() if status == 'local')
        downloaded = sum(1 for status in processed.values() if status == 'downloaded')
        skipped = sum(1 for status in processed.values() if status == 'skipped')
        print(f"\r  Found: {len(found)} | Already local: {already_local} | Downloaded: {downloaded} | Skipped: {skipped} | Errors: {len(errors)}", end='', flush=True)
    
    def get_local_url(filename, file_type):
        """Get the correct local URL based on file type and location."""
        if is_css:
            if file_type == 'font':
                return str(css_to_fonts / filename)
            return str(css_to_images / filename)
        else:
            if file_type == 'css':
                return str(html_to_css / filename)
            elif file_type == 'font':
                return str(html_to_fonts / filename)
            elif file_type == 'js':
                return str(html_to_js / filename)
            return str(html_to_images / filename)
    
    def extract_domain(url):
        """Extract domain from URL and add to unique_domains set."""
        try:
            if not url.startswith(('http://', 'https://')):
                url = 'https://' + url
            parsed = urlparse(url)
            domain = parsed.netloc.replace('www.', '')
            if domain:
                unique_domains.add(domain)
                return domain
        except Exception as e:
            if verbose >= 2:
                print(f"\nError processing URL {url}: {e}")
        return None
    
    def handle_file_download(url, filename, verbose=0):
        """Handle file download with collision detection."""
        # Extract domain and check if it's denied
        domain = extract_domain(url)
        # Determine file type and appropriate directory
        if 'css' in filename:
            base_dir = Path('css')
            file_type = 'css'
        elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
            base_dir = Path('fonts')
            file_type = 'font'
        elif filename.lower().endswith('.js'):
            base_dir = Path('js')
            file_type = 'js'
        else:
            base_dir = Path('images')
            file_type = 'image'
        local_path = base_dir / filename
        if verbose >= 1:
            print(f"[handle_file_download] URL: {url}\n  Type: {file_type}\n  Local path: {local_path}")
        if domain and domain in DENIED_DOMAINS:
            if verbose >= 1:
                print(f"[handle_file_download] Skipping denied domain: {domain}")
            skipped_domains.add(domain)
            return None, 'skipped'
        if local_path.exists():
            if verbose >= 1:
                print(f"[handle_file_download] File already exists, reusing: {local_path}")
            if file_type == 'css':
                # If we're processing a CSS file, just use the existing file
                if is_css:
                    if verbose >= 2:
                        print(f"Using existing CSS file: {local_path}")
                    return local_path, None
                
                # If we're processing an HTML file, we need to check if the CSS file
                # has already been modified (contains local paths)
                try:
                    with open(local_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    if '../images' in content or '../fonts' in content:
                        if verbose >= 2:
                            print(f"CSS file already contains local paths: {local_path}")
                        return local_path, None
                except Exception as e:
                    if verbose >= 2:
                        print(f"[handle_file_download] Error reading CSS file: {e}")
                
                # If we get here, we need to compare hashes
                remote_hash = get_remote_file_hash(url, referer=str(file_path))
                if remote_hash is None:
                    if verbose >= 2:
                        print(f"[handle_file_download] Failed to get remote file hash for {url}")
                    return None, f"Failed to get remote file hash for {url}"
                local_hash = get_file_hash(local_path)
                if remote_hash == local_hash:
                    if verbose >= 2:
                        print(f"[handle_file_download] CSS file hash matches: {local_path}")
                    return local_path, None
                
                # Content is different, find new filename
                new_path = find_next_available_filename(local_path, local_path.suffix)
                if verbose >= 2:
                    print(f"[handle_file_download] File {filename} exists but content differs. Using {new_path.name}")
                return new_path, None
            else:
                # For non-CSS files, just use existing file
                if verbose >= 2:
                    print(f"[handle_file_download] Using existing non-CSS file: {local_path}")
                return local_path, None
        if verbose >= 1:
            print(f"[handle_file_download] Downloading: {url} -> {local_path}")
        result = download_file(url, local_path, referer=str(file_path))
        if isinstance(result, tuple):
            success, error = result
            if not success:
                if verbose >= 1:
                    print(f"[handle_file_download] Download failed: {url} -> {local_path}\n  Error: {error}")
                return None, f"Failed to download {filename}: {error}"
        if verbose >= 1:
            print(f"[handle_file_download] Download successful: {url} -> {local_path}")
        return local_path, None
    
    # Process srcset attributes (only for HTML files)
    if not is_css:
        srcset_pattern = r'srcset="([^"]+)"'
        for match in re.finditer(srcset_pattern, content):
            srcset = match.group(1)
            urls = [url.strip().split(' ')[0] for url in srcset.split(',')]
            for url in urls:
                if 'cdn.prod.website-files.com' in url:
                    found.add(url)
                    ext = url.split('.')[-1].lower()
                    if ext == 'js':
                        resource_types['js'] += 1
                    elif ext == 'css':
                        resource_types['css'] += 1
                    elif ext in ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']:
                        resource_types['image'] += 1
                    elif ext in ['woff', 'woff2', 'ttf', 'eot', 'otf']:
                        resource_types['font'] += 1
                    else:
                        resource_types['other'] += 1
                    if verbose >= 2:
                        print(f"[process_source_file] Found in srcset: {url} (type: {ext})")
                    filename = clean_filename(url, context)
                    local_path, error = handle_file_download(url, filename, verbose)
                    if error == 'skipped':
                        processed[url] = 'skipped'
                        continue
                    if error:
                        errors.append(error)
                        processed[url] = 'error'
                        continue
                    if local_path:
                        if local_path.exists():
                            processed[url] = 'local'
                        else:
                            processed[url] = 'downloaded'
                        # Replace URL in srcset
                        local_url = get_local_url(local_path.name, 'image')
                        content = content.replace(url, local_url)
                    update_progress()
    
    # Process regular src attributes and other CDN links
    if is_css:
        for match in re.finditer(cdn_pattern, content):
            prefix, cdn_url, suffix = match.groups()
            found.add(cdn_url)
            ext = cdn_url.split('.')[-1].lower()
            if ext == 'js':
                resource_types['js'] += 1
            elif ext == 'css':
                resource_types['css'] += 1
            elif ext in ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']:
                resource_types['image'] += 1
            elif ext in ['woff', 'woff2', 'ttf', 'eot', 'otf']:
                resource_types['font'] += 1
            else:
                resource_types['other'] += 1
            if verbose >= 2:
                print(f"[process_source_file] Found in CSS: {cdn_url} (type: {ext})")
            filename = clean_filename(cdn_url, context)
            local_path, error = handle_file_download(cdn_url, filename, verbose)
            
            if error == 'skipped':
                processed[cdn_url] = 'skipped'
                continue
            if error:
                errors.append(error)
                processed[cdn_url] = 'error'
                continue
                
            if local_path:
                if local_path.exists():
                    processed[cdn_url] = 'local'
                else:
                    processed[cdn_url] = 'downloaded'
                
                # Determine file type and get correct local URL
                if filename.lower().endswith('.js'):
                    file_type = 'js'
                elif 'css' in filename:
                    file_type = 'css'
                elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    file_type = 'font'
                else:
                    file_type = 'image'
                local_url = get_local_url(local_path.name, file_type)
                
                # Replace the matched string with the local URL
                content = content.replace(f"{prefix}{cdn_url}{suffix}", f"{prefix}{local_url}{suffix}")
            update_progress()
    else:
        for cdn_url in re.findall(cdn_pattern, content):
            found.add(cdn_url)
            ext = cdn_url.split('.')[-1].lower()
            if ext == 'js':
                resource_types['js'] += 1
            elif ext == 'css':
                resource_types['css'] += 1
            elif ext in ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']:
                resource_types['image'] += 1
            elif ext in ['woff', 'woff2', 'ttf', 'eot', 'otf']:
                resource_types['font'] += 1
            else:
                resource_types['other'] += 1
            if verbose >= 2:
                print(f"[process_source_file] Found: {cdn_url} (type: {ext})")
            filename = clean_filename(cdn_url, context)
            local_path, error = handle_file_download(cdn_url, filename, verbose)
            if error == 'skipped':
                processed[cdn_url] = 'skipped'
                continue
            if error:
                errors.append(error)
                processed[cdn_url] = 'error'
                continue
            if local_path:
                if local_path.exists():
                    processed[cdn_url] = 'local'
                else:
                    processed[cdn_url] = 'downloaded'
                
                # Determine file type and get correct local URL
                if filename.lower().endswith('.js'):
                    file_type = 'js'
                elif 'css' in filename:
                    file_type = 'css'
                elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    file_type = 'font'
                else:
                    file_type = 'image'
                local_url = get_local_url(local_path.name, file_type)
                content = content.replace(cdn_url, local_url)
            update_progress()
    
    webflow_domain_pattern = r'https://claudio-carbone---the-embedded-expert\.webflow\.io(\/[^"\']+)'
    for match in re.finditer(webflow_domain_pattern, content):
        full_url = match.group(0)
        relative_path = match.group(1)
        content = content.replace(full_url, relative_path)
    # Write the modified content back to file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        errors.append(f"Failed to write file: {e}")
    
    # Calculate final stats
    already_local = sum(1 for status in processed.values() if status == 'local')
    downloaded = sum(1 for status in processed.values() if status == 'downloaded')
    skipped = sum(1 for status in processed.values() if status == 'skipped')
    
    if verbose >= 1:
        print(f"[process_source_file] END: {file_path}")
        print(f"  Resource summary: {resource_types}")
        print(f"  Already local: {already_local} | Downloaded: {downloaded} | Skipped: {skipped} | Errors: {len(errors)}")
    
    # Show unique domains if verbose level 1 or higher
    if verbose >= 1:
        print("\nUnique domains found:")
        for domain in sorted(unique_domains):
            status = " (skipped)" if domain in skipped_domains else ""
            print(f"  - {domain}{status}")
    
    if errors:
        print("  Errors:")
        for error in errors:
            print(f"    - {error}")

def remove_webflow_badge(css_path):
    """Remove Webflow badge classes from CSS file."""
    try:
        with open(css_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove all Webflow badge related CSS
        badge_patterns = [
            r'\.w-webflow-badge[^{]*{[^}]*}',
            r'\.w-webflow-badge\s*>\s*img[^{]*{[^}]*}'
        ]
        
        for pattern in badge_patterns:
            content = re.sub(pattern, '', content)
        
        # Write the modified content back to file
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"Error removing Webflow badge from {css_path}: {e}")
        return False

def extract_chunk_hashes(js_path):
    with open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    # Match the mapping object
    m = re.search(r'return\s+"webflow\.achunk\."\s*\+\s*(\{[\s\S]+?\})\[chunkId\]\s*\+\s*"\.js"', content)
    if not m:
        return []
    mapping_str = m.group(1)
    # Extract all hash values from the mapping
    hashes = re.findall(r':\s*"([a-f0-9]+)"', mapping_str)
    return hashes

def extract_cdn_base_from_html(html_path):
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    m = re.search(r'data-wf-site=["\']([a-zA-Z0-9]+)["\']', content)
    if m:
        site_id = m.group(1)
        return f"https://cdn.prod.website-files.com/{site_id}/"
    return None

def download_missing_js_chunks_for_file(js_path, cdn_base, verbose=0):
    hashes = extract_chunk_hashes(js_path)
    if not hashes:
        if verbose:
            print(f"[INFO] No chunk mapping found in {js_path}")
        return 0, 0
    chunk_filenames = [f'webflow.achunk.{h}.js' for h in hashes]
    missing = []
    for chunk in chunk_filenames:
        local_path = Path('images') / chunk
        if not local_path.exists():
            missing.append(chunk)
    if not missing:
        if verbose:
            print(f"[INFO] All JS chunks present for {js_path}")
        return len(chunk_filenames), 0
    print(f"[INFO] {len(missing)} missing JS chunks in {js_path}, downloading...")
    os.makedirs('js/', exist_ok=True)
    for chunk in missing:
        url = f"{cdn_base}{chunk}"
        local_path = Path('js/') / chunk
        result = download_file(url, local_path, referer=str(js_path))
        if result is True:
            if verbose:
                print(f"[OK] Downloaded {chunk}")
        else:
            success, error = result
            print(f"[ERR] Failed to download {chunk}: {error}")
    return len(chunk_filenames), len(missing)

def main():
    site_tmp_root = ensure_site_tmp_root()
    parser = argparse.ArgumentParser(description='Download CDN resources and update HTML files with local paths.')
    parser.add_argument('-v', '--verbose', action='count', default=0, help='Verbose output level: 1=show domains, 2=show all URLs')
    parser.add_argument('-f', '--file', help='Process a single file instead of all HTML files in the current directory')
    parser.add_argument('--cdn-base', help='CDN base path for downloading missing JS chunks (e.g., https://cdn.prod.website-files.com/67fe6c865fd8486d7b051a66/js/)')
    args = parser.parse_args()
    
    if args.file:
        # Process single file
        file_path = Path(args.file)
        if not file_path.exists():
            print(f"Error: File {args.file} does not exist")
            sys.exit(1)
            
        print(f"\n=== Processing single file: {file_path} ===")
        if file_path.suffix.lower() == '.css':
            process_source_file(file_path, args.verbose, is_css=True)
            remove_webflow_badge(file_path)
        else:
            process_source_file(file_path, args.verbose)
    else:
        # First pass: Process all HTML files
        print("\n=== First Pass: Processing HTML Files ===")
        for html_file in Path('.').rglob('*.html'):
            process_source_file(html_file, args.verbose)
        
        # Second pass: Process all CSS files
        print("\n=== Second Pass: Processing CSS Files ===")
        for css_file in Path('css').rglob('*.css'):
            process_source_file(css_file, args.verbose, is_css=True)
            remove_webflow_badge(css_file)
    # --- NEW: Extract CDN base from data-wf-site attribute ---
    cdn_base = args.cdn_base
    if not cdn_base:
        html_files = list(Path('.').rglob('*.html'))
        cdn_base = None
        for html_file in html_files:
            cdn_base = extract_cdn_base_from_html(html_file)
            if cdn_base:
                break
        if not cdn_base:
            print("[WARN] Could not extract CDN base path for JS chunk download. Use --cdn-base to specify.")
    # --- NEW: Download missing JS chunks per JS file using CDN base ---
    if cdn_base:
        total_chunks = 0
        total_missing = 0
        for js_file in Path('.').rglob('*.js'):
            n_chunks, n_missing = download_missing_js_chunks_for_file(js_file, cdn_base + 'js/', verbose=args.verbose)
            total_chunks += n_chunks
            total_missing += n_missing
        print(f"[INFO] JS chunk download step complete. {total_missing} missing chunks downloaded (out of {total_chunks} referenced).")
    else:
        print("[WARN] Skipping JS chunk download step (no CDN base specified).")

if __name__ == "__main__":
    main() 
