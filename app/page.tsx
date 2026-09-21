export default function Home() {
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
          A live, reusable environment for bringing external technologies into
          controlled experiments, testing them under real conditions, and
          preserving what we learn.
        </p>

        <div className="status">
          <span className="status-dot" />
          <span>Infrastructure is being built</span>
        </div>
      </section>

      <section className="section">
        <p className="section-label">WHAT HAPPENS HERE</p>

        <div className="grid">
          <article>
            <span>01</span>
            <h2>Bring it in</h2>
            <p>
              An external technology becomes an experiment with a defined
              purpose and boundary.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>Test it</h2>
            <p>
              We run it under real conditions instead of relying on claims,
              demos, or documentation alone.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>Keep the evidence</h2>
            <p>
              Results, observations, failures, and useful discoveries stay
              attached to the experiment.
            </p>
          </article>
        </div>
      </section>

      <footer>
        Experiments are replaceable. Infrastructure is reusable. Results are
        reproducible.
      </footer>
    </main>
  );
}