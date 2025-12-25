import useActiveSection from "../hooks/UseActiveSection";
function Header({ theme, toggleTheme }) {
  const isLight = theme === "light";
  const active = useActiveSection(["about", "projects", "contact"]);


  return (
        <header className="header">
        <div>
            <span className="name">Haris Athish</span>
        </div>

          <nav className="nav">
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </nav>

        <div className="header-right">
            <button
                type="button"
                className={`theme-switch ${isLight ? "light" : ""}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <span className="switch-thumb">
                {isLight ? "🔆" : "🌙"}
                </span>
            </button>
        </div>
    </header>
  );
}

export default Header;
