# Run 001 — DB-free engine smoke

## Experiment

- Experiment: Inalpha
- Testing Ground experiment: #001
- Inalpha revision: `3da8b103d61fc3c6af82ea479beade0cd7436e57`
- Testing Ground workflow: `Inalpha Engine Smoke`
- Execution environment: GitHub Actions / Ubuntu runner
- Execution boundary: Paper `SignalReplayStrategy` + `BacktestEngine`
- Database: not required

## Input

Controlled `strategy_v1` payload containing two signals:

- BUY: `ts=1700010800000`, `qty=0.5`
- SELL: `ts=1700025200000`, `qty=0.5`

The replay script generated 10 synthetic 1h BTC/USDT bars with prices from 100 to 110.

## Result

- Signals replayed: 2/2
- Initial cash: 10000.00
- Final equity: 10000.89
- Total return: +0.0089%
- Trades: 2
- Total fees: 0.1090
- Sharpe: 27.36
- Maximum drawdown: 0.0005%
- Win rate: 100.0%
- Equity curve: 10 points

## Evidence

The workflow completed successfully and uploaded the captured stdout/stderr as a GitHub Actions artifact.

The successful execution demonstrates that this Inalpha revision can run the controlled signal-replay → BacktestEngine → BacktestReport path in a fresh GitHub Actions environment without PostgreSQL.

## Interpretation

This is an execution-path result, not a strategy-performance result.

The dataset is synthetic and only 10 bars long. The reported Sharpe, return, drawdown, and win rate therefore should not be interpreted as evidence of trading quality.

This run does not verify the broader Paper pytest suite, real market data, LLM generation, evolutionary evaluation, statistical-method correctness, or sandbox security.

## Next boundary

The next test should move one layer upward from the isolated engine path while keeping the boundary explicit. PostgreSQL should only be introduced when the test question actually requires the database-backed Paper environment.