---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: false
hide_title: true
description: "Selected research projects in explainable AI, quantum forecasting, and hybrid quantum optimisation."
redirect_from:
  - /academic-page/projects/
---

<div class="archive-intro reveal-on-scroll">
  <p class="page-kicker">Selected projects</p>
  <h1>Research projects from model understanding to forecast-to-decision systems</h1>
  <p>Selected projects are listed below. Research pages distinguish between completed results, accepted work, and ongoing investigations.</p>
</div>

<div class="filterable-archive" data-filter-root>
  <div class="archive-tools reveal-on-scroll">
    <label class="search-field">
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
      <span class="sr-only">Search projects</span>
      <input type="search" placeholder="Search projects, methods, or topics…" data-filter-search>
    </label>
    <span class="archive-count" data-filter-count></span>
  </div>

  <div class="project-grid" data-filter-list>
    {% assign projects = site.portfolio | sort: "date" | reverse %}
    {% for post in projects %}
      {% include project-card.html post=post %}
    {% endfor %}
  </div>
  <p class="filter-empty" data-filter-empty hidden>No project matches this search.</p>
</div>
