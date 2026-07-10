# Site update — July 2026

- migrated the configuration from the project URL `/academic-page/` to the root user-site URL;
- added legacy route redirects and root-site SEO metadata;
- replaced the public CV PDF with the supplied 2026 CV;
- added the accepted QCE26 QECS technical paper with all six authors;
- added the planned IEEE Quantum Week 2026 presentation in Toronto;
- rebuilt the Projects section and added the XAI/EMG collaboration with Anany;
- added a dedicated ML Freelance page for the public InvestMint project scope;
- expanded Teaching with mathematics and physics tutoring through Superprof;
- removed duplicate and placeholder pages, posts, portfolio items, teaching items, and the stale talk-map workflow;
- corrected publication metadata and removed placeholder profile links;
- added robots.txt, a clearer sitemap, and structured Person metadata.

## Visual and interaction refresh

- rebuilt the homepage around a full-width research hero, profile card, research-focus cards, QCE26 news panel, and featured-publication cards;
- introduced a coherent navy/amber visual system with light and dark themes, responsive layouts, improved typography, spacing, contrast, and card hierarchy;
- redesigned About, Research, Projects, Publications, Talks, ML Freelance, Teaching, CV, detail pages, footer, navigation, and the 404 page;
- added searchable and filterable publication, project, and talk archives;
- added progressive reveal animations, a scroll-progress indicator, back-to-top control, active research-section navigation, and citation copy buttons;
- made optional MathJax, Plotly, and Mermaid assets load only when a page explicitly requests them;
- added the previously missing local `page` layout, preventing pages that request `layout: page` from depending on an unavailable layout;
- retained the existing research claims, project descriptions, publication records, talks, teaching content, and CV file.

## Dark-only profile and content update

- removed the two placeholder portfolio entries;
- removed the LC masthead mark and the theme switcher;
- locked the site to the dark visual theme;
- replaced the profile photograph with the July 2026 portrait;
- added the Quantum Machine Learning podcast project with its Spotify link;
- clarified that the QRU time-series paper was published by IEEE at QCE25;
- removed Frédéric Magniette from the supervision sentence on the About page while preserving the factual author list of the calorimetry publication.
- removed the obsolete `Scrape Talk Locations` workflow to prevent unrelated failed Actions.
