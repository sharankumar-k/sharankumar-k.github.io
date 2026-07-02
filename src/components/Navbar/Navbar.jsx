import { useState } from "react";
import navLinks from "../../data/navLinks.js";
import useNavbarScroll from "../../hooks/useNavbarScroll.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

function Navbar() {
  const isScrolled = useNavbarScroll(30);
  const activeId = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo">
        Sharan<span>.</span>
      </a>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeId === link.href.replace("#", "") ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="hire-btn">
        Hire Me
      </a>

      <div className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;
