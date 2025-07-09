#!/bin/bash

# Comprehensive website update workflow
# This script crawls a website, downloads assets, and transforms it for clean URLs

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if URL is provided
if [ $# -eq 0 ]; then
    print_error "Usage: $0 <website_url> [options]"
    echo ""
    echo "Options:"
    echo "  --dry-run     Show what would be changed without making changes"
    echo "  --verbose     Show detailed output"
    echo "  --html-only   Only transform HTML links, skip vercel.json generation"
    echo "  --vercel-only Only generate vercel.json, skip HTML transformation"
    echo ""
    echo "Example: $0 https://www.mywebsite.com --verbose"
    exit 1
fi

WEBSITE_URL=$1
shift  # Remove the URL from arguments, leaving only options

# Validate URL format
if [[ ! $WEBSITE_URL =~ ^https?:// ]]; then
    print_error "Invalid URL format. Please provide a complete URL starting with http:// or https://"
    exit 1
fi

print_status "Starting website update workflow for: $WEBSITE_URL"

# Step 1: Crawl and download the website
print_status "Step 1: Crawling and downloading website..."
print_status "Using wget to mirror the website..."

# Extract domain name for directory
DOMAIN=$(echo $WEBSITE_URL | sed -E 's|^https?://||' | sed 's|/$||')

# Check if domain directory already exists
if [ -d "$DOMAIN" ]; then
    print_warning "Domain directory $DOMAIN already exists. Removing..."
    rm -rf "$DOMAIN"
fi

# Download the website
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent "$WEBSITE_URL"

if [ $? -ne 0 ]; then
    print_error "Failed to download website. Please check the URL and try again."
    exit 1
fi

print_success "Website downloaded successfully"

# Explicitly download sitemap.xml and robots.txt if they exist
print_status "Downloading sitemap.xml and robots.txt..."
wget -O sitemap.xml "$WEBSITE_URL/sitemap.xml" 2>/dev/null
if [ $? -eq 0 ]; then
    print_success "Sitemap.xml downloaded successfully"
else
    print_warning "Sitemap.xml not found or already downloaded"
fi

# wget -O robots.txt.tmp "$WEBSITE_URL/robots.txt" 2>/dev/null
# if [ $? -eq 0 ]; then
#     print_success "Robots.txt downloaded successfully"
#     # Add sitemap reference if missing
#     if ! grep -q "Sitemap:" robots.txt.tmp; then
#         echo "Sitemap: https://www.claudio-carbone.tech/sitemap.xml" >> robots.txt.tmp
#         print_status "Added sitemap reference to robots.txt"
#     fi
#     mv robots.txt.tmp robots.txt
# else
#     print_warning "Robots.txt not found or already downloaded"
# fi

# Step 2: Copy files to current directory
print_status "Step 2: Copying files to current directory..."
cp -r "$DOMAIN"/* .
rm -rf "$DOMAIN"

print_success "Files copied to current directory"

# Step 3: Process CDN assets
print_status "Step 3: Processing CDN assets and downloading local copies..."
python3 cdn_to_local.py

if [ $? -ne 0 ]; then
    print_error "Failed to process CDN assets"
    exit 1
fi

print_success "CDN assets processed successfully"

# Step 4: Generate sitemap.xml
print_status "Step 4: Generating sitemap.xml..."
python3 generate_sitemap.py

if [ $? -ne 0 ]; then
    print_error "Failed to generate sitemap.xml"
    exit 1
fi

print_success "Sitemap.xml generated successfully"

# Step 5: Transform to clean URLs
print_status "Step 5: Transforming HTML links to clean URLs..."
python3 clean_urls.py "$@"

if [ $? -ne 0 ]; then
    print_error "Failed to transform HTML links"
    exit 1
fi

print_success "HTML links transformed successfully"

# Step 6: Final verification
print_status "Step 6: Final verification..."

# Check if vercel.json was created/updated
if [ -f "vercel.json" ]; then
    REWRITE_COUNT=$(grep -c '"source"' vercel.json || echo "0")
    print_success "vercel.json created with $REWRITE_COUNT rewrite rules"
else
    print_warning "vercel.json not found - this may indicate an issue"
fi

# Count HTML files
HTML_COUNT=$(find . -name "*.html" -not -path "./.git/*" | wc -l)
print_success "Found $HTML_COUNT HTML files"

# Check for any remaining .html links (should be minimal)
REMAINING_HTML_LINKS=$(grep -r 'href="[^"]*\.html"' . --include="*.html" --exclude-dir=".git" | wc -l || echo "0")
if [ "$REMAINING_HTML_LINKS" -gt 0 ]; then
    print_warning "Found $REMAINING_HTML_LINKS remaining .html links (these may be external or intentional)"
fi

print_success "Website update workflow completed successfully!"
echo ""
print_status "Next steps:"
echo "  1. Review the generated vercel.json file"
echo "  2. Test the website locally if needed"
echo "  3. Deploy to Vercel: vercel --prod"
echo ""
print_status "The website now supports clean URLs without .html extensions!" 