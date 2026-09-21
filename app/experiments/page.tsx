import Link from "next/link";

import { getExperiments } from "../../core/registry";
import { getRuns } from "../../core/results/reader";

export default function ExperimentsPage() {
  const experiments = getExperiments();
  const runs = getRuns();

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">TESTING GROUND / EXPERIMENTS</p>

        <h1>Experiments.</h1>

        <p className="intro">
          External technologies brought into the Testing Ground for actual
          testing, observation, and evidence.
        </p>
      </section>

      <section className="section">
        <p className="section-label">REGISTRY</p>

        {experiments.length === 0 ? (
          <div className="empty-state">
            <h2>No experiments yet.</h2>
            <p>
              The environment is ready. The first experiment will be added
              when it is ready to be tested.
            </p>
          </div>
        ) : (
          <div className="experiment-list">
            {experiments.map((experiment) => {
              const experimentRuns = runs.filter(
                (run) => run.experiment === experiment.slug,
              );

              return (
                <article key={experiment.slug}>
                  <span>{experiment.status}</span>

                  <h2>{experiment.name}</h2>

                  <p>{experiment.description}</p>

                  {experimentRuns.length > 0 && (
                    <div className="run-links">
                      <p className="run-count">
                        {experimentRuns.length}{" "}
                        {experimentRuns.length === 1 ? "run" : "runs"} recorded
                      </p>

                      {experimentRuns.map((run) => (
                        <Link
                          key={run.run_id}
                          href={`/runs/${run.run_id}`}
                          className="run-link"
                        >
                          <span>{run.test}</span>
                          <strong>{run.status}</strong>
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      <footer>
        Experiments are replaceable. Infrastructure is reusable. Results are
        reproducible.
      </footer>
    </main>
  );
}