---
layout: page
title: "Research"
permalink: /research/
author_profile: false
hide_title: true
description: "Research on Quantum Re-Uploading Units, spectral expressivity, data streams, and hybrid quantum decision pipelines."
redirect_from:
  - /academic-page/research/
---

<div class="page-hero page-hero--research reveal-on-scroll">
  <div class="page-hero__copy">
    <p class="page-kicker">Research overview</p>
    <h1>From compact quantum circuits to temporal prediction and risk allocation</h1>
    <p class="page-lead">My PhD investigates the <strong>expressivity, trainability, and practical deployment of Quantum Re-Uploading Units (QRUs)</strong> for streaming data and physical-system modelling.</p>
  </div>
  <div class="research-orbit" aria-hidden="true">
    <span class="research-orbit__core">QRU</span>
    <span class="research-orbit__node research-orbit__node--one">Theory</span>
    <span class="research-orbit__node research-orbit__node--two">Streams</span>
    <span class="research-orbit__node research-orbit__node--three">Decisions</span>
  </div>
</div>

<nav class="section-nav reveal-on-scroll" aria-label="Research sections">
  <a href="#applied-qru">Applied QRU models</a>
  <a href="#foundations">Theoretical foundations</a>
  <a href="#streaming-decisions">Streaming &amp; decisions</a>
</nav>

<section id="applied-qru" class="research-track section-block">
  <div class="research-track__heading reveal-on-scroll">
    <span>01</span>
    <div><p class="section-kicker">Application layer</p><h2>Applied QRU models</h2></div>
  </div>
  <div class="research-card-grid">
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-circle-nodes" aria-hidden="true"></i>
      <h3>Particle classification and regression</h3>
      <p>I use single-qubit data re-uploading circuits for calorimetric particle identification and related regression tasks. The work studies how feature mappings, circuit depth, re-upload count, parameter sharing, optimisation choices, and NISQ constraints affect performance.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
      <h3>Time-series and streaming prediction</h3>
      <p>QRU models are evaluated on chaotic and environmental time series, with emphasis on low-parameter regimes, non-stationarity, spectral structure, and robust validation against classical baselines.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-water" aria-hidden="true"></i>
      <h3>Climate-risk forecasting</h3>
      <p>A one-qubit QRU forecaster converts rainfall and river-level windows into short-term flood-risk indicators. These predictions feed downstream spatial risk-allocation objectives.</p>
    </article>
  </div>
</section>

<section id="foundations" class="research-track section-block">
  <div class="research-track__heading reveal-on-scroll">
    <span>02</span>
    <div><p class="section-kicker">Theory layer</p><h2>Theoretical foundations</h2></div>
  </div>
  <div class="research-card-grid">
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-wave-square" aria-hidden="true"></i>
      <h3>Spectral and Fourier expressivity</h3>
      <p>I characterise how data encodings, trainable rotations, depth, and re-uploading determine the accessible frequency support of shallow quantum models. The goal is to connect circuit design to the spectral structure of the target function rather than treating architecture selection as a black-box search.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
      <h3>Trainability and gradients</h3>
      <p>I study gradient behaviour, parameter sharing, low-parameter architecture design, and the regimes in which additional depth improves representation or instead creates optimisation instability.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-link" aria-hidden="true"></i>
      <h3>Coherent quantum pipelines</h3>
      <p>A further direction investigates how QRU outputs can be used by downstream quantum algorithms without reducing the architecture to an isolated prediction block.</p>
    </article>
  </div>
</section>

<section id="streaming-decisions" class="research-track section-block">
  <div class="research-track__heading reveal-on-scroll">
    <span>03</span>
    <div><p class="section-kicker">Decision layer</p><h2>Streaming and decision tasks</h2></div>
  </div>
  <div class="research-card-grid">
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-route" aria-hidden="true"></i>
      <h3>Reinforcement learning and sequential architectures</h3>
      <p>QRU embeddings and quantum recurrent components are studied in sequential decision settings, including passenger-load prediction and bus-headway regulation.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-diagram-project" aria-hidden="true"></i>
      <h3>QRU–QAOA tail-risk allocation</h3>
      <p>The flood-risk project couples QRU predictions with a hydro–geo–social interaction model, a CVaR-based allocation objective, a QUBO representation, and a QAOA solver. The work explicitly evaluates where current NISQ hardware is viable and where classical baselines remain necessary.</p>
    </article>
    <article class="research-topic-card reveal-on-scroll">
      <i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i>
      <h3>Explainability under distribution shift</h3>
      <p>In an ongoing XAI collaboration, I analyse cross-day EMG gesture classification using attribution and attention-based diagnostics. The objective is to distinguish stable, physiologically plausible explanations from artefacts that arise under domain shift.</p>
    </article>
  </div>
</section>

<div class="keyword-cloud section-block reveal-on-scroll" aria-label="Research keywords">
  <strong>Keywords</strong>
  <span>Quantum Re-Uploading Units</span><span>Quantum Machine Learning</span><span>Fourier analysis</span><span>Data streams</span><span>Time-series forecasting</span><span>Explainable AI</span><span>CVaR</span><span>QAOA</span><span>NISQ</span>
</div>
