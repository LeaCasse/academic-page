# Léa Cassé — academic website

Source code for [https://leacasse.github.io/](https://leacasse.github.io/), built with Jekyll and the Academic Pages / Minimal Mistakes theme family.

## Repository name and public URL

This repository must be named exactly:

```text
leacasse.github.io
```

GitHub then publishes the user site at:

```text
https://leacasse.github.io/
```

The previous project-site URL, `https://leacasse.github.io/academic-page/`, is covered by compatibility redirects for the principal pages and collection entries.

## Content structure

- `index.md` — homepage
- `about.md`, `research.md`, `projects.md`, `ml-freelance.md`, `teaching.md`, `cv.md` — main pages
- `_publications/` — publication records
- `_talks/` — talks and presentations
- `_portfolio/` — selected research projects
- `files/CV_Lea_Casse.pdf` — current public CV
- `_config.yml` — site URL, profile, collections, plugins, and metadata

## Updating the site

1. Edit the relevant Markdown or data file.
2. Commit the change.
3. Push to `main` or `master`.
4. `.github/workflows/pages.yml` builds the Jekyll site and deploys it to GitHub Pages automatically.

For high-risk changes, use a branch and a pull request before merging into the production branch.

## Local build

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000/`.

## Deployment check

After a deployment, verify:

- `/`
- `/projects/`
- `/ml-freelance/`
- `/publications/`
- `/talks/`
- `/teaching/`
- `/cv/`
- `/sitemap.xml`
- `/robots.txt`

The site uses `jekyll-sitemap` and `jekyll-redirect-from`; both are declared in `_config.yml` and the `Gemfile`.

## Visual system and interaction

The visual layer is intentionally local and lightweight:

- `_sass/_custom.scss` contains the site design system and responsive components;
- `_layouts/home.html` provides the homepage hero and full-width structure;
- `_includes/publication-card.html`, `project-card.html`, and `talk-card.html` provide reusable collection cards;
- `assets/js/site.js` provides progressive reveal, archive filtering, reading progress, active section tracking, citation copying, and back-to-top behaviour.
- the interface intentionally uses one permanent dark theme; there is no user-facing theme switcher.

The site remains a static Jekyll site. All core content stays usable without the enhancement script, and no JavaScript framework or external font service is required.
