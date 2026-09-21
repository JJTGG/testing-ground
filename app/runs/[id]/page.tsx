import { notFound } from "next/navigation";

import { getRun } from "../../../core/results/reader";

type RunPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RunPage({
  params,
}: RunPageProps) {
  const { id } = await params;
  const run = getRun(id);

  if (!run) {
    notFound();
  }

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">
          TESTING GROUND / RUN
        </p>

        <h1>{run.experiment}</h1>

        <p className="intro">{run.test}</p>

        <div className="status">
          <span className="status-dot" />
          {run.status}
        </div>
      </section>

      <section className="section">
        <p className="section-label">RUN</p>

        <div className="detail-grid">
          <div className="detail-card">
            <span>Run ID</span>
            <strong>{run.run_id}</strong>
          </div>

          <div className="detail-card">
            <span>Revision</span>
            <strong className="mono">
              {run.revision}
            </strong>
          </div>

          <div className="detail-card">
            <span>Status</span>
            <strong>{run.status}</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">ENVIRONMENT</p>

        <div className="detail-grid">
          <div className="detail-card">
            <span>Execution</span>
            <strong>{run.environment.execution}</strong>
          </div>

          <div className="detail-card">
            <span>Database</span>
            <strong>{run.environment.database}</strong>
          </div>

          <div className="detail-card">
            <span>Database scope</span>
            <strong>
              {run.environment.database_scope}
            </strong>
          </div>

          <div className="detail-card">
            <span>LLM provider invoked</span>
            <strong>
              {run.environment.llm_provider_invoked
                ? "Yes"
                : "No"}
            </strong>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">DATASET</p>

        <div className="detail-grid">
          <div className="detail-card">
            <span>Type</span>
            <strong>{run.dataset.type}</strong>
          </div>

          <div className="detail-card">
            <span>Venue</span>
            <strong>{run.dataset.venue}</strong>
          </div>

          <div className="detail-card">
            <span>Symbol</span>
            <strong>{run.dataset.symbol}</strong>
          </div>

          <div className="detail-card">
            <span>Timeframe</span>
            <strong>{run.dataset.timeframe}</strong>
          </div>

          <div className="detail-card">
            <span>Bars</span>
            <strong>{run.dataset.bar_count}</strong>
          </div>

          <div className="detail-card">
            <span>Data epoch</span>
            <strong>{run.dataset.data_epoch}</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">CANDIDATE</p>

        <div className="detail-grid">
          <div className="detail-card">
            <span>Count</span>
            <strong>{run.candidate.count}</strong>
          </div>

          <div className="detail-card">
            <span>Outcome</span>
            <strong>{run.candidate.outcome}</strong>
          </div>

          <div className="detail-card">
            <span>Fitness</span>
            <strong>{run.candidate.fitness}</strong>
          </div>

          <div className="detail-card">
            <span>Overfitting risk</span>
            <strong>
              {run.candidate.overfitting_risk}
            </strong>
          </div>

          <div className="detail-card">
            <span>Mutation calls</span>
            <strong>{run.candidate.mutation_calls}</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">VERIFIED BOUNDARIES</p>

        <ul className="evidence-list">
          {run.verified_boundaries.map((boundary) => (
            <li key={boundary}>
              <span className="evidence-mark">✓</span>
              {boundary}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <p className="section-label">OBSERVATIONS</p>

        <div className="observation-list">
          {run.observations.map((observation) => (
            <article key={observation}>
              <p>{observation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-label">SOURCE ARTIFACT</p>

        <div className="detail-grid">
          <div className="detail-card">
            <span>Artifact</span>
            <strong>{run.source_artifact.name}</strong>
          </div>

          <div className="detail-card">
            <span>Workflow run</span>
            <strong>{run.source_artifact.workflow_run}</strong>
          </div>
        </div>
      </section>

      <footer>
        Evidence from an actual Testing Ground run.
      </footer>
    </main>
  );
}