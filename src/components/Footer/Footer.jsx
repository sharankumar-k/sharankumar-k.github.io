import navLinks from "../../data/navLinks.js";
import socialLinks from "../../data/socialLinks.js";
import "./Footer.css";

// Footer only shows a subset of the nav links, matching the original markup.
const footerLinks = navLinks.filter((link) => link.href !== "#leetcode" && link.href !== "#achievements");

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="logo">
            Sharan<span>.</span>
          </h2>
          <p>Building modern web applications with Java, Spring Boot, React and PostgreSQL.</p>
        </div>

        <div className="footer-nav">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-social">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container border-top">
          <span>© 2026 Sharan Kumar K</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
