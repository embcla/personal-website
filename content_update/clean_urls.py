#!/usr/bin/env python3

import os
import re
from pathlib import Path
import argparse
import sys
from urllib.parse import urlparse, unquote

def get_clean_url_from_path(file_path):
    """Convert file path to clean URL by removing .html extension and adjusting path."""
    # Convert Path object to string and normalize
    path_str = str(file_path)
    
    # Remove .html extension
    if path_str.endswith('.html'):
        path_str = path_str[:-5]
    
    # Handle index.html specially - it becomes root
    if path_str == 'index':
        path_str = '/'
    elif path_str.endswith('/index'):
        path_str = path_str[:-6]  # Remove /index
        if not path_str:  # If we're left with empty string, it's root
            path_str = '/'
        else:
            path_str = '/' + path_str
    else:
        # Add leading slash for all other paths
        path_str = '/' + path_str
    
    return path_str

def get_file_path_from_clean_url(clean_url):
    """Convert clean URL back to file path."""
    if clean_url == '/':
        return 'index.html'
    
    # Remove leading slash
    if clean_url.startswith('/'):
        clean_url = clean_url[1:]
    
    # Add .html extension
    return clean_url + '.html'

def find_all_html_files():
    """Find all HTML files in the current directory and subdirectories."""
    html_files = []
    for html_file in Path('.').rglob('*.html'):
        # Skip files in .git directory
        if '.git' in html_file.parts:
            continue
        html_files.append(html_file)
    return sorted(html_files)

def generate_vercel_rewrites(html_files):
    """Generate vercel.json rewrites from HTML file list."""
    rewrites = []
    
    for html_file in html_files:
        clean_url = get_clean_url_from_path(html_file)
        file_path = str(html_file)
        
        # Skip if it's already the root index (no rewrite needed for root)
        if clean_url == '/':
            continue
            
        rewrites.append({
            "source": clean_url,
            "destination": f"/{file_path}"
        })
    
    return rewrites

def transform_html_links(content, file_path):
    """Transform all internal HTML links in content to clean URLs."""
    # Get the directory of the current file for relative path calculations
    current_dir = file_path.parent
    
    # Pattern to match href attributes that point to .html files
    # This handles both relative and absolute paths
    href_pattern = r'href=["\']([^"\']*\.html[^"\']*)["\']'
    
    def replace_href(match):
        href_value = match.group(1)
        
        # Skip if it's an external URL or anchor-only link
        if href_value.startswith(('http://', 'https://', 'mailto:', 'tel:', '#')):
            return match.group(0)
        
        # Handle relative paths
        if not href_value.startswith('/'):
            # Calculate the full path relative to current file
            if href_value.startswith('./'):
                href_value = href_value[2:]
            elif href_value.startswith('../'):
                # Count the number of ../ and adjust path accordingly
                up_levels = href_value.count('../')
                href_value = href_value.replace('../', '', up_levels)
                # Go up the directory structure
                temp_path = current_dir
                for _ in range(up_levels):
                    temp_path = temp_path.parent
                href_value = str(temp_path / href_value)
            else:
                href_value = str(current_dir / href_value)
        else:
            # Absolute path from root
            href_value = href_value[1:]  # Remove leading slash
        
        # Convert to Path object for easier manipulation
        target_path = Path(href_value)
        
        # Skip if the target file doesn't exist
        if not target_path.exists():
            return match.group(0)
        
        # Convert to clean URL
        clean_url = get_clean_url_from_path(target_path)
        
        # Return the transformed href
        return f'href="{clean_url}"'
    
    # Apply the transformation
    transformed_content = re.sub(href_pattern, replace_href, content)
    
    return transformed_content

def process_html_file(file_path, dry_run=False, verbose=False):
    """Process a single HTML file to transform internal links."""
    if verbose:
        print(f"Processing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file {file_path}: {e}")
        return False
    
    # Transform the content
    transformed_content = transform_html_links(content, file_path)
    
    # Check if content changed
    if content == transformed_content:
        if verbose:
            print(f"  No changes needed for {file_path}")
        return True
    
    if verbose:
        print(f"  Transforming links in {file_path}")
    
    if not dry_run:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(transformed_content)
        except Exception as e:
            print(f"Error writing file {file_path}: {e}")
            return False
    
    return True

def update_vercel_json(rewrites, dry_run=False):
    """Update vercel.json with new rewrites."""
    vercel_config = {
        "rewrites": rewrites
    }
    
    if dry_run:
        print("\n=== DRY RUN: Generated vercel.json content ===")
        import json
        print(json.dumps(vercel_config, indent=2))
        return True
    
    try:
        import json
        with open('vercel.json', 'w', encoding='utf-8') as f:
            json.dump(vercel_config, f, indent=2)
        return True
    except Exception as e:
        print(f"Error writing vercel.json: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Transform HTML links to clean URLs and generate vercel.json rewrites.')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be changed without making changes')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    parser.add_argument('--html-only', action='store_true', help='Only transform HTML links, skip vercel.json generation')
    parser.add_argument('--vercel-only', action='store_true', help='Only generate vercel.json, skip HTML transformation')
    args = parser.parse_args()
    
    print("=== Clean URL Transformation Tool ===")
    
    # Find all HTML files
    html_files = find_all_html_files()
    print(f"Found {len(html_files)} HTML files")
    
    if args.verbose:
        print("\nHTML files found:")
        for html_file in html_files:
            clean_url = get_clean_url_from_path(html_file)
            print(f"  {html_file} -> {clean_url}")
    
    # Generate vercel.json rewrites
    if not args.html_only:
        print("\n=== Generating vercel.json rewrites ===")
        rewrites = generate_vercel_rewrites(html_files)
        print(f"Generated {len(rewrites)} rewrite rules")
        
        if args.verbose:
            print("\nRewrite rules:")
            for rewrite in rewrites:
                print(f"  {rewrite['source']} -> {rewrite['destination']}")
        
        if not args.vercel_only:
            update_vercel_json(rewrites, args.dry_run)
    
    # Transform HTML files
    if not args.vercel_only:
        print("\n=== Transforming HTML links ===")
        processed = 0
        errors = 0
        
        for html_file in html_files:
            if process_html_file(html_file, args.dry_run, args.verbose):
                processed += 1
            else:
                errors += 1
        
        print(f"\nProcessed: {processed} files")
        if errors > 0:
            print(f"Errors: {errors} files")
    
    print("\n=== Clean URL transformation complete ===")

if __name__ == "__main__":
    main() 