export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

      <h2>
        Let's build something
        <br />
        <span>meaningful.</span>
      </h2>

      <a
        href="mailto:amd769839@gmail.com"
        className="email"
      >
        devadnaan1611@gmail.com ↗
      </a>

      <div className="social-links">
        <a
          href="https://github.com/Md-Adnaan23"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/md-adnaan/" onClick={(e) => e.preventDefault()}>
          LinkedIn
        </a>
      </div>
    </section>
  );
}