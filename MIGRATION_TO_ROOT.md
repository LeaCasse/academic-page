# Migration from `/academic-page/` to the root GitHub Pages URL

## Required GitHub operation

Rename the GitHub repository from:

```text
academic-page
```

to:

```text
leacasse.github.io
```

This repository name is required for the user-site URL:

```text
https://leacasse.github.io/
```

Changing `_config.yml` alone is not sufficient if the repository keeps the old name.

## Pages settings

In **Settings → Pages → Build and deployment**, select **GitHub Actions**.

The repository now contains `.github/workflows/pages.yml`, which builds and deploys the Jekyll site automatically after a push to `main` or `master`. You can also launch it manually with **Run workflow**.

Do not configure a custom domain unless you later purchase one.

## Configuration already migrated

- `url` is `https://leacasse.github.io`
- `baseurl` is empty
- `repository` is `leacasse/leacasse.github.io`
- all homepage assets use root paths
- primary old `/academic-page/` routes have compatibility redirects
- the 404 page removes the legacy prefix for missed old links
- the XML sitemap and robots file target the root site

## Post-deployment checks

Verify the following URLs:

```text
https://leacasse.github.io/
https://leacasse.github.io/projects/
https://leacasse.github.io/ml-freelance/
https://leacasse.github.io/publications/
https://leacasse.github.io/talks/
https://leacasse.github.io/teaching/
https://leacasse.github.io/cv/
https://leacasse.github.io/sitemap.xml
https://leacasse.github.io/robots.txt
```

Also test old paths such as:

```text
https://leacasse.github.io/academic-page/
https://leacasse.github.io/academic-page/publications/
https://leacasse.github.io/academic-page/cv/
```

## Search indexing

After the root site is live, submit `https://leacasse.github.io/sitemap.xml` in Google Search Console and request indexing for the homepage, publications, projects, and talks pages. Keep compatibility redirects in place while search engines replace the old URLs.
