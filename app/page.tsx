import Link from "next/link";

import { getExperiments } from "../core/registry";
import { getRuns } from "../core/results/reader";

export default function Home() {
  const experiments = getExperiments();
  const runs = getRuns();

  const activeExperiments = experiments.filter(
    (experiment) => experiment.status === "active",
  );

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">JAYJAYTGG / TESTING GROUND</p>

        <h1>
          Test interesting
          <br />
          things properly.
        </h1>

        <p className="intro">
          A live environment for bringing external technologies into
          controlled experiments, testing them under real conditions, and
          preserving what we learn.
        </p>

        <div className="status">
          <span className="status-dot" />
          <span>
            Live · {activeExperiments.length} active{" "}
            {activeExperiments.length === 1
              ? "experiment"
              : "experiments"}{" "}
            · {runs.length} recorded{" "}
            {runs.length === 1 ? "run" : "runs"}
          </span>
        </div>

        <div className="hero-actions">
          <Link href="/experiments" className="button">
            View experiments
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="section-label">WHAT THIS IS</p>

        <div className="statement">
          <p>
            Testing Ground is infrastructure for testing things that are
            interesting enough to deserve more than a README.
          </p>

          <p>
            An external technology comes in as an experiment. We define what
            we want to find out, run it under controlled conditions, preserve
            the evidence, and keep the useful discoveries.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="section-label">HOW IT WORKS</p>

        <div className="grid">
          <article>
            <span>01</span>
            <h2>Bring it in</h2>
            <p>
              Turn an external technology into a defined experiment with a
              clear question, boundary, and revision.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>Test it</h2>
            <p>
              Run the smallest real execution capable of answering the
              question. Claims are not evidence.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>Keep it</h2>
            <p>
              Preserve the run, environment, inputs, outputs, failures, and
              observations so the result remains inspectable.
            </p>
          </article>
        </div>
      </section>

      {experiments.length > 0 && (
        <section className="section">
          <p className="section-label">CURRENT EXPERIMENTS</p>

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

                  <div className="run-links">
                    <p className="run-count">
                      {experimentRuns.length}{" "}
                      {experimentRuns.length === 1 ? "run" : "runs"} recorded
                    </p>

                    {experimentRuns.length > 0 ? (
                      experimentRuns.slice(0, 3).map((run) => (
                        <Link
                          key={run.run_id}
                          href={`/runs/${run.run_id}`}
                          className="run-link"
                        >
                          <span>{run.test}</span>
                          <strong>{run.status}</strong>
                        </Link>
                      ))
                    ) : (
                      <p className="no-runs">
                        No execution evidence recorded yet.
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="section-action">
            <Link href="/experiments" className="text-link">
              Open experiment registry →
            </Link>
          </div>
        </section>
      )}

      <section className="section">
        <p className="section-label">THE RULE</p>

        <div className="statement statement-large">
          <p>
            Experiments are replaceable.
            <br />
            Infrastructure is reusable.
            <br />
            Results are reproducible.
          </p>
        </div>
      </section>

      <footer>
        <span>TESTING GROUND / JAYJAYTGG</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}