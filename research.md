---
layout: page
title: "Research"
permalink: /research/
---

# Research Overview

My PhD explores the **expressivity, trainability, and practical deployment** of *Quantum Re-Uploading Units (QRU)* and *Quantum Residual Blocks (QRB)* for streaming data and physical-system modeling.  
It is organized into **three main parts**, each divided into three sub-sections.

---

## Part I — Applied QRU Models

### 1. Particle Classification at the LHC  
Quantum re-uploading circuits are used to classify elementary particles (electrons, pions, ions) recorded by calorimeters at the Large Hadron Collider.  
The study compares different encoding schemes and evaluates how circuit depth and re-upload frequency affect classification accuracy and noise resilience.

### 2. Energy Regression  
The same architecture is trained for energy regression of detected particles.  
We analyze the QRU’s capability to approximate continuous physical variables under limited-depth constraints and investigate the impact of parameter sharing on generalization.

### 3. Streaming Data Forecasting with QRU and QRB  
QRU-based models are applied to non-stationary data streams, using *absorption witnesses* and *Quantum Residual Blocks* to enhance robustness and interpretability.  
The goal is to understand whether residual quantum connections improve predictive stability and reduce vanishing-gradient issues.

---

## Part II — Theoretical Foundations

### 1. QRU as a Quantum Non-Linearity  
We explore how a QRU can act as a non-linear transformation within a *fully quantum loss function*.  
This includes joint optimization of quantum parameters and loss evaluation entirely inside a circuit, developed in collaboration with Google Quantum AI.

### 2. Output Manifold Analysis  
We study how the QRU output shapes depend on hyperparameters (rotation scaling, depth, re-upload count).  
The objective is to interpret these geometries in Hilbert space and link them to the model’s generalization and trainability.

### 3. Fourier Spectral Expressivity  
Using Fourier analysis, we characterize how the frequency spectrum of the QRU evolves with its hyperparameters.  
This provides a rigorous framework for quantifying expressivity and identifying frequency-aliasing regimes inherent to quantum data re-uploading.

---

## Part III — QRU for Streaming and Decision Tasks

### 1. Reinforcement Learning Observability  
QRU embeddings are introduced in a reinforcement-learning loop to improve state observability.  
This prototype is tested on bus-load forecasting in Salvador (Brazil), where better temporal encoding enhances policy stability and prediction accuracy.

### 2. Flood-Risk Forecasting and Parametric Insurance  
A full pipeline couples a one-qubit QRU (for rainfall-and-river-level prediction) with a *QAOA-based CVaR optimizer* that allocates parametric-insurance portfolios.  
The system forecasts river-overflow risk across the Waikato region (New Zealand) up to 48 hours ahead.

### 3. QRU in Sequential Architectures  
We investigate hybrid architectures where the QRU forms the gates of an LSTM or acts as a critic within a reinforcement-learning agent.  
This line aims to integrate quantum non-linearities directly into recurrent or actor–critic frameworks for streaming environments.

---

**Keywords:** Quantum Re-Uploading Units (QRU) · Quantum Residual Blocks (QRB) · Fourier analysis · Expressivity · Streaming data · Flood forecasting · Reinforcement learning · Parametric insurance
