#!/usr/bin/env python3

import os
import re
from pathlib import Path
import argparse
import sys
from urllib.parse import urlparse, unquote

# Ensure SITE_TMP_ROOT is set and chdir into it
def ensure_site_tmp_root():
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

def find_all_html_files():
    """Find all HTML files in the current directory and subdirectories."""
    html_files = []
    for html_file in Path('.').rglob('*.html'):
        # Skip files in .git directory
        if '.git' in html_file.parts:
            continue
        html_files.append(html_file)
    return sorted(html_files)

def generate_sitemap_xml(html_files, domain="https://www.claudio-carbone.tech"):
    """Generate sitemap.xml content from HTML file list."""
    xml_content = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml_content.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">')
    
    for html_file in html_files:
        clean_url = get_clean_url_from_path(html_file)
        full_url = domain + clean_url
        
        # Determine language variants
        if clean_url.startswith('/it/'):
            # Italian page
            en_url = domain + clean_url[3:]  # Remove /it/ prefix
            it_url = full_url
            default_url = en_url
        elif clean_url == '/it':
            # Italian home page
            en_url = domain + '/'
            it_url = full_url
            default_url = en_url
        else:
            # English page
            en_url = full_url
            it_url = domain + '/it' + clean_url
            default_url = en_url
        
        xml_content.append('    <url>')
        xml_content.append(f'        <loc>{full_url}</loc>')
        xml_content.append(f'        <xhtml:link rel="alternate" hreflang="en" href="{en_url}"/>')
        xml_content.append(f'        <xhtml:link rel="alternate" hreflang="it" href="{it_url}"/>')
        xml_content.append(f'        <xhtml:link rel="alternate" hreflang="x-default" href="{default_url}"/>')
        xml_content.append('    </url>')
    
    xml_content.append('</urlset>')
    return '\n'.join(xml_content)

def main():

    parser = argparse.ArgumentParser(description='Generate sitemap.xml from HTML files.')
    parser.add_argument('--domain', default='https://www.claudio-carbone.tech', 
                       help='Domain for the sitemap URLs')
    parser.add_argument('--output-dir', default='', 
                       help='Output directory')
    parser.add_argument('--dry-run', action='store_true', 
                       help='Show what would be generated without writing file')
    parser.add_argument('--verbose', '-v', action='store_true', 
                       help='Verbose output')
    args = parser.parse_args()
    
    #validate output directory
    if not args.output_dir == '':
        if os.path.isdir(args.output_dir):
            output_path = os.path.join(args.output_dir, "sitemap.xml")
        else:
            print(f"You selected a folder that does not exist: {args.output_dir}")
            exit(1)
    else:
        site_tmp_root = ensure_site_tmp_root()
        output_path = os.path.join(site_tmp_root, "sitemap.xml")
        
    
    print("=== Sitemap Generator ===")
    
    # Find all HTML files
    html_files = find_all_html_files()
    print(f"Found {len(html_files)} HTML files")
    
    if args.verbose:
        print("\nHTML files found:")
        for html_file in html_files:
            clean_url = get_clean_url_from_path(html_file)
            print(f"  {html_file} -> {clean_url}")
    
    # Generate sitemap content
    sitemap_content = generate_sitemap_xml(html_files, args.domain)
    
    if args.dry_run:
        print(f"\n=== DRY RUN: Generated sitemap content ===")
        print(sitemap_content)
        return
    
    # Write sitemap file
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(sitemap_content)
        print(f"\nSitemap generated successfully: {output_path}")
    except Exception as e:
        print(f"Error writing sitemap: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 