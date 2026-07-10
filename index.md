---
layout: home
permalink: /
title: "Léa Cassé"
author_profile: false
description: "Léa Cassé — Quantum Machine Learning for data streams, QRU models, explainable AI, hybrid quantum optimisation, and applied ML consulting."
excerpt: "I develop compact quantum and machine-learning systems for temporal data, from QRU theory and forecasting to explainability and downstream risk decisions."
redirect_from:
  - /academic-page/
  - /academic-page/index.html
---

<section class="home-intro section-block reveal-on-scroll" aria-labelledby="about-heading">
  <div class="section-heading">
    <p class="section-kicker">About</p>
    <h2 id="about-heading">Research across quantum models, dynamic data, and real decisions</h2>
  </div>
  <div class="home-intro__grid">
    <p class="lead-copy">I am <strong>Léa Cassé</strong>, a PhD candidate in a joint programme between the <strong>University of Waikato</strong> and <strong>École Polytechnique / Institut Polytechnique de Paris</strong>. My research focuses on <strong>Quantum Machine Learning for data streams</strong>, particularly the theory and practical design of <strong>Quantum Re-Uploading Units (QRUs)</strong> for time-series forecasting and downstream decision problems.</p>
    <p>Alongside my PhD, I work as a <strong>freelance AI/ML consultant</strong> on governed machine-learning systems, semantic data contracts, forecasting evaluation, provenance, explainability, and human-in-the-loop review.</p>
  </div>
</section>

<section class="section-block" aria-labelledby="focus-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="section-kicker">Research focus</p>
      <h2 id="focus-heading">Three connected directions</h2>
    </div>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Full research overview <span aria-hidden="true">→</span></a>
  </div>

  <div class="focus-grid">
    <a class="focus-card reveal-on-scroll" href="{{ '/research/' | relative_url }}">
      <span class="focus-card__number">01</span>
      <div class="focus-card__icon"><img src="{{ '/images/icon-qru.png' | relative_url }}" alt="" loading="lazy"></div>
      <h3>Quantum Re-Uploading Units</h3>
      <p>Expressivity, trainability, Fourier structure, and architecture design for shallow QRU circuits under NISQ constraints.</p>
      <span class="focus-card__link">Research <span aria-hidden="true">→</span></span>
    </a>

    <a class="focus-card reveal-on-scroll" href="{{ '/projects/' | relative_url }}">
      <span class="focus-card__number">02</span>
      <div class="focus-card__icon"><img src="{{ '/images/icon-stream.png' | relative_url }}" alt="" loading="lazy"></div>
      <h3>Data Streams &amp; Explainable AI</h3>
      <p>Temporal modelling under drift, cross-day EMG classification, and attribution analyses that distinguish meaningful signal from unstable artefacts.</p>
      <span class="focus-card__link">Projects <span aria-hidden="true">→</span></span>
    </a>

    <a class="focus-card reveal-on-scroll" href="{{ '/projects/' | relative_url }}">
      <span class="focus-card__number">03</span>
      <div class="focus-card__icon"><img src="{{ '/images/icon-risk.png' | relative_url }}" alt="" loading="lazy"></div>
      <h3>Risk &amp; Hybrid Optimisation</h3>
      <p>QRU-to-QAOA pipelines, CVaR allocation, and decision-making under uncertainty for climate-risk applications.</p>
      <span class="focus-card__link">Projects <span aria-hidden="true">→</span></span>
    </a>
  </div>
</section>

<section class="news-panel section-block reveal-on-scroll" aria-labelledby="news-heading">
  <div class="section-heading">
    <p class="section-kicker">Latest news</p>
    <h2 id="news-heading">QCE26 · IEEE Quantum Week 2026</h2>
  </div>
  <div class="news-timeline">
    <div class="news-item">
      <time datetime="2026-07">July 2026</time>
      <p><em>Hybrid Quantum Risk Minimisation: A QRU-QAOA Pipeline for Spatial Flood Tail-Risk Allocation</em> was accepted as a QCE26 technical paper in the <strong>Quantum End-to-End Hybrid Case Studies (QECS)</strong> track.</p>
    </div>
    <div class="news-item">
      <time datetime="2026-09">September 2026</time>
      <p>I will present the accepted work at <strong>IEEE Quantum Week 2026</strong> in Toronto, Canada.</p>
    </div>
  </div>
  <div class="news-panel__actions">
    <a class="btn btn--primary" href="{{ '/publication/hybrid-quantum-risk-minimisation/' | relative_url }}">Read the publication entry</a>
    <a class="btn btn--soft" href="{{ '/talk/qce26-hybrid-quantum-risk-minimisation/' | relative_url }}">Presentation details</a>
  </div>
</section>

<section class="section-block" aria-labelledby="publications-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="section-kicker">Selected work</p>
      <h2 id="publications-heading">Featured publications</h2>
    </div>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
  </div>
  <div class="publication-grid publication-grid--home">
    {% assign pubs = site.publications | sort: "date" | reverse %}
    {% for p in pubs limit:3 %}
      {% include publication-card.html post=p compact=true %}
    {% endfor %}
  </div>
</section>

<section class="contact-banner section-block reveal-on-scroll">
  <div>
    <p class="section-kicker">Research &amp; applied work</p>
    <h2>Explore the academic work or the ML consulting track.</h2>
  </div>
  <div class="contact-banner__actions">
    <a class="btn btn--primary" href="{{ '/projects/' | relative_url }}">View projects</a>
    <a class="btn btn--soft" href="{{ '/ml-freelance/' | relative_url }}">ML Freelance</a>
  </div>
</section>
