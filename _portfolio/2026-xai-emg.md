---
title: "Explainable AI for Cross-Day EMG Gesture Classification"
collection: portfolio
permalink: /project/xai-emg-gesture-classification/
date: 2026-07-01
status: "Ongoing research"
collaborators: "Research collaboration with Anany"
excerpt: >-
  An XAI study of multichannel EMG gesture classification under cross-day and
  domain shift, designed to separate physiologically meaningful signal regions
  from unstable model artefacts.
redirect_from:
  - /academic-page/project/xai-emg-gesture-classification/
tags:
  - Explainable AI
  - EMG
  - Domain Shift
  - Integrated Gradients
  - Time Series
---

# Project objective

This project investigates **why an EMG gesture classifier succeeds or fails when the acquisition day changes**. High predictive accuracy on a familiar split is not enough: the explanation should remain stable, localise plausible temporal and channel-level evidence, and avoid relying on acquisition artefacts.

## Current methodology

The work combines a compact neural classifier with a case-based explanation audit. Rather than averaging explanations across the entire test set, we inspect distinct behavioural regimes:

- canonical correct predictions;
- borderline confusions;
- persistent hard cases;
- representative errors under cross-day shift.

Attribution methods, including **Integrated Gradients**, are compared with temporal attention and signal context. Positive and negative contributions are kept separate so that an explanation does not hide cancellation effects behind a single absolute-importance score.

## Research question

The central question is not merely whether an attribution map is visually smooth. It is whether the explanation identifies signal regions that are **physiologically plausible, stable across days, and causally relevant to the model’s decision**, rather than unstable background or preprocessing artefacts.

## Status

This is ongoing work with Anany. Results are treated as preliminary until the cross-day evaluation, explanation stability tests, and case-selection protocol are fully validated.
