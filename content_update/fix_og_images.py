#!/usr/bin/env python3

import os
import re
from pathlib import Path
import argparse
import sys

def ensure_site_tmp_root():
    """Ensure SITE_TMP_ROOT is set and chdir into it."""
    site_tmp_root = os.environ.get('SITE_TMP_ROOT')
    if not site_tmp_root:
        print("[ERROR] SITE_TMP_ROOT environment variable is not set. This script must be run from update_workflow.sh.")
        sys.exit(1)
    if not os.path.isdir(site_tmp_root):
        print(f"[ERROR] SITE_TMP_ROOT directory does not exist: {site_tmp_root}")
        sys.exit(1)
    os.chdir(site_tmp_root)
    print(f"[INFO] Working directory set to SITE_TMP_ROOT: {site_tmp_root}")
    return site_tmp_root

def fix_og_image_urls_to_absolute(html_file, domain, verbose=False):
    """Convert Open Graph image URLs to fully qualified URLs with domain."""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Use a single pattern that captures the full og:image tag and replaces it
        pattern = r'(<meta content=")([^"]+)(" property="og:image" />)'
        
        def replace_func(match):
            prefix = match.group(1)  # <meta content="
            image_path = match.group(2)  # the image path
            suffix = match.group(3)  # " property="og:image" />
            
            # Only process if it's an images path
            if image_path.startswith('/images/') or image_path.startswith('../images/') or image_path.startswith('../../images/'):
                if image_path.startswith('/images/'):
                    new_path = f"{domain}{image_path}"
                else:
                    # Remove ../ or ../../ and just use images/...
                    clean_path = image_path.replace('../', '').replace('../../', '')
                    new_path = f"{domain}/{clean_path}"
                
                if verbose:
                    print(f"  Fixing og:image: {image_path} -> {new_path}")
                
                return f'{prefix}{new_path}{suffix}'
            else:
                # Not an images path, leave unchanged
                return match.group(0)
        
        content = re.sub(pattern, replace_func, content)
        
        if content != original_content:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            if verbose:
                print(f"Fixed {html_file}")
            return True
        else:
            if verbose:
                print(f"No og:image changes needed for {html_file}")
            return False
            
    except Exception as e:
        print(f"Error processing {html_file}: {e}")
        return False

def find_html_files():
    """Find all HTML files in the current directory and subdirectories."""
    html_files = []
    for html_file in Path('.').rglob('*.html'):
        # Skip files in .git directory
        if '.git' in html_file.parts:
            continue
        html_files.append(html_file)
    return sorted(html_files)

def main():
    parser = argparse.ArgumentParser(description='Convert Open Graph image URLs to fully qualified URLs with domain.')
    parser.add_argument('--domain', default='https://www.claudio-carbone.tech', 
                       help='Domain for the absolute URLs')
    parser.add_argument('--verbose', '-v', action='store_true', 
                       help='Verbose output')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Show what would be changed without making changes')
    args = parser.parse_args()
    
    site_tmp_root = ensure_site_tmp_root()
    
    print("=== Open Graph Image URL to Absolute URL Converter ===")
    print(f"Domain: {args.domain}")
    
    # Find all HTML files
    html_files = find_html_files()
    print(f"Found {len(html_files)} HTML files")
    
    fixed_count = 0
    
    for html_file in html_files:
        if args.verbose:
            print(f"\nProcessing: {html_file}")
        
        if args.dry_run:
            # For dry run, just check what would be changed
            try:
                with open(html_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                pattern = r'(<meta content=")([^"]+)(" property="og:image" />)'
                matches = re.findall(pattern, content)
                
                total_matches = 0
                for match in matches:
                    image_path = match[1]
                    # Only process if it's an images path
                    if image_path.startswith('/images/') or image_path.startswith('../images/') or image_path.startswith('../../images/'):
                        if image_path.startswith('/images/'):
                            new_path = f"{args.domain}{image_path}"
                        else:
                            # Remove ../ or ../../ and just use images/...
                            clean_path = image_path.replace('../', '').replace('../../', '')
                            new_path = f"{args.domain}/{clean_path}"
                        print(f"  Would fix og:image: {image_path} -> {new_path}")
                        total_matches += 1
                
                if total_matches == 0:
                    print(f"  No og:image changes needed for {html_file}")
                    
            except Exception as e:
                print(f"Error reading {html_file}: {e}")
        else:
            # Actually fix the files
            if fix_og_image_urls_to_absolute(html_file, args.domain, args.verbose):
                fixed_count += 1
    
    if args.dry_run:
        print(f"\n=== DRY RUN COMPLETE ===")
    else:
        print(f"\n=== FIX COMPLETE ===")
        print(f"Fixed {fixed_count} HTML files")

if __name__ == "__main__":
    main() 