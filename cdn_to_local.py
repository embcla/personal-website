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

def process_source_file(file_path, verbose=False, is_css=False):
    """Process HTML or CSS file to replace CDN links with local ones and report stats."""
    print(f"\nProcessing {file_path}...")
    
    # Read the source file
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return
    
    # Remove Webflow-specific data attributes from HTML files
    if not is_css:
        webflow_attrs = ['data-wf-domain', 'data-wf-page', 'data-wf-site']
        for attr in webflow_attrs:
            content = re.sub(f' {attr}="[^"]*"', '', content)
            if verbose:
                print(f"\nRemoved {attr} attribute")
    
    # Find all CDN links in src and srcset attributes
    if is_css:
        # For CSS files, look for URLs in url() functions and background-image properties
        cdn_pattern = r'(url\(["\']?|background-image:\s*url\(["\']?)(https://[^"\')]+)(["\']?\))'
    else:
        # For HTML files, look for direct URLs
        cdn_pattern = r'https://cdn\.prod\.website-files\.com/[^"\']+'
    
    # Use source file stem as context
    context = Path(file_path).stem
    
    # Stats
    found = set()  # Set of unique URLs found
    processed = {}  # Dict to track processed URLs and their status
    errors = []
    
    def update_progress():
        """Print current progress"""
        already_local = sum(1 for status in processed.values() if status == 'local')
        downloaded = sum(1 for status in processed.values() if status == 'downloaded')
        print(f"\r  Found: {len(found)} | Already local: {already_local} | Downloaded: {downloaded} | Errors: {len(errors)}", end='', flush=True)
    
    def handle_file_download(url, filename):
        """Handle file download with collision detection."""
        # Determine file type and appropriate directory
        if 'css' in filename:
            base_dir = Path('css')
        elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
            base_dir = Path('fonts')
        else:
            base_dir = Path('images')
            
        local_path = base_dir / filename
        
        if local_path.exists():
            # For CSS files, compare content
            if 'css' in filename:
                remote_hash = get_remote_file_hash(url, referer=str(file_path))
                if remote_hash is None:
                    return None, f"Failed to get remote file hash for {url}"
                
                local_hash = get_file_hash(local_path)
                if remote_hash == local_hash:
                    return local_path, None
                
                # Content is different, find new filename
                new_path = find_next_available_filename(local_path, local_path.suffix)
                if verbose:
                    print(f"\nFile {filename} exists but content differs. Using {new_path.name}")
                return new_path, None
            else:
                # For non-CSS files, just use existing file
                return local_path, None
        
        # File doesn't exist, download it
        if verbose:
            print(f"\nDownloading {filename}...")
        result = download_file(url, local_path, referer=str(file_path))
        if isinstance(result, tuple):
            success, error = result
            if not success:
                return None, f"Failed to download {filename}: {error}"
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
                    if verbose:
                        print(f"\nFound URL: {url}")
                    filename = clean_filename(url, context)
                    local_path, error = handle_file_download(url, filename)
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
                        local_url = f"images/{local_path.name}"
                        content = content.replace(url, local_url)
                    update_progress()
    
    # Process regular src attributes and other CDN links
    if is_css:
        for match in re.finditer(cdn_pattern, content):
            prefix, cdn_url, suffix = match.groups()
            found.add(cdn_url)
            if verbose:
                print(f"\nFound URL: {cdn_url}")
            filename = clean_filename(cdn_url, context)
            local_path, error = handle_file_download(cdn_url, filename)
            if error:
                errors.append(error)
                processed[cdn_url] = 'error'
                continue
            if local_path:
                if local_path.exists():
                    processed[cdn_url] = 'local'
                else:
                    processed[cdn_url] = 'downloaded'
                # Determine the correct relative path based on file type
                if 'css' in filename:
                    local_url = f"css/{local_path.name}"
                elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    local_url = f"fonts/{local_path.name}"
                else:
                    local_url = f"images/{local_path.name}"
                # Replace the matched string with the local URL
                content = content.replace(f"{prefix}{cdn_url}{suffix}", f"{prefix}{local_url}{suffix}")
            update_progress()
    else:
        for cdn_url in re.findall(cdn_pattern, content):
            found.add(cdn_url)
            if verbose:
                print(f"\nFound URL: {cdn_url}")
            filename = clean_filename(cdn_url, context)
            local_path, error = handle_file_download(cdn_url, filename)
            if error:
                errors.append(error)
                processed[cdn_url] = 'error'
                continue
            if local_path:
                if local_path.exists():
                    processed[cdn_url] = 'local'
                else:
                    processed[cdn_url] = 'downloaded'
                # Determine the correct relative path based on file type
                if 'css' in filename:
                    local_url = f"css/{local_path.name}"
                elif any(filename.lower().endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    local_url = f"fonts/{local_path.name}"
                else:
                    local_url = f"images/{local_path.name}"
                content = content.replace(cdn_url, local_url)
            update_progress()
    
    # Write the modified content back to file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        errors.append(f"Failed to write file: {e}")
    
    # Calculate final stats
    already_local = sum(1 for status in processed.values() if status == 'local')
    downloaded = sum(1 for status in processed.values() if status == 'downloaded')
    
    print(f"\nCompleted processing {file_path}")
    print(f"  Found: {len(found)} | Already local: {already_local} | Downloaded: {downloaded} | Errors: {len(errors)}")
    if errors:
        print("  Errors:")
        for error in errors:
            print(f"    - {error}")

def main():
    parser = argparse.ArgumentParser(description='Download CDN resources and update HTML files with local paths.')
    parser.add_argument('-v', '--verbose', action='store_true', help='Show detailed output including URLs and download progress')
    args = parser.parse_args()
    
    # First pass: Process all HTML files
    print("\n=== First Pass: Processing HTML Files ===")
    for html_file in Path('.').rglob('*.html'):
        process_source_file(html_file, args.verbose)
    
    # Second pass: Process all CSS files
    print("\n=== Second Pass: Processing CSS Files ===")
    for css_file in Path('css').rglob('*.css'):
        process_source_file(css_file, args.verbose, is_css=True)

if __name__ == "__main__":
    main() 
