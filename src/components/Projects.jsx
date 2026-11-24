import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-header">
        <p className="section-label">03 — PROJECTS</p>

        <p>
          Selected work, experiments, and collaborative builds.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.status}</span>
            </div>

            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}