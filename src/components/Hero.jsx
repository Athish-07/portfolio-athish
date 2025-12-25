function Hero() {
  return (
    <section className="hero">

            <div className="hero-content">
                <h1>
                Hi, I’m <span className="accent">Haris Athish</span>
                </h1>

                <h2>Java Backend & Full-Stack Developer</h2>

                <p>
                Building reliable backend systems and modern web applications.
                </p>

                <div className="hero-actions">
                <a href="#projects" className="btn primary">
                    View Projects
                </a>
                <a
                    href="https://github.com/Athish-07"
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                >
                    GitHub
                </a>
               <a
                href="/resume/Athish_haris_Resume.pdf"
                download
                className="btn secondary resume-btn"
                >
                <span>Resume &nbsp;⤓</span>
                </a>


                </div>
            </div>
            </section>
  );
}

export default Hero;
