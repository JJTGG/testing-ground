# Inalpha Execution

This document defines how Inalpha is executed for Experiment #001.

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

## Execution levels

The smallest level capable of answering the test question should be preferred.

Current levels:

1. isolated component/test
2. service-level execution
3. reduced end-to-end workflow
4. complete local stack

## Verified execution

Experiment #001 has now crossed a reduced managed execution boundary.

The verified path includes:

- disposable TimescaleDB
- queued run persistence
- real database queue claim
- real `execute_frozen_run`
- real seed evaluation
- real baseline evaluation
- deterministic mutation boundary
- real AST audit
- real candidate persistence
- real candidate worker evaluation
- real fitness calculation
- real validation
- real overfitting-risk classification
- real candidate/run finalization

The successful run is preserved under:

`experiments/inalpha/results/`

## Current limitations

The managed run deliberately replaces two external dependencies:

- the LLM mutation boundary is replaced by a deterministic mutator
- the production `DataClient` / `FrozenBarsLoader` path is bypassed by injecting a controlled `FrozenDataset`

The dataset is synthetic.

Therefore this run verifies execution boundaries and framework behavior. It does not establish:

- live LLM mutation
- real market-data behavior
- strategy quality
- production deployment behavior
- hardened hostile-code isolation

## LLM dependency

LLM-dependent tests must explicitly record:

- provider
- model
- relevant configuration
- whether a real provider was used
- any required credentials without storing secrets

A provider key must never be committed to the repository or included in preserved run evidence.

## Evidence rule

Each meaningful run should preserve:

- Inalpha revision
- test definition
- execution environment
- inputs or dataset identifiers where available
- output
- errors
- relevant statistical results
- observations
- manual interventions

Results should remain tied to the exact revision that produced them.

## Rule

Do not claim an Inalpha capability has been verified until Testing Ground has produced evidence from an actual run.