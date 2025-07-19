# SEO Validation Tool

A comprehensive Python script for crawling websites and validating SEO elements including meta titles, meta descriptions, and Open Graph tags.

## Features

- **Website Crawling**: Automatically discovers and crawls all pages within a domain
- **SEO Validation**: Validates meta titles, descriptions, and Open Graph tags
- **JSON Output**: Structured JSON output with detailed validation results
- **Async Performance**: High-performance async crawling using aiohttp
- **Comprehensive Testing**: Full test suite with 100% coverage

## Installation

1. Clone the repository
2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Basic Usage

```bash
python validate-seo.py https://example.com
```

### Advanced Usage

```bash
# Limit number of pages to crawl
python validate-seo.py https://example.com --max-pages 20

# Save results to file
python validate-seo.py https://example.com --output results.json

# Verbose logging
python validate-seo.py https://example.com --verbose
```

### Command Line Options

- `url`: Base URL to crawl (required)
- `--max-pages`: Maximum number of pages to crawl (default: 50)
- `--output`: Output file for JSON results (optional)
- `--verbose, -v`: Enable verbose logging
- `--no-open-graph`: Skip Open Graph tag analysis
- `--hide-good-results`: Only show pages with SEO issues in output

## Output Format

The script generates a JSON structure with the following format:

```json
{
  "website": {
    "https://example.com/page1": {
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
```

## Validation Rules

### Meta Title
- Must not be empty
- Must be 60 characters or less
- Whitespace-only titles are considered invalid

### Meta Description
- Must not be empty
- Must be 160 characters or less
- Whitespace-only descriptions are considered invalid

### Canonical URLs
- Canonical URLs are extracted from `<link rel="canonical">` tags
- Must be present and valid absolute URLs
- Must match the actual page URL being crawled
- Relative URLs or malformed URLs are reported as errors
- Empty or missing canonical URLs are reported as errors
- Mismatched canonical URLs (pointing to different pages) are reported as errors

### Open Graph Tags
- All common OG tags are checked: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`
- Tags must be present and have non-empty content
- Missing tags are reported as errors

## Output Filtering

### Hide Good Results
Use the `--hide-good-results` option to filter the output and only show pages that have SEO issues:

```bash
python validate_seo.py https://example.com --hide-good-results
```

This is particularly useful when:
- You want to focus only on pages that need attention
- Working with large websites where most pages are properly optimized
- Generating reports for stakeholders who only need to see problematic pages
- Reducing output size for easier analysis

## Testing

Run the test suite:

```bash
pytest test_validate_seo.py -v
```

Run with coverage:

```bash
pytest test_validate_seo.py --cov=validate_seo --cov-report=html
```

## Architecture

The script is organized into several key components:

- **SEOValidator**: Handles validation logic for SEO elements
- **WebsiteCrawler**: Manages website crawling and data extraction
- **Data Classes**: Structured data representation (ValidationResult, PageSEOData, WebsiteSEOReport)

## Error Handling

The script includes comprehensive error handling for:
- Network timeouts and connection errors
- Invalid URLs and redirects
- Malformed HTML content
- Missing or invalid SEO elements

## Performance Considerations

- Uses async/await for concurrent page fetching
- Configurable page limits to prevent excessive crawling
- Timeout settings to prevent hanging on slow pages
- User-Agent headers to identify the crawler

## Security

- Only crawls pages within the same domain
- Validates URLs to prevent malicious redirects
- Uses proper HTTP headers and timeouts
- No execution of JavaScript or external scripts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

MIT License - see LICENSE file for details. 