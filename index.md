---
layout: splash
permalink: /
title: "Léa Cassé"
author_profile: true

header:
  overlay_image: /images/banner.png
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
  - image_path: /images/icon-qru.png
    alt: "QRU"
    title: "Quantum Re-Uploading Units"
    excerpt: "Expressivity & trainability of QRU circuits, frequency/Fourier characterization, architecture design under NISQ constraints."
    url: "/research/"
    btn_label: "Research"
    btn_class: "btn--primary"

  - image_path: /images/icon-stream.png
    alt: "Streams"
    title: "Learning on Data Streams"
    excerpt: "Online prediction and temporal modeling under drift, with a focus on deployable and robust methods."
    url: "/projects/"
    btn_label: "Projects"
    btn_class: "btn--primary"

  - image_path: /images/icon-risk.png
    alt: "Risk"
    title: "Risk & Optimization"
    excerpt: "Hybrid QRU→QAOA pipelines, CVaR allocation, and decision-making under uncertainty for climate risk."
    url: "/projects/"
    btn_label: "Pipeline"
    btn_class: "btn--primary"
---

## About (30 seconds)
I am **Léa Cassé**, a PhD researcher (cotutelle **University of Waikato** × **Institut Polytechnique de Paris**) working on **Quantum Machine Learning for data streams**.
My core focus is the **spectral theory and practical design of Quantum Re-Uploading Units (QRU)**, with applications to time-series prediction and risk modelling.

{% include feature_row %}

---

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

---

## Recent updates
<ul>
{% for post in site.posts limit:3 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small> — {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>

<p><a class="btn btn--primary" href="{{ '/posts/' | relative_url }}">All updates</a></p>
