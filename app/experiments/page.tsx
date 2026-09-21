import { getExperiments } from "../../core/registry";

export default function ExperimentsPage() {
  const experiments = getExperiments();

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
            {experiments.map((experiment) => (
              <article key={experiment.slug}>
                <span>{experiment.status}</span>
                <h2>{experiment.name}</h2>
                <p>{experiment.description}</p>
              </article>
            ))}
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