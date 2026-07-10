# QA report

## Migration and content checks

- parsed all YAML front matter successfully;
- checked 32 front-matter documents and all explicit routes;
- found no duplicate explicit permalinks;
- confirmed every navigation item targets an existing page;
- confirmed all internal page routes referenced by edited files exist;
- confirmed all local image and PDF references used by edited pages exist;
- confirmed `url`, empty `baseurl`, repository name, sitemap plugin, and redirect plugin remain configured for the root user site;
- verified the replacement CV remains present at `files/CV_Lea_Casse.pdf`;
- left publication, project, and talk source records unchanged during the visual refresh.

## Visual and code checks

- added a local `page` layout so every `layout: page` document resolves inside the repository;
- checked Liquid block balancing across Markdown, HTML, YAML, layouts, and includes;
- parsed the complete custom stylesheet with `tinycss2`: no stylesheet parse errors and no declaration errors;
- checked stylesheet brace and parenthesis balancing;
- validated `assets/js/site.js` with Node's syntax checker;
- checked the main edited HTML fragments for duplicate IDs;
- verified every Font Awesome class introduced by the refresh exists in the bundled Font Awesome variables;
- checked the responsive navigation still exposes a single button to the existing greedy-navigation plugin;
- kept content visible when enhancement JavaScript is unavailable;
- added reduced-motion handling and keyboard access for the theme control;
- made MathJax, Plotly, and Mermaid conditional instead of loading them on every page.

## Runtime build boundary

A complete local Jekyll build could not be executed in the editing environment because the Jekyll/GitHub Pages gems were not installed and external RubyGems access was unavailable. The repository's GitHub Pages workflow performs the authoritative Jekyll build after push. The first workflow run remains the final runtime integration check.
