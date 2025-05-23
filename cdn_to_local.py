#!/usr/bin/env python3

import os
import re
from pathlib import Path
import shutil
import requests
from urllib.parse import urlparse, unquote
import html

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
    filename = re.sub(r'-p-\d+(?:x\d+q\d+)?', '', filename)
    
    # Remove everything from start until first dash (including the dash)
    filename = re.sub(r'^[^-]+-', '', filename)
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
        print(f"Error downloading {url}: {e}")
        return False

def process_html_file(file_path):
    """Process HTML file to replace CDN links with local ones and report stats."""
    print(f"\nProcessing {file_path}...")
    
    # Read the HTML file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all CDN links in src and srcset attributes
    cdn_pattern = r'https://cdn\.prod\.website-files\.com/[^"\']+'
    
    # Use HTML file stem as context
    context = Path(file_path).stem
    
    # Stats
    found = set()
    already_local = 0
    downloaded = 0
    
    # Process srcset attributes
    srcset_pattern = r'srcset="([^"]+)"'
    for match in re.finditer(srcset_pattern, content):
        srcset = match.group(1)
        urls = [url.strip().split(' ')[0] for url in srcset.split(',')]
        for url in urls:
            if 'cdn.prod.website-files.com' in url:
                found.add(url)
                filename = clean_filename(url, context)
                images_dir = Path('images')
                local_path = images_dir / filename
                if local_path.exists():
                    already_local += 1
                else:
                    print(f"Downloading {filename}...")
                    if download_file(url, local_path, referer=str(file_path)):
                        downloaded += 1
                # Replace URL in srcset
                local_url = f"images/{filename}"
                content = content.replace(url, local_url)
    
    # Process regular src attributes and other CDN links
    cdn_links = re.findall(cdn_pattern, content)
    for cdn_url in cdn_links:
        found.add(cdn_url)
        filename = clean_filename(cdn_url, context)
        images_dir = Path('images')
        local_path = images_dir / filename
        if local_path.exists():
            already_local += 1
        else:
            print(f"Downloading {filename}...")
            if download_file(cdn_url, local_path, referer=str(file_path)):
                downloaded += 1
        local_url = f"images/{filename}"
        content = content.replace(cdn_url, local_url)
    
    # Write the modified content back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Completed processing {file_path}")
    print(f"  Found: {len(found)} | Already local: {already_local} | Downloaded: {downloaded}")

def main():
    # Process all HTML files recursively
    for html_file in Path('.').rglob('*.html'):
        process_html_file(html_file)

if __name__ == "__main__":
    main() 