import aboutCards from "../../data/aboutCards.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import "./About.css";

function About() {
  const { ref, className } = useScrollReveal();

  return (
    <section className={className} id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="section-desc">
            Passionate about building scalable web applications and continuously learning modern technologies.
          </p>
        </div>

        <div className="about-container">
          <div className="about-left">
            <h3>Computer Science Graduate</h3>

            <p>
              I&apos;m Sharan Kumar K, a Computer Science graduate with a strong interest in backend development and
              full-stack web development. I enjoy solving problems and building modern, responsive web applications
              using Java, Spring Boot, React, and PostgreSQL.
            </p>

            <p>
              My goal is to contribute to impactful software projects, continuously improve my technical skills, and
              build high-quality applications that provide real value.
            </p>
          </div>

          <div className="about-right">
            {aboutCards.map((card) => (
              <div className="about-card glass-card" key={card.id}>
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
