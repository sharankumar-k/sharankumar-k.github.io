import Button from "../Button/Button.jsx";
import socialLinks from "../../data/socialLinks.js";
import typingWords from "../../data/typingWords.js";
import useTypingEffect from "../../hooks/useTypingEffect.js";
import profileImage from "../../assets/profile.png";
import "./Hero.css";
function Hero() {
  const typedText = useTypingEffect(typingWords);

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">Available for Opportunities</span>
          </div>

          <h3 className="hero-subtitle">Hello, I&apos;m</h3>

          <h1 className="hero-title">Sharan Kumar K</h1>

          <div className="hero-typing">
            <span>{typedText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-desc">
            Computer Science graduate passionate about building modern, responsive, and scalable web applications
            using Java, Spring Boot, React, and PostgreSQL.
          </p>

          <div className="hero-buttons">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="/resume/resume.pdf" target="_blank" variant="secondary">
              Download Resume
            </Button>
          </div>

          <div className="hero-social">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-glass"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img src={profileImage} alt="Sharan Kumar K" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
