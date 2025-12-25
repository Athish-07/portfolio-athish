import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


 

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
        <footer className="footer">
                <p>© {new Date().getFullYear()} Haris Athish</p>
        </footer>

    </div>

    
  );
}

export default App;
