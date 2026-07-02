import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import projects from "../../data/projects.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./Projects.css";

function Projects() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            A selection of projects showcasing my backend, frontend, and full-stack development skills.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isAlt={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
