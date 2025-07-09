#!/bin/bash

# Download the website
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent $1

# Explicitly download sitemap.xml and robots.txt if they exist
wget -O sitemap.xml "$1/sitemap.xml" 2>/dev/null || echo "Sitemap not found or already downloaded"
# wget -O robots.txt.tmp "$1/robots.txt" 2>/dev/null || echo "Robots.txt not found or already downloaded"
# 
# # If robots.txt was downloaded, add sitemap reference if missing
# if [ -f robots.txt.tmp ]; then
#     if ! grep -q "Sitemap:" robots.txt.tmp; then
#         echo "Sitemap: https://www.claudio-carbone.tech/sitemap.xml" >> robots.txt.tmp
#     fi
#     mv robots.txt.tmp robots.txt
# fi

# Copy files to current directory
cp -r $1/* .
rm -r $1
