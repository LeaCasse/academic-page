---
title: "Hybrid Quantum Risk Minimisation for Spatial Flood Allocation"
collection: portfolio
permalink: /project/hybrid-quantum-risk-minimisation/
date: 2026-07-06
status: "Accepted at IEEE Quantum Week 2026"
collaborators: "Léa Cassé, Sabarikirishwaran Ponnambalam, Gregory Pearson, Nick Lim, Bernhard Pfahringer, Albert Bifet"
excerpt: >-
  A QRU–CVaR–QUBO–QAOA pipeline that links hydrological forecasting to
  correlation-aware spatial tail-risk allocation and evaluates both simulator
  and current-hardware constraints.
redirect_from:
  - /academic-page/project/hybrid-quantum-risk-minimisation/
tags:
  - QRU
  - QAOA
  - CVaR
  - Climate Risk
  - Flood Forecasting
---

# Forecast-to-decision pipeline

This project couples a **single-qubit Quantum Re-Uploading Unit (QRU)** forecaster with a downstream spatial allocation problem. Daily precipitation and river-level windows are converted into predictive scenarios and bounded flood-risk indicators. A composite interaction model combines hydrological connectivity, geographic proximity, and social exposure.

The allocation layer uses a tail-risk objective based on **Conditional Value-at-Risk (CVaR)**, a QUBO representation, and a QAOA solver for small portfolio instances.

## Evaluation principles

The project does not claim quantum advantage. Its evaluation instead asks:

- whether QRU and classical forecasters are compared under controlled capacity;
- how forecast errors propagate into tail-risk decisions;
- whether QAOA samples recover or approach known classical solutions;
- how hardware noise, compilation, Hamming-weight leakage, and finite shots affect feasibility.

## Recognition and publication

The underlying flood-risk prototype originated in the **DelphiQ** project, winner of the World Bank Climate Risk Challenge track of the 2025 Global Industry Challenge. The extended technical paper was accepted in the **Quantum End-to-End Hybrid Case Studies (QECS)** track at IEEE Quantum Week 2026.

[Conference website](https://qce.quantum.ieee.org/2026/) · [Code and reproducibility artifact](https://github.com/LeaCasse/hybrid-quantum-risk-minimisation) · [Publication entry]({{ '/publication/hybrid-quantum-risk-minimisation/' | relative_url }})
