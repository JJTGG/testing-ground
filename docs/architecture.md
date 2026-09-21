# Architecture

Testing Ground is intentionally built incrementally.

The architecture should be derived from real experiments rather than designed entirely in advance.

Current boundaries:

- `app/` — web interface
- `experiments/` — isolated experiments
- `core/` — reusable infrastructure
- `docs/` — architecture and project documentation
- `python/` — Python runtime space for experiments that need it
- `data/` — persistent experiment data when appropriate
- `scripts/` — repository tooling