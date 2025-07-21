# Product Requirements Document (PRD): Asset Update Workflow for Webflow-to-Vercel Migration

## Purpose

Enable seamless migration of a Webflow-hosted website to a static site suitable for Vercel deployment, ensuring all assets are local, URLs are clean, and routing is compatible with Vercel's platform.

## Functional Requirements

1. **Website Crawling**
   - Mirror the entire Webflow site, including all pages, images, CSS, JS, and other assets.
   - Download `sitemap.xml` and `robots.txt` if available.

2. **Asset Localization**
   - Identify all CDN-hosted assets and download them locally.
   - Update HTML references to use local asset paths.

3. **URL Transformation**
   - Convert all `.html` links to clean URLs (e.g., `/about.html` → `/about/`).
   - Ensure internal navigation works without `.html` extensions.

4. **Vercel Routing**
   - Generate a `vercel.json` file with appropriate rewrite rules for clean URLs.
   - Ensure all routes are covered, including edge cases (e.g., index pages, nested directories).

5. **Sitemap Generation**
   - Create or update `sitemap.xml` to reflect the new site structure.

6. **Verification**
   - Count and report the number of HTML files and remaining `.html` links.
   - Warn if any `.html` links remain (should be minimal and intentional).

7. **User Guidance**
   - Provide clear next steps for review, local testing, and deployment.

## Non-Functional Requirements

- **Reliability:** The script must fail fast on errors but should provide actionable error messages.
- **Portability:** Should work on any Linux environment with required dependencies.
- **Maintainability:** The workflow should be easy to update as Webflow or Vercel requirements change.
- **Transparency:** All actions and warnings should be clearly reported to the user.

## Out-of-Scope

- Automated deployment to Vercel (handled by git push).
- Incremental or partial updates.
- Asset deduplication or optimization.
- Handling of dynamic content or server-side logic.

## Risks & Open Issues

- **Missing Python Scripts:** The workflow depends on `cdn_to_local.py`, `generate_sitemap.py`, and `clean_urls.py`, but does not verify their presence or correctness.
- **Unimplemented Features:** The `--dry-run` option is listed but not implemented in the current script.
- **Robots.txt Handling:** The script does not currently update or verify `robots.txt` (left commented out due to Webflow issues).
- **No Asset Integrity Checks:** There is no check that all assets referenced in HTML are present after the process (to be implemented).
- **No Rollback:** If the script fails midway, the working directory may be left in an inconsistent state.
- **No Logging:** Lack of persistent logs may hinder debugging. 