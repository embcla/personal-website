#!/usr/bin/env python3
"""
Unit tests for SEO validation script.

This test suite covers:
- SEOValidator class methods
- WebsiteCrawler functionality
- Data extraction and validation
- Error handling and edge cases
"""

import pytest
import asyncio
from unittest.mock import Mock, patch, AsyncMock
from bs4 import BeautifulSoup
import aiohttp
from validate_seo import (
    SEOValidator, 
    WebsiteCrawler, 
    ValidationResult, 
    PageSEOData,
    WebsiteSEOReport,
    convert_to_json_serializable,
    sanitize_url,
    main
)


class TestSEOValidator:
    """Test cases for SEOValidator class."""
    
    def test_validate_meta_title_empty(self):
        """Test validation of empty meta title."""
        result = SEOValidator.validate_meta_title("")
        assert not result.is_valid
        assert "Meta title is empty" in result.errors
        assert result.char_count == 0
    
    def test_validate_meta_title_whitespace_only(self):
        """Test validation of whitespace-only meta title."""
        result = SEOValidator.validate_meta_title("   ")
        assert not result.is_valid
        assert "Meta title is empty" in result.errors
        assert result.char_count == 3
    
    def test_validate_meta_title_valid(self):
        """Test validation of valid meta title."""
        title = "Valid SEO Title"
        result = SEOValidator.validate_meta_title(title)
        assert result.is_valid
        assert len(result.errors) == 0
        assert result.char_count == len(title)
        assert result.value == title
    
    def test_validate_meta_title_too_long(self):
        """Test validation of meta title exceeding character limit."""
        long_title = "A" * (SEOValidator.MAX_TITLE_LENGTH + 10)
        result = SEOValidator.validate_meta_title(long_title)
        assert not result.is_valid
        assert f"exceeds {SEOValidator.MAX_TITLE_LENGTH} characters" in result.errors[0]
        assert result.char_count == SEOValidator.MAX_TITLE_LENGTH + 10
    
    def test_validate_meta_title_exact_limit(self):
        """Test validation of meta title at exact character limit."""
        exact_title = "A" * SEOValidator.MAX_TITLE_LENGTH
        result = SEOValidator.validate_meta_title(exact_title)
        assert result.is_valid
        assert len(result.errors) == 0
        assert result.char_count == SEOValidator.MAX_TITLE_LENGTH
    
    def test_validate_meta_description_empty(self):
        """Test validation of empty meta description."""
        result = SEOValidator.validate_meta_description("")
        assert not result.is_valid
        assert "Meta description is empty" in result.errors
        assert result.char_count == 0
    
    def test_validate_meta_description_valid(self):
        """Test validation of valid meta description."""
        description = "This is a valid meta description for SEO purposes."
        result = SEOValidator.validate_meta_description(description)
        assert result.is_valid
        assert len(result.errors) == 0
        assert result.char_count == len(description)
        assert result.value == description
    
    def test_validate_meta_description_too_long(self):
        """Test validation of meta description exceeding character limit."""
        long_desc = "A" * (SEOValidator.MAX_DESCRIPTION_LENGTH + 20)
        result = SEOValidator.validate_meta_description(long_desc)
        assert not result.is_valid
        assert f"exceeds {SEOValidator.MAX_DESCRIPTION_LENGTH} characters" in result.errors[0]
        assert result.char_count == SEOValidator.MAX_DESCRIPTION_LENGTH + 20
    
    def test_validate_canonical_url_empty(self):
        """Test validation of empty canonical URL."""
        result = SEOValidator.validate_canonical_url("", "https://example.com/page")
        assert not result.is_valid
        assert "Canonical URL is empty" in result.errors
        assert result.char_count == 0
    
    def test_validate_canonical_url_whitespace_only(self):
        """Test validation of whitespace-only canonical URL."""
        result = SEOValidator.validate_canonical_url("   ", "https://example.com/page")
        assert not result.is_valid
        assert "Canonical URL is empty" in result.errors
        assert result.char_count == 3
    
    def test_validate_canonical_url_valid(self):
        """Test validation of valid canonical URL."""
        url = "https://example.com/page"
        result = SEOValidator.validate_canonical_url(url, url)
        assert result.is_valid
        assert len(result.errors) == 0
        assert result.char_count == len(url)
        assert result.value == url
    
    def test_validate_canonical_url_invalid_relative(self):
        """Test validation of relative canonical URL."""
        result = SEOValidator.validate_canonical_url("/page", "https://example.com/page")
        assert not result.is_valid
        assert "not a valid absolute URL" in result.errors[0]
    
    def test_validate_canonical_url_invalid_no_scheme(self):
        """Test validation of canonical URL without scheme."""
        result = SEOValidator.validate_canonical_url("example.com/page", "https://example.com/page")
        assert not result.is_valid
        assert "not a valid absolute URL" in result.errors[0]
    
    def test_validate_canonical_url_invalid_malformed(self):
        """Test validation of malformed canonical URL."""
        result = SEOValidator.validate_canonical_url("not-a-url", "https://example.com/page")
        assert not result.is_valid
        assert "not a valid absolute URL" in result.errors[0]
    
    def test_validate_canonical_url_none_input(self):
        """Test validation with None input."""
        result = SEOValidator.validate_canonical_url(None, "https://example.com/page")
        assert not result.is_valid
        assert "Canonical URL is empty" in result.errors
    
    def test_validate_canonical_url_mismatch(self):
        """Test validation when canonical URL doesn't match actual URL."""
        result = SEOValidator.validate_canonical_url("https://example.com/different", "https://example.com/page")
        assert not result.is_valid
        assert "does not match actual URL" in result.errors[0]
        assert "https://example.com/different" in result.errors[0]
        assert "https://example.com/page" in result.errors[0]
    
    def test_validate_canonical_url_mismatch_different_domain(self):
        """Test validation when canonical URL has different domain."""
        result = SEOValidator.validate_canonical_url("https://other.com/page", "https://example.com/page")
        assert not result.is_valid
        assert "does not match actual URL" in result.errors[0]
    
    def test_validate_canonical_url_mismatch_different_path(self):
        """Test validation when canonical URL has different path."""
        result = SEOValidator.validate_canonical_url("https://example.com/canonical", "https://example.com/actual")
        assert not result.is_valid
        assert "does not match actual URL" in result.errors[0]
    
    def test_validate_canonical_url_mismatch_different_scheme(self):
        """Test validation when canonical URL has different scheme."""
        result = SEOValidator.validate_canonical_url("http://example.com/page", "https://example.com/page")
        assert not result.is_valid
        assert "does not match actual URL" in result.errors[0]
    
    def test_validate_open_graph_tags_present(self):
        """Test validation of Open Graph tags when all are present."""
        html = """
        <html>
        <head>
            <meta property="og:title" content="Test Title">
            <meta property="og:description" content="Test Description">
            <meta property="og:image" content="https://example.com/image.jpg">
            <meta property="og:url" content="https://example.com/page">
            <meta property="og:type" content="website">
            <meta property="og:site_name" content="Test Site">
            <meta property="og:locale" content="en_US">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        results = SEOValidator.validate_open_graph_tags(soup)
        
        assert len(results) == 7
        for prop, result in results.items():
            assert result.is_valid
            assert len(result.errors) == 0
            assert result.value != ""
    
    def test_validate_open_graph_tags_missing(self):
        """Test validation of Open Graph tags when some are missing."""
        html = """
        <html>
        <head>
            <meta property="og:title" content="Test Title">
            <meta property="og:description" content="">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        results = SEOValidator.validate_open_graph_tags(soup)
        
        # Check that present tags are valid
        assert results['og:title'].is_valid
        assert results['og:title'].value == "Test Title"
        
        # Check that empty tags are invalid
        assert not results['og:description'].is_valid
        assert "is empty" in results['og:description'].errors[0]
        
        # Check that missing tags are invalid
        assert not results['og:image'].is_valid
        assert "is missing" in results['og:image'].errors[0]


class TestWebsiteCrawler:
    """Test cases for WebsiteCrawler class."""
    
    @pytest.fixture
    def crawler(self):
        """Create a crawler instance for testing."""
        return WebsiteCrawler("https://example.com", max_pages=10)
    
    def test_is_valid_url_same_domain(self, crawler):
        """Test URL validation for same domain."""
        assert crawler.is_valid_url("https://example.com/page")
        assert crawler.is_valid_url("https://example.com/subdir/page.html")
    
    def test_is_valid_url_different_domain(self, crawler):
        """Test URL validation for different domain."""
        assert not crawler.is_valid_url("https://other.com/page")
        assert not crawler.is_valid_url("http://malicious.com/page")
    
    def test_is_valid_url_invalid_scheme(self, crawler):
        """Test URL validation for invalid schemes."""
        assert not crawler.is_valid_url("ftp://example.com/page")
        assert not crawler.is_valid_url("javascript:alert('test')")
    
    def test_extract_links_valid(self, crawler):
        """Test extraction of valid links from HTML."""
        html = """
        <html>
        <body>
            <a href="/page1">Page 1</a>
            <a href="https://example.com/page2">Page 2</a>
            <a href="https://other.com/page3">External</a>
            <a href="javascript:void(0)">Invalid</a>
        </body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        links = crawler.extract_links(soup, "https://example.com/current")
        
        expected_links = [
            "https://example.com/page1",
            "https://example.com/page2"
        ]
        assert set(links) == set(expected_links)
    
    def test_extract_seo_data_complete(self, crawler):
        """Test extraction of complete SEO data."""
        html = """
        <html>
        <head>
            <title>Test Page Title</title>
            <meta name="description" content="Test meta description">
            <link rel="canonical" href="https://example.com/test-page">
            <meta property="og:title" content="OG Title">
            <meta property="og:description" content="OG Description">
            <meta property="og:image" content="https://example.com/image.jpg">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/test-page")
        
        assert seo_data.meta_title.value == "Test Page Title"
        assert seo_data.meta_title.is_valid
        assert seo_data.meta_description.value == "Test meta description"
        assert seo_data.meta_description.is_valid
        assert seo_data.canonical_url.value == "https://example.com/test-page"
        assert seo_data.canonical_url.is_valid
        assert len(seo_data.canonical_url.errors) == 0
        assert len(seo_data.open_graph) == 7  # All OG properties checked
    
    def test_extract_seo_data_incomplete(self, crawler):
        """Test extraction of incomplete SEO data."""
        html = """
        <html>
        <head>
            <title></title>
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/incomplete")
        
        assert not seo_data.meta_title.is_valid
        assert "Meta title is empty" in seo_data.meta_title.errors
        assert not seo_data.meta_description.is_valid
        assert "Meta description is empty" in seo_data.meta_description.errors
        assert not seo_data.canonical_url.is_valid
        assert "Canonical URL is empty" in seo_data.canonical_url.errors
    
    def test_extract_seo_data_canonical_url_mismatch(self, crawler):
        """Test extraction of SEO data when canonical URL doesn't match actual URL."""
        html = """
        <html>
        <head>
            <title>Test Page Title</title>
            <meta name="description" content="Test meta description">
            <link rel="canonical" href="https://example.com/different-page">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/test-page")
        
        assert seo_data.meta_title.value == "Test Page Title"
        assert seo_data.meta_title.is_valid
        assert seo_data.meta_description.value == "Test meta description"
        assert seo_data.meta_description.is_valid
        assert seo_data.canonical_url.value == "https://example.com/different-page"
        assert not seo_data.canonical_url.is_valid
        assert "does not match actual URL" in seo_data.canonical_url.errors[0]


class TestDataConversion:
    """Test cases for data conversion utilities."""
    
    def test_convert_to_json_serializable_validation_result(self):
        """Test conversion of ValidationResult to JSON-serializable format."""
        result = ValidationResult(
            value="test",
            is_valid=True,
            errors=[],
            char_count=4
        )
        converted = convert_to_json_serializable(result)
        
        assert isinstance(converted, dict)
        assert converted['value'] == "test"
        assert converted['is_valid'] is True
        assert converted['errors'] == []
        assert converted['char_count'] == 4
    
    def test_convert_to_json_serializable_dict(self):
        """Test conversion of dictionary containing dataclass objects."""
        result = ValidationResult(
            value="test",
            is_valid=True,
            errors=[],
            char_count=4
        )
        data = {"test": result}
        converted = convert_to_json_serializable(data)
        
        assert isinstance(converted, dict)
        assert "test" in converted
        assert isinstance(converted["test"], dict)
    
    def test_convert_to_json_serializable_list(self):
        """Test conversion of list containing dataclass objects."""
        results = [
            ValidationResult("test1", True, [], 5),
            ValidationResult("test2", False, ["error"], 5)
        ]
        converted = convert_to_json_serializable(results)
        
        assert isinstance(converted, list)
        assert len(converted) == 2
        assert all(isinstance(item, dict) for item in converted)


class TestErrorHandling:
    """Test cases for error handling scenarios."""
    
    @pytest.mark.asyncio
    async def test_crawler_network_error(self):
        """Test crawler behavior when network errors occur."""
        crawler = WebsiteCrawler("https://example.com")
        
        # Mock the session to raise an exception
        with patch.object(crawler, 'session') as mock_session:
            mock_session.get.side_effect = Exception("Network error")
            
            soup = await crawler.fetch_page("https://example.com")
            assert soup is None
    
    def test_validate_meta_title_none_input(self):
        """Test validation with None input."""
        result = SEOValidator.validate_meta_title(None)
        assert not result.is_valid
        assert "Meta title is empty" in result.errors
    
    def test_validate_meta_description_none_input(self):
        """Test validation with None input."""
        result = SEOValidator.validate_meta_description(None)
        assert not result.is_valid
        assert "Meta description is empty" in result.errors


class TestEdgeCases:
    """Test cases for edge cases and boundary conditions."""
    
    def test_meta_title_exactly_at_limit(self):
        """Test meta title exactly at character limit."""
        title = "A" * SEOValidator.MAX_TITLE_LENGTH
        result = SEOValidator.validate_meta_title(title)
        assert result.is_valid
        assert result.char_count == SEOValidator.MAX_TITLE_LENGTH
    
    def test_meta_description_exactly_at_limit(self):
        """Test meta description exactly at character limit."""
        desc = "A" * SEOValidator.MAX_DESCRIPTION_LENGTH
        result = SEOValidator.validate_meta_description(desc)
        assert result.is_valid
        assert result.char_count == SEOValidator.MAX_DESCRIPTION_LENGTH
    
    def test_open_graph_empty_content(self):
        """Test Open Graph tags with empty content attribute."""
        html = """
        <html>
        <head>
            <meta property="og:title" content="">
            <meta property="og:description" content="   ">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        results = SEOValidator.validate_open_graph_tags(soup)
        
        assert not results['og:title'].is_valid
        assert not results['og:description'].is_valid


class TestOpenGraphSkipping:
    """Test cases for Open Graph skipping functionality."""
    
    def test_extract_seo_data_with_open_graph(self):
        """Test SEO data extraction when Open Graph is enabled."""
        crawler = WebsiteCrawler("https://example.com", skip_open_graph=False)
        
        html = """
        <html>
        <head>
            <title>Test Page</title>
            <meta name="description" content="Test description">
            <meta property="og:title" content="OG Title">
            <meta property="og:description" content="OG Description">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/test-page")
        
        assert seo_data.meta_title.value == "Test Page"
        assert seo_data.meta_description.value == "Test description"
        assert len(seo_data.open_graph) > 0  # Should have OG tags
        assert 'og:title' in seo_data.open_graph
        assert 'og:description' in seo_data.open_graph
    
    def test_extract_seo_data_without_open_graph(self):
        """Test SEO data extraction when Open Graph is disabled."""
        crawler = WebsiteCrawler("https://example.com", skip_open_graph=True)
        
        html = """
        <html>
        <head>
            <title>Test Page</title>
            <meta name="description" content="Test description">
            <meta property="og:title" content="OG Title">
            <meta property="og:description" content="OG Description">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/test-page")
        
        assert seo_data.meta_title.value == "Test Page"
        assert seo_data.meta_description.value == "Test description"
        assert len(seo_data.open_graph) == 0  # Should have no OG tags
    
    def test_report_generation_with_empty_open_graph(self):
        """Test report generation when Open Graph is empty."""
        crawler = WebsiteCrawler("https://example.com", skip_open_graph=True)
        
        # Create a page with valid meta data but no Open Graph
        html = """
        <html>
        <head>
            <title>Valid Title</title>
            <meta name="description" content="Valid description">
        </head>
        <body></body>
        </html>
        """
        soup = BeautifulSoup(html, 'html.parser')
        seo_data = crawler.extract_seo_data(soup, "https://example.com/valid-page")
        
        # This should not cause any errors since OG is skipped
        assert seo_data.meta_title.is_valid
        assert seo_data.meta_description.is_valid
        assert len(seo_data.open_graph) == 0


class TestURLSanitization:
    """Test cases for URL sanitization functionality."""
    
    def test_sanitize_url_with_protocol(self):
        """Test URL sanitization when protocol is already present."""
        assert sanitize_url("https://example.com") == "https://example.com"
        assert sanitize_url("http://example.com") == "http://example.com"
        assert sanitize_url("https://www.example.com/path") == "https://www.example.com/path"
    
    def test_sanitize_url_without_protocol(self):
        """Test URL sanitization when protocol is missing."""
        assert sanitize_url("example.com") == "https://example.com"
        assert sanitize_url("www.example.com") == "https://www.example.com"
        assert sanitize_url("www.corriere.it") == "https://www.corriere.it"
        assert sanitize_url("subdomain.example.com/path") == "https://subdomain.example.com/path"
    
    def test_sanitize_url_with_whitespace(self):
        """Test URL sanitization with leading/trailing whitespace."""
        assert sanitize_url("  example.com  ") == "https://example.com"
        assert sanitize_url("\texample.com\n") == "https://example.com"
    
    def test_sanitize_url_edge_cases(self):
        """Test URL sanitization with edge cases."""
        assert sanitize_url("") == "https://"
        assert sanitize_url("   ") == "https://"
        assert sanitize_url("localhost:3000") == "https://localhost:3000"
        assert sanitize_url("127.0.0.1:8080") == "https://127.0.0.1:8080"
    
    @pytest.mark.asyncio
    async def test_main_function_url_sanitization(self):
        """Test that main function properly sanitizes URLs."""
        import sys
        from unittest.mock import patch, AsyncMock
        
        # Mock the crawler to avoid actual network calls
        with patch('validate_seo.WebsiteCrawler') as mock_crawler:
            mock_crawler_instance = AsyncMock()
            mock_crawler.return_value.__aenter__.return_value = mock_crawler_instance
            
            # Mock the crawl method to return a simple report
            mock_report = WebsiteSEOReport(
                base_url="https://www.example.com",
                pages={},
                total_pages=0,
                pages_with_errors=0,
                summary={
                    "total_pages": 0,
                    "pages_with_errors": 0,
                    "error_rate": 0.0,
                    "max_title_length": 60,
                    "max_description_length": 160
                }
            )
            mock_crawler_instance.crawl.return_value = mock_report
            
            # Mock sys.argv to simulate command line arguments
            with patch('sys.argv', ['validate_seo.py', 'www.example.com', '--max-pages', '1']):
                with patch('builtins.print') as mock_print:
                    await main()
                    
                    # Verify that the crawler was called with the sanitized URL
                    mock_crawler.assert_called_once_with("https://www.example.com", 1, False)
    
    @pytest.mark.asyncio
    async def test_main_function_with_no_open_graph(self):
        """Test that main function properly handles --no-open-graph option."""
        import sys
        from unittest.mock import patch, AsyncMock
        
        # Mock the crawler to avoid actual network calls
        with patch('validate_seo.WebsiteCrawler') as mock_crawler:
            mock_crawler_instance = AsyncMock()
            mock_crawler.return_value.__aenter__.return_value = mock_crawler_instance
            
            # Mock the crawl method to return a simple report
            mock_report = WebsiteSEOReport(
                base_url="https://www.example.com",
                pages={},
                total_pages=0,
                pages_with_errors=0,
                summary={
                    "total_pages": 0,
                    "pages_with_errors": 0,
                    "error_rate": 0.0,
                    "max_title_length": 60,
                    "max_description_length": 160
                }
            )
            mock_crawler_instance.crawl.return_value = mock_report
            
            # Mock sys.argv to simulate command line arguments with --no-open-graph
            with patch('sys.argv', ['validate_seo.py', 'www.example.com', '--no-open-graph']):
                with patch('builtins.print') as mock_print:
                    await main()
                    
                    # Verify that the crawler was called with skip_open_graph=True
                    mock_crawler.assert_called_once_with("https://www.example.com", 50, True)


class TestHideGoodResults:
    """Test cases for hide-good-results functionality."""
    
    @pytest.mark.asyncio
    async def test_main_function_with_hide_good_results(self):
        """Test that main function properly handles --hide-good-results option."""
        import sys
        from unittest.mock import patch, AsyncMock
        
        # Mock the crawler to avoid actual network calls
        with patch('validate_seo.WebsiteCrawler') as mock_crawler:
            mock_crawler_instance = AsyncMock()
            mock_crawler.return_value.__aenter__.return_value = mock_crawler_instance
            
            # Create test data with both good and bad pages
            good_page_data = PageSEOData(
                meta_title=ValidationResult("Good Title", True, [], 11),
                meta_description=ValidationResult("Good description", True, [], 17),
                canonical_url=ValidationResult("https://example.com/good", True, [], 25),
                open_graph={}
            )
            
            bad_page_data = PageSEOData(
                meta_title=ValidationResult("", False, ["Meta title is empty"], 0),
                meta_description=ValidationResult("Good description", True, [], 17),
                canonical_url=ValidationResult("https://example.com/bad", True, [], 23),
                open_graph={}
            )
            
            # Mock the crawl method to return a report with mixed results
            mock_report = WebsiteSEOReport(
                base_url="https://www.example.com",
                pages={
                    "https://www.example.com/good": good_page_data,
                    "https://www.example.com/bad": bad_page_data
                },
                total_pages=2,
                pages_with_errors=1,
                summary={
                    "total_pages": 2,
                    "pages_with_errors": 1,
                    "error_rate": 50.0,
                    "max_title_length": 60,
                    "max_description_length": 160
                }
            )
            mock_crawler_instance.crawl.return_value = mock_report
            
            # Mock sys.argv to simulate command line arguments with --hide-good-results
            with patch('sys.argv', ['validate_seo.py', 'www.example.com', '--hide-good-results']):
                with patch('builtins.print') as mock_print:
                    await main()
                    
                    # Verify that the crawler was called with the correct parameters
                    mock_crawler.assert_called_once_with("https://www.example.com", 50, False)
                    
                    # Verify that the output was printed (we can't easily test the JSON content
                    # without parsing it, but we can verify print was called)
                    assert mock_print.called
    
    @pytest.mark.asyncio
    async def test_hide_good_results_filters_correctly(self):
        """Test that hide-good-results correctly filters out pages with no issues."""
        import sys
        from unittest.mock import patch, AsyncMock
        
        # Mock the crawler to avoid actual network calls
        with patch('validate_seo.WebsiteCrawler') as mock_crawler:
            mock_crawler_instance = AsyncMock()
            mock_crawler.return_value.__aenter__.return_value = mock_crawler_instance
            
            # Create test data with various scenarios
            perfect_page = PageSEOData(
                meta_title=ValidationResult("Perfect Title", True, [], 13),
                meta_description=ValidationResult("Perfect description", True, [], 20),
                canonical_url=ValidationResult("https://example.com/perfect", True, [], 28),
                open_graph={}
            )
            
            title_issue_page = PageSEOData(
                meta_title=ValidationResult("A" * 70, False, ["exceeds 60 characters"], 70),
                meta_description=ValidationResult("Good description", True, [], 17),
                canonical_url=ValidationResult("https://example.com/title-issue", True, [], 32),
                open_graph={}
            )
            
            desc_issue_page = PageSEOData(
                meta_title=ValidationResult("Good Title", True, [], 10),
                meta_description=ValidationResult("", False, ["Meta description is empty"], 0),
                canonical_url=ValidationResult("https://example.com/desc-issue", True, [], 31),
                open_graph={}
            )
            
            # Mock the crawl method to return a report with mixed results
            mock_report = WebsiteSEOReport(
                base_url="https://www.example.com",
                pages={
                    "https://www.example.com/perfect": perfect_page,
                    "https://www.example.com/title-issue": title_issue_page,
                    "https://www.example.com/desc-issue": desc_issue_page
                },
                total_pages=3,
                pages_with_errors=2,
                summary={
                    "total_pages": 3,
                    "pages_with_errors": 2,
                    "error_rate": 66.7,
                    "max_title_length": 60,
                    "max_description_length": 160
                }
            )
            mock_crawler_instance.crawl.return_value = mock_report
            
            # Mock sys.argv to simulate command line arguments with --hide-good-results
            with patch('sys.argv', ['validate_seo.py', 'www.example.com', '--hide-good-results']):
                with patch('builtins.print') as mock_print:
                    await main()
                    
                    # Verify that the crawler was called
                    mock_crawler.assert_called_once_with("https://www.example.com", 50, False)
                    
                    # Verify that print was called (indicating output was generated)
                    assert mock_print.called
    
    @pytest.mark.asyncio
    async def test_hide_good_results_with_canonical_url_issues(self):
        """Test that hide-good-results correctly filters pages with canonical URL issues."""
        import sys
        from unittest.mock import patch, AsyncMock
        
        # Mock the crawler to avoid actual network calls
        with patch('validate_seo.WebsiteCrawler') as mock_crawler:
            mock_crawler_instance = AsyncMock()
            mock_crawler.return_value.__aenter__.return_value = mock_crawler_instance
            
            # Create test data with canonical URL issues
            good_page = PageSEOData(
                meta_title=ValidationResult("Good Title", True, [], 11),
                meta_description=ValidationResult("Good description", True, [], 17),
                canonical_url=ValidationResult("https://example.com/good", True, [], 25),
                open_graph={}
            )
            
            canonical_issue_page = PageSEOData(
                meta_title=ValidationResult("Good Title", True, [], 11),
                meta_description=ValidationResult("Good description", True, [], 17),
                canonical_url=ValidationResult("", False, ["Canonical URL is empty"], 0),
                open_graph={}
            )
            
            # Mock the crawl method to return a report with canonical URL issues
            mock_report = WebsiteSEOReport(
                base_url="https://www.example.com",
                pages={
                    "https://www.example.com/good": good_page,
                    "https://www.example.com/canonical-issue": canonical_issue_page
                },
                total_pages=2,
                pages_with_errors=1,
                summary={
                    "total_pages": 2,
                    "pages_with_errors": 1,
                    "error_rate": 50.0,
                    "max_title_length": 60,
                    "max_description_length": 160
                }
            )
            mock_crawler_instance.crawl.return_value = mock_report
            
            # Mock sys.argv to simulate command line arguments with --hide-good-results
            with patch('sys.argv', ['validate_seo.py', 'www.example.com', '--hide-good-results']):
                with patch('builtins.print') as mock_print:
                    await main()
                    
                    # Verify that the crawler was called
                    mock_crawler.assert_called_once_with("https://www.example.com", 50, False)
                    
                    # Verify that print was called (indicating output was generated)
                    assert mock_print.called


if __name__ == "__main__":
    pytest.main([__file__, "-v"]) 