## Statistical correction trace

A managed E1 run was performed with three distinct candidate strategies at:

- Testing Ground revision: `4b6b86ec98e9f919bfa3c980022d3edd5e9b2f1a`
- Inalpha revision: `3da8b103d61fc3c6af82ea479beade0cd7436e57`
- GitHub Actions run: `36010926292`
- Run ID: `fc31d6b7-25fd-4a65-9725-74a8ca000baa`

All three candidates reached the real E1 candidate evaluation path.

The candidate evaluator exposed no evolutionary trial-count parameter, and none of the three evaluation snapshots contained evolutionary trial-count, CV, DSR, or PBO fields.

Static inspection also found that the E1 generation, slot, and strategy-evaluation modules do not directly invoke the separate CV/DSR/PBO machinery found in the paper backtest module.

### Finding

At the pinned revision, this experiment found no evidence that the E1 evolutionary candidate population is passed into CV/DSR/PBO correction at the candidate-evaluation boundary tested.

This does **not** establish that Inalpha lacks multiple-testing correction elsewhere in its broader research system.

See the preserved run result for the complete evidence record.