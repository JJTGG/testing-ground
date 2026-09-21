# Inalpha

Experiment #001.

Inalpha is an open-source quantitative research framework that uses LLMs for research, strategy generation, evaluation, and evolution.

Testing Ground is not trying to reproduce or replace Inalpha's internal architecture.

The purpose of this experiment is to bring Inalpha into a controlled environment and test what actually happens when its documented research and evolution workflow is exercised.

## Questions

### 1. Can the core workflow execute?

Test the path from:

LLM hypothesis → generated strategy → candidate evaluation → statistical analysis → forward evaluation → final selection.

Record where the workflow succeeds, fails, or requires manual intervention.

### 2. Does the statistical evaluation behave as expected?

Examine the framework's use of:

- Deflated Sharpe Ratio
- bootstrap confidence intervals
- Probability of Backtest Overfitting
- Combinatorial Purged Cross-Validation
- multiple-testing correction
- parameter sensitivity
- null-IC testing
- point-in-time data checks

The goal is to verify behavior, not assume correctness from the presence of the statistical methods.

### 3. Does evolution become appropriately more conservative?

Repeated candidate generation creates additional opportunities to find apparently strong strategies by chance.

Test whether increasing the number of candidates/trials is reflected appropriately in the framework's statistical evaluation.

### 4. Can obvious leakage be detected?

Introduce controlled cases where future information could enter a feature or evaluation path.

Determine whether the framework detects or prevents the leakage.

### 5. Does the holdout remain genuinely isolated?

Verify that the sealed holdout is not exposed during candidate generation, evolution, or intermediate selection.

### 6. What does the sandbox actually protect?

Determine the practical isolation boundary of the execution mechanisms used by Inalpha.

Do not treat a subprocess boundary as equivalent to hardened container or VM isolation without evidence.

## Baseline

Before testing evolutionary behavior, establish a simple baseline strategy.

The baseline should provide a reference point for:

- execution
- backtesting
- evaluation
- statistical reporting
- reproducibility

## Evidence

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

## Boundary

Testing Ground owns the experiment record and evidence.

Inalpha owns its internal:

- evaluator
- backtesting engine
- strategy execution
- evolution logic
- sandbox implementation

Testing Ground should observe and test these systems rather than reimplement them.

## Status

Active.

The first objective is not to prove that Inalpha works.

It is to find out what actually happens when we run it.