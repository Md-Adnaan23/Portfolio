import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">02 — SKILLS</p>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}