import "./ProjectCard.css";

function ProjectCard({ project, isAlt }) {
  const { image, imageAlt, type, title, description, techStack, liveDemo, github } = project;

  return (
    <div className={`project-card glass-card ${isAlt ? "alt-layout" : ""}`}>
      <div className="project-visual">
        <div className="project-img-wrapper">
          <img src={image} alt={imageAlt} />
        </div>
      </div>

      <div className="project-info">
        <span className="project-type">{type}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={liveDemo} className="link-btn primary-link">
            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="link-btn secondary-link">
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
