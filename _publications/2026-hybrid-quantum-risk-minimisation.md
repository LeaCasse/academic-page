---
title: "Hybrid Quantum Risk Minimisation: A QRU-QAOA Pipeline for Spatial Flood Tail-Risk Allocation"
collection: publications
permalink: /publication/hybrid-quantum-risk-minimisation/
date: 2026-07-06
venue: "IEEE Quantum Week 2026 — Quantum End-to-End Hybrid Case Studies (QECS) Technical Papers"
status: "Accepted technical paper"
authors: "Léa Cassé, Sabarikirishwaran Ponnambalam, Gregory Pearson, Nick Lim, Bernhard Pfahringer, Albert Bifet"
conferenceurl: "https://qce.quantum.ieee.org/2026/"
artifacturl: "https://github.com/LeaCasse/hybrid-quantum-risk-minimisation"
citation: "L. Cassé, S. Ponnambalam, G. Pearson, N. Lim, B. Pfahringer, and A. Bifet, ‘Hybrid Quantum Risk Minimisation: A QRU-QAOA Pipeline for Spatial Flood Tail-Risk Allocation,’ accepted in the Quantum End-to-End Hybrid Case Studies (QECS) technical-paper track at IEEE Quantum Week 2026."
excerpt: >-
  An end-to-end hybrid pipeline coupling a single-qubit QRU forecaster with a
  correlation-aware CVaR/QUBO allocation objective and a QAOA solver for spatial
  flood tail-risk decisions.
redirect_from:
  - /academic-page/publication/hybrid-quantum-risk-minimisation/
tags:
  - Quantum Machine Learning
  - QRU
  - QAOA
  - CVaR
  - Flood Risk
  - Hybrid Quantum Computing
---

Accepted as a **QCE26 technical paper** in the **Quantum End-to-End Hybrid Case Studies (QECS)** track.

The work links rainfall and river-level forecasting to downstream allocation decisions. A one-qubit QRU produces predictive river-level scenarios, which are transformed into flood-risk scores and combined with a hydro–geo–social coupling model. The resulting spatial allocation problem is expressed through a CVaR-oriented QUBO formulation and studied with QAOA under current NISQ constraints.

The contribution is deliberately framed as an end-to-end case study rather than a quantum-advantage claim: QRU and LSTM forecasters are compared under controlled parameter budgets, the optimisation layer is checked against classical solutions at small scale, and hardware limitations such as constraint leakage and shot inefficiency are reported explicitly.
