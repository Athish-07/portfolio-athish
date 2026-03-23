import { useState } from "react";
import useActiveSection from "../hooks/UseActiveSection";

function Header({ theme, toggleTheme }) {
  const isLight = theme === "light";
  const active = useActiveSection([
    "about",
    "skills",
    "projects",
    "certifications",
    "experience",
    "contact",
  ]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div>
        <span className="name">Haris Athish</span>
      </div>

      {/* Desktop nav */}
      <nav className="nav">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className={active === href.slice(1) ? "active" : ""}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-right">
        {/* Theme toggle */}
        <button
          type="button"
          className={`theme-switch ${isLight ? "light" : ""}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <span className="switch-thumb">{isLight ? "🔆" : "🌙"}</span>
        </button>

        {/* Hamburger - mobile only */}
        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`ham-icon ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={active === href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
