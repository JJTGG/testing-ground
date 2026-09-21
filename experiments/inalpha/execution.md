# Inalpha Execution

This document defines how Inalpha is expected to be executed for Experiment #001.

Testing Ground does not execute Inalpha inside the Next.js application.

## Execution boundary

Testing Ground is responsible for:

- defining the experiment
- defining the test
- identifying the Inalpha revision
- recording runs
- collecting evidence
- preserving observations

Inalpha is responsible for:

- its application runtime
- its Python services
- its Node/Mastra services
- its database dependencies
- its internal evaluation and backtesting machinery
- its own execution logic

## Initial approach

The first execution should not attempt to reproduce the complete Inalpha production environment unless the test requires it.

We will first identify the smallest runnable Inalpha component that can produce meaningful evidence.

Candidate execution levels:

1. isolated component/test
2. service-level execution
3. reduced end-to-end workflow
4. complete local stack

The smallest level capable of answering the test question should be preferred.

## First objective

Establish that a controlled Inalpha test can be executed and its output captured.

The first run should record:

- Inalpha commit
- test being executed
- runtime/environment
- command used
- exit status
- stdout
- stderr
- duration
- relevant generated artifacts

## LLM dependency

LLM-dependent tests must explicitly record:

- provider
- model
- relevant configuration
- whether a real provider was used
- any required credentials without storing secrets

A provider key must never be committed to the repository or included in preserved run evidence.

## Current state

No Inalpha execution has been performed through Testing Ground yet.

This document describes the intended boundary, not a completed execution.

## Rule

Do not claim an Inalpha capability has been verified until Testing Ground has produced evidence from an actual run.