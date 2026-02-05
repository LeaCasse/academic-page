---
layout: splash
permalink: /
title: "Léa Cassé"
author_profile: true

header:
  overlay_image: https://leacasse.github.io/academic-page/images/banner.png
  overlay_filter: "0.35"
  overlay_color: "#000"

excerpt: "PhD in Quantum Machine Learning — Quantum Re-Uploading Units (QRU), spectral analysis, and streaming prediction/risk."

actions:
  - label: "CV"
    url: "/cv/"
  - label: "Publications"
    url: "/publications/"
  - label: "Research"
    url: "/research/"

feature_row:
  - image_path: https://leacasse.github.io/academic-page/images/icon-qru.png
    alt: "QRU"
    title: "Quantum Re-Uploading Units"
    excerpt: "Expressivity & trainability of QRU circuits, frequency/Fourier characterization, architecture design under NISQ constraints."
    url: "/research/"
    btn_label: "Research"
    btn_class: "btn--primary"

  - image_path: https://leacasse.github.io/academic-page/images/icon-stream.png
    alt: "Streams"
    title: "Learning on Data Streams"
    excerpt: "Online prediction and temporal modeling under drift, with a focus on deployable and robust methods."
    url: "/projects/"
    btn_label: "Projects"
    btn_class: "btn--primary"

  - image_path: https://leacasse.github.io/academic-page/images/icon-risk.png
    alt: "Risk"
    title: "Risk & Optimization"
    excerpt: "Hybrid QRU→QAOA pipelines, CVaR allocation, and decision-making under uncertainty for climate risk."
    url: "/projects/"
    btn_label: "Pipeline"
    btn_class: "btn--primary"
---

## About
**Léa Cassé**, PhD researcher (cotutelle **University of Waikato** × **Institut Polytechnique de Paris**) working on **Quantum Machine Learning for data streams**.
Core focus is the **spectral theory and practical design of Quantum Re-Uploading Units (QRU)**, with applications to time-series prediction and risk modelling.

{% include feature_row %}

## Featured publications
<ul>
{% assign pubs = site.publications | sort: "date" | reverse %}
{% for p in pubs limit:3 %}
  <li>
    <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    {% if p.venue %} — <em>{{ p.venue }}</em>{% endif %}
    {% if p.date %} ({{ p.date | date: "%Y" }}){% endif %}
  </li>
{% endfor %}
</ul>

<p><a class="btn btn--primary" href="{{ '/publications/' | relative_url }}">All publications</a></p>
