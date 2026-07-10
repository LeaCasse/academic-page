# QA report

## Requested changes verified

- removed `_portfolio/portfolio-1.md` and `_portfolio/portfolio-2.html`;
- removed the `LC` masthead mark while retaining a readable text brand on desktop and mobile;
- removed the light/dark switcher and locked the document, browser metadata, runtime bundle, and Plotly integration to dark mode;
- replaced `images/lea.jpg` with the supplied 714 × 736 portrait and updated intrinsic image dimensions;
- added `_portfolio/2026-qml-podcast.md` with the supplied Spotify URL;
- updated the QRU time-series publication to state that it was published by IEEE at QCE25;
- removed Frédéric Magniette from the About-page supervision sentence;
- retained Frédéric Magniette in the calorimetry paper’s author list because removing a genuine co-author would make the publication record inaccurate.

## Repository cleanup

The uploaded repository still contained template files from the original AcademicPages starter and duplicate legacy pages. These were removed because they could create duplicate routes, duplicate cards, or indexable placeholder content:

- duplicate `_pages/` versions of the current root pages;
- the obsolete duplicate QRU publication record with the same permalink;
- sample blog posts;
- obsolete duplicate talk records;
- the obsolete `Scrape Talk Locations` workflow that was producing a failed GitHub Action;
- placeholder teaching records.

Internal migration, QA, and changelog files are now excluded from the generated public site.

## Static validation

- parsed 34 front-matter documents successfully;
- checked 21 explicit permalinks and found no duplicates;
- checked 55 local file references used by pages and layouts;
- confirmed the requested Spotify URL is present;
- confirmed the placeholder project titles and theme-toggle code are absent;
- confirmed the profile image is a valid progressive RGB JPEG;
- rebuilt `assets/js/main.min.js` from the edited source;
- validated `assets/js/site.js`, `assets/js/_main.js`, and `assets/js/theme.js` with Node syntax checks;
- confirmed the mobile masthead retains the `Léa Cassé` text after removal of the LC mark.

## Runtime build boundary

A complete local Jekyll build could not be run because Bundler/Jekyll gems were not installed and RubyGems DNS access was unavailable in the editing environment. The existing GitHub Pages workflow remains the authoritative runtime build. After pushing this version, the `Deploy Jekyll site to GitHub Pages` action should be checked for a green result.
