export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          COMPUTER SCIENCE · SOFTWARE · AI
        </p>

        <h1>
          Building software
          <br />
          <span>with purpose.</span>
        </h1>

        <p className="hero-description">
          Computer Science developer focused on building practical
          web applications, solving problems, and exploring
          AI-powered software solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects ↗
          </a>

          <a
            href="https://github.com/Md-Adnaan23"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-card">
        <p>Currently Building</p>
        <h2>EKA</h2>
        <span>Enterprise Knowledge Assistant</span>

        <div className="status">
          <span></span>

          React · RAG-Powered Document Search.
        </div>
      </div>
    </section>
  );
}