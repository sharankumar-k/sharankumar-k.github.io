import SkillCard from "../SkillCard/SkillCard.jsx";
import skills from "../../data/skills.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Skills.css";

function Skills() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-desc">
            A combination of backend, frontend, databases, and development tools that I use to build modern web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} icon={skill.icon} title={skill.title} subtitle={skill.subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
