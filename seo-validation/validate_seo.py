#!/usr/bin/env python3
"""
SEO Validation Script

This script crawls a website and validates SEO elements including:
- Meta titles (max 60 characters)
- Meta descriptions (max 160 characters) 
- Open Graph tags (must be non-empty)

The script outputs results in JSON format with the structure:
{
  "website": {
    "page_url": {
      "meta_title": {...},
      "meta_description": {...},
      "open_graph": {...}
    }
  }
}
"""

import asyncio
import json
import logging
from dataclasses import dataclass, asdict
from typing import Dict, List, Optional, Any
from urllib.parse import urljoin, urlparse
import aiohttp
from bs4 import BeautifulSoup
import argparse
import sys
import re


def sanitize_url(url: str) -> str:
    """
    Sanitize URL by adding protocol if missing.
    
    Args:
        url: The URL to sanitize
        
    Returns:
        URL with https:// protocol if missing
    """
    # Remove any leading/trailing whitespace
    url = url.strip()
    
    # If URL doesn't start with http:// or https://, add https://
    if not re.match(r'^https?://', url):
        url = f'https://{url}'
    
    return url


@dataclass
class ValidationResult:
    """Represents the validation result for a single SEO element."""
    value: str
    is_valid: bool
    errors: List[str]
    char_count: int


@dataclass
class PageSEOData:
    """Represents SEO data for a single page."""
    meta_title: ValidationResult
    meta_description: ValidationResult
    canonical_url: ValidationResult
    open_graph: Dict[str, ValidationResult]


@dataclass
class WebsiteSEOReport:
    """Represents the complete SEO report for a website."""
    base_url: str
    pages: Dict[str, PageSEOData]
    total_pages: int
    pages_with_errors: int
    summary: Dict[str, Any]


class SEOValidator:
    """Validates SEO elements according to best practices."""
    
    MAX_TITLE_LENGTH = 60
    MAX_DESCRIPTION_LENGTH = 160
    
    @staticmethod
    def validate_meta_title(title: str) -> ValidationResult:
        """Validate meta title according to SEO best practices."""
        errors = []
        
        # Handle None input
        if title is None:
            title = ""
        
        char_count = len(title)
        
        if not title or not title.strip():
            errors.append("Meta title is empty")
            is_valid = False
        elif char_count > SEOValidator.MAX_TITLE_LENGTH:
            errors.append(f"Meta title exceeds {SEOValidator.MAX_TITLE_LENGTH} characters ({char_count})")
            is_valid = False
        else:
            is_valid = True
            
        return ValidationResult(
            value=title,
            is_valid=is_valid,
            errors=errors,
            char_count=char_count
        )
    
    @staticmethod
    def validate_meta_description(description: str) -> ValidationResult:
        """Validate meta description according to SEO best practices."""
        errors = []
        
        # Handle None input
        if description is None:
            description = ""
        
        char_count = len(description)
        
        if not description or not description.strip():
            errors.append("Meta description is empty")
            is_valid = False
        elif char_count > SEOValidator.MAX_DESCRIPTION_LENGTH:
            errors.append(f"Meta description exceeds {SEOValidator.MAX_DESCRIPTION_LENGTH} characters ({char_count})")
            is_valid = False
        else:
            is_valid = True
            
        return ValidationResult(
            value=description,
            is_valid=is_valid,
            errors=errors,
            char_count=char_count
        )
    
    @staticmethod
    def validate_canonical_url(canonical_url: str, actual_url: str) -> ValidationResult:
        """Validate canonical URL according to SEO best practices."""
        errors = []
        
        # Handle None input
        if canonical_url is None:
            canonical_url = ""
        
        char_count = len(canonical_url)
        
        if not canonical_url or not canonical_url.strip():
            errors.append("Canonical URL is empty")
            is_valid = False
        else:
            # Basic URL validation
            try:
                parsed_url = urlparse(canonical_url)
                if not parsed_url.scheme or not parsed_url.netloc:
                    errors.append("Canonical URL is not a valid absolute URL")
                    is_valid = False
                else:
                    # Compare canonical URL with actual URL
                    if canonical_url != actual_url:
                        errors.append(f"Canonical URL ({canonical_url}) does not match actual URL ({actual_url})")
                        is_valid = False
                    else:
                        is_valid = True
            except Exception:
                errors.append("Canonical URL is malformed")
                is_valid = False
            
        return ValidationResult(
            value=canonical_url,
            is_valid=is_valid,
            errors=errors,
            char_count=char_count
        )
    
    @staticmethod
    def validate_open_graph_tags(soup: BeautifulSoup) -> Dict[str, ValidationResult]:
        """Extract and validate Open Graph tags."""
        og_tags = {}
        
        # Common Open Graph tags to check
        og_properties = [
            'og:title', 'og:description', 'og:image', 'og:url',
            'og:type', 'og:site_name', 'og:locale'
        ]
        
        for prop in og_properties:
            tag = soup.find('meta', property=prop)
            if tag:
                content = tag.get('content', '')
                errors = []
                
                if not content or not content.strip():
                    errors.append(f"Open Graph {prop} is empty")
                    is_valid = False
                else:
                    is_valid = True
                    
                og_tags[prop] = ValidationResult(
                    value=content,
                    is_valid=is_valid,
                    errors=errors,
                    char_count=len(content)
                )
            else:
                og_tags[prop] = ValidationResult(
                    value="",
                    is_valid=False,
                    errors=[f"Open Graph {prop} tag is missing"],
                    char_count=0
                )
        
        return og_tags


class WebsiteCrawler:
    """Crawls a website and extracts SEO data from all pages."""
    
    def __init__(self, base_url: str, max_pages: int = 50, skip_open_graph: bool = False):
        self.base_url = base_url
        self.max_pages = max_pages
        self.skip_open_graph = skip_open_graph
        self.visited_urls = set()
        self.session = None
        
    async def __aenter__(self):
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            headers={'User-Agent': 'SEO-Validator/1.0'}
        )
        return self
        
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    def is_valid_url(self, url: str) -> bool:
        """Check if URL is valid and belongs to the same domain."""
        try:
            parsed_base = urlparse(self.base_url)
            parsed_url = urlparse(url)
            return (
                parsed_url.netloc == parsed_base.netloc and
                parsed_url.scheme in ['http', 'https']
            )
        except Exception:
            return False
    
    def extract_links(self, soup: BeautifulSoup, current_url: str) -> List[str]:
        """Extract all valid links from the page."""
        links = []
        for link in soup.find_all('a', href=True):
            href = link['href']
            absolute_url = urljoin(current_url, href)
            
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        return links
    
    async def fetch_page(self, url: str) -> Optional[BeautifulSoup]:
        """Fetch and parse a single page."""
        try:
            async with self.session.get(url, allow_redirects=True) as response:
                if response.status == 200:
                    content = await response.text()
                    return BeautifulSoup(content, 'html.parser')
                else:
                    logging.warning(f"Failed to fetch {url}: HTTP {response.status}")
                    return None
        except Exception as e:
            logging.error(f"Error fetching {url}: {e}")
            return None
    
    def extract_seo_data(self, soup: BeautifulSoup, current_url: str) -> PageSEOData:
        """Extract SEO data from a parsed HTML page."""
        # Extract meta title
        title_tag = soup.find('title')
        meta_title = title_tag.get_text() if title_tag else ""
        title_validation = SEOValidator.validate_meta_title(meta_title)
        
        # Extract meta description
        meta_desc_tag = soup.find('meta', attrs={'name': 'description'})
        meta_description = meta_desc_tag.get('content', '') if meta_desc_tag else ""
        desc_validation = SEOValidator.validate_meta_description(meta_description)
        
        # Extract Canonical URL
        canonical_tag = soup.find('link', rel='canonical')
        canonical_url = canonical_tag.get('href', '') if canonical_tag else ""
        canonical_validation = SEOValidator.validate_canonical_url(canonical_url, current_url)
        
        # Extract Open Graph tags (if not skipped)
        if self.skip_open_graph:
            og_validation = {}
        else:
            og_validation = SEOValidator.validate_open_graph_tags(soup)
        
        return PageSEOData(
            meta_title=title_validation,
            meta_description=desc_validation,
            canonical_url=canonical_validation,
            open_graph=og_validation
        )
    
    async def crawl(self) -> WebsiteSEOReport:
        """Crawl the website and collect SEO data."""
        pages_data = {}
        urls_to_visit = [self.base_url]
        
        while urls_to_visit and len(pages_data) < self.max_pages:
            current_url = urls_to_visit.pop(0)
            
            if current_url in self.visited_urls:
                continue
                
            self.visited_urls.add(current_url)
            logging.info(f"Crawling: {current_url}")
            
            soup = await self.fetch_page(current_url)
            if soup:
                # Extract SEO data
                seo_data = self.extract_seo_data(soup, current_url)
                pages_data[current_url] = seo_data
                
                # Extract new links for crawling
                new_links = self.extract_links(soup, current_url)
                for link in new_links:
                    if link not in self.visited_urls and link not in urls_to_visit:
                        urls_to_visit.append(link)
        
        return self._generate_report(pages_data)
    
    def _generate_report(self, pages_data: Dict[str, PageSEOData]) -> WebsiteSEOReport:
        """Generate a comprehensive SEO report."""
        total_pages = len(pages_data)
        pages_with_errors = 0
        
        for page_data in pages_data.values():
            has_errors = (
                not page_data.meta_title.is_valid or
                not page_data.meta_description.is_valid or
                not page_data.canonical_url.is_valid or
                (page_data.open_graph and any(not og.is_valid for og in page_data.open_graph.values()))
            )
            if has_errors:
                pages_with_errors += 1
        
        summary = {
            "total_pages": total_pages,
            "pages_with_errors": pages_with_errors,
            "error_rate": (pages_with_errors / total_pages * 100) if total_pages > 0 else 0,
            "max_title_length": SEOValidator.MAX_TITLE_LENGTH,
            "max_description_length": SEOValidator.MAX_DESCRIPTION_LENGTH
        }
        
        return WebsiteSEOReport(
            base_url=self.base_url,
            pages=pages_data,
            total_pages=total_pages,
            pages_with_errors=pages_with_errors,
            summary=summary
        )


def convert_to_json_serializable(obj):
    """Convert dataclass objects to JSON-serializable format."""
    if hasattr(obj, '__dict__'):
        return asdict(obj)
    elif isinstance(obj, dict):
        return {k: convert_to_json_serializable(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [convert_to_json_serializable(item) for item in obj]
    else:
        return obj


async def main():
    """Main function to run the SEO validation."""
    parser = argparse.ArgumentParser(
        description='SEO Validation Tool - Crawl websites and validate SEO elements',
        epilog="""
Examples:
  # Basic usage - crawl website and output to console
  python validate_seo.py https://example.com

  # URL without protocol (automatically adds https://)
  python validate_seo.py www.example.com

  # Limit crawling to 20 pages
  python validate_seo.py https://example.com --max-pages 20

  # Save results to JSON file
  python validate_seo.py https://example.com --output seo_report.json

  # Verbose logging for debugging
  python validate_seo.py https://example.com --verbose

  # Complete example with all options
  python validate_seo.py https://example.com --max-pages 30 --output report.json --verbose

  # Skip Open Graph analysis (focus only on meta titles and descriptions)
  python validate_seo.py https://example.com --no-open-graph

  # Only show pages with SEO issues in output
  python validate_seo.py https://example.com --hide-good-results

Output Format:
  The tool generates a JSON structure with validation results for each page:
  {
    "website": {
      "https://example.com/page": {
        "meta_title": {
          "value": "Page Title",
          "is_valid": true,
          "errors": [],
          "char_count": 11
        },
        "meta_description": {
          "value": "Page description",
          "is_valid": true,
          "errors": [],
          "char_count": 17
        },
        "canonical_url": {
          "value": "https://example.com/page",
          "is_valid": true,
          "errors": [],
          "char_count": 25
        },
        "open_graph": {
          "og:title": {
            "value": "OG Title",
            "is_valid": true,
            "errors": [],
            "char_count": 8
          }
        }
      }
    },
    "summary": {
      "total_pages": 10,
      "pages_with_errors": 2,
      "error_rate": 20.0,
      "max_title_length": 60,
      "max_description_length": 160
    }
  }

Validation Rules:
  - Meta titles: Must be ≤ 60 characters, not empty
  - Meta descriptions: Must be ≤ 160 characters, not empty
  - Canonical URLs: Must be present, valid absolute URLs, and match the actual page URL
  - Open Graph tags: Must be present and non-empty
        """
    )
    parser.add_argument('url', help='Base URL to crawl (e.g., https://example.com or www.example.com)')
    parser.add_argument('--max-pages', type=int, default=50, 
                       help='Maximum pages to crawl (default: 50)')
    parser.add_argument('--output', help='Output file for JSON results (optional)')
    parser.add_argument('--verbose', '-v', action='store_true', 
                       help='Enable verbose logging for debugging')
    parser.add_argument('--no-open-graph', action='store_true',
                       help='Skip Open Graph tag analysis')
    parser.add_argument('--hide-good-results', action='store_true',
                       help='Only show pages with SEO issues in output')
    
    args = parser.parse_args()
    
    # Setup logging first
    log_level = logging.INFO if args.verbose else logging.WARNING
    logging.basicConfig(level=log_level, format='%(asctime)s - %(levelname)s - %(message)s')
    
    # Sanitize the URL
    sanitized_url = sanitize_url(args.url)
    if sanitized_url != args.url:
        logging.info(f"URL sanitized: {args.url} -> {sanitized_url}")
    
    try:
        async with WebsiteCrawler(sanitized_url, args.max_pages, args.no_open_graph) as crawler:
            report = await crawler.crawl()
            
            # Convert to JSON-serializable format
            json_data = {
                "website": {
                    url: {
                        "meta_title": convert_to_json_serializable(page_data.meta_title),
                        "meta_description": convert_to_json_serializable(page_data.meta_description),
                        "canonical_url": convert_to_json_serializable(page_data.canonical_url),
                        "open_graph": convert_to_json_serializable(page_data.open_graph)
                    }
                    for url, page_data in report.pages.items()
                }
            }
            
            # Add summary to the JSON
            json_data["summary"] = report.summary
            
            # Filter out pages with no issues if --hide-good-results is used
            if args.hide_good_results:
                filtered_pages = {}
                for url, page_data in json_data["website"].items():
                    has_errors = (
                        not page_data["meta_title"]["is_valid"] or
                        not page_data["meta_description"]["is_valid"] or
                        not page_data["canonical_url"]["is_valid"] or
                        (page_data["open_graph"] and any(not og["is_valid"] for og in page_data["open_graph"].values()))
                    )
                    if has_errors:
                        filtered_pages[url] = page_data
                json_data["website"] = filtered_pages
            
            # Output results
            if args.output:
                with open(args.output, 'w') as f:
                    json.dump(json_data, f, indent=2)
                print(f"Results saved to {args.output}")
            else:
                print(json.dumps(json_data, indent=2))
            
            # Print summary
            print(f"\nSEO Validation Summary:")
            print(f"Total pages crawled: {report.total_pages}")
            print(f"Pages with errors: {report.pages_with_errors}")
            print(f"Error rate: {report.summary['error_rate']:.1f}%")
            
    except Exception as e:
        logging.error(f"Error during crawling: {e}")
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())
