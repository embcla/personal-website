# Website Asset Update Workflow

## Overview

This workflow migrates a Webflow-hosted website to a static site for Vercel deployment. It crawls the Webflow site, downloads all assets, transforms URLs for clean routing, and prepares the site for Vercel hosting.

## Prerequisites

- **Operating System:** Linux (tested on WSL2)
- **Dependencies:**
  - `wget`
  - `python3`
  - Python scripts: `cdn_to_local.py`, `generate_sitemap.py`, `clean_urls.py`
  - Bash shell
- **Network Access:** Required to crawl and download the website and assets.

## Usage

```bash
./update_workflow.sh <website_url> [options]
```

### Options

- `--dry-run`     Show what would be changed without making changes (if implemented)
- `--verbose`     Show detailed output
- `--html-only`   Only transform HTML links, skip `vercel.json` generation
- `--vercel-only` Only generate `vercel.json`, skip HTML transformation

### Example

```bash
./update_workflow.sh https://your-webflow-site.webflow.io --verbose
```

## Local Testing

After running the script, you can test the static site locally before deploying to Vercel. The simplest way is to use a static file server. Here are two common options:

### Using Python 3 (built-in HTTP server)

```bash
# In the root directory of your exported site:
python3 -m http.server 8080
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Using Node.js (if installed)

```bash
npx serve .
```
Then open the provided local URL in your browser.

**Note:** These servers do not replicate Vercel’s clean URL rewrites. To fully test routing, you must deploy to Vercel or use a local Vercel dev environment (`vercel dev`).

## Workflow Steps

1. **Input Validation**
2. **Crawling and Downloading**
3. **Copying Files**
4. **Processing CDN Assets**
5. **Generating Sitemap**
6. **Transforming URLs**
7. **Final Verification**

## Limitations & Warnings

- **No Dependency Checks:** The script does not verify the presence or correctness of the required Python scripts before running them.
- **No Error Recovery:** If any step fails, the script exits immediately (`set -e`), but does not provide recovery or rollback.
- **No Incremental Updates:** The script always removes any existing domain directory, so partial updates or incremental syncs are not supported.
- **Robots.txt Handling:** The robots.txt download and modification is commented out, so it is not currently updated or checked.
- **No Logging:** Only colored console output is provided; no logs are saved for auditing or debugging.
- **No Asset Integrity Checks:** There is no verification that all assets referenced in HTML are actually downloaded and available locally (to be implemented).
- **No Vercel Deployment:** Deployment is handled automatically after pushing to git; this script does not deploy. 