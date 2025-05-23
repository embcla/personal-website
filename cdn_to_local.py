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

def process_html_file(file_path, verbose=False):
    """Process HTML file to replace CDN links with local ones and report stats."""
    print(f"\nProcessing {file_path}...")
    
    # Read the HTML file
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return
    
    # Find all CDN links in src and srcset attributes
    cdn_pattern = r'https://cdn\.prod\.website-files\.com/[^"\']+'
    
    # Use HTML file stem as context
    context = Path(file_path).stem
    
    # Stats
    found = set()
    already_local = 0
    downloaded = 0
    errors = []
    
    def update_progress():
        """Print current progress"""
        print(f"\r  Found: {len(found)} | Already local: {already_local} | Downloaded: {downloaded} | Errors: {len(errors)}", end='', flush=True)
    
    def handle_file_download(url, filename, is_css=False):
        """Handle file download with collision detection for CSS files."""
        images_dir = Path('images')
        local_path = images_dir / filename
        
        if local_path.exists():
            if is_css:
                # For CSS files, compare content
                remote_hash = get_remote_file_hash(url, referer=str(file_path))
                if remote_hash is None:
                    return None, f"Failed to get remote file hash for {url}"
                
                local_hash = get_file_hash(local_path)
                if remote_hash == local_hash:
                    return local_path, None
                
                # Content is different, find new filename
                while True:
                    local_path = find_next_available_filename(local_path, local_path.suffix)
                    if not local_path.exists():
                        break
                    local_hash = get_file_hash(local_path)
                    if remote_hash == local_hash:
                        return local_path, None
            else:
                # For non-CSS files, just use existing file
                return local_path, None
        
        # File doesn't exist or is different, download it
        if verbose:
            print(f"\nDownloading {filename}...")
        result = download_file(url, local_path, referer=str(file_path))
        if isinstance(result, tuple):
            success, error = result
            if not success:
                return None, f"Failed to download {filename}: {error}"
        return local_path, None
    
    # Process srcset attributes
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
                    continue
                if local_path:
                    already_local += 1
                    # Replace URL in srcset
                    local_url = f"images/{local_path.name}"
                    content = content.replace(url, local_url)
                update_progress()
    
    # Process regular src attributes and other CDN links
    cdn_links = re.findall(cdn_pattern, content)
    for cdn_url in cdn_links:
        found.add(cdn_url)
        if verbose:
            print(f"\nFound URL: {cdn_url}")
        filename = clean_filename(cdn_url, context)
        is_css = 'css' in filename
        local_path, error = handle_file_download(cdn_url, filename, is_css)
        if error:
            errors.append(error)
            continue
        if local_path:
            already_local += 1
            local_url = f"images/{local_path.name}"
            content = content.replace(cdn_url, local_url)
        update_progress()
    
    # Write the modified content back to file
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        errors.append(f"Failed to write file: {e}")
    
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
    
    # Process all HTML files recursively
    for html_file in Path('.').rglob('*.html'):
        process_html_file(html_file, args.verbose)

if __name__ == "__main__":
    main() 