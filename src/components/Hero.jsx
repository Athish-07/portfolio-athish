function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-content">
        <p className="hero-location">📍 Chennai, India</p>

        <h1>
          Hi, I&apos;m <span className="accent">Haris Athish</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          2+ years building and supporting production-grade banking systems.
          I write clean backend services with Spring Boot and build
          interfaces with React.
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

      <div className="hero-image">
        <img
          src="/profile.jpg.jpeg"
          alt="Haris Athish — Java Full Stack Developer"
          loading="lazy"
        />
      </div>

    </section>
  );
}

export default Hero;
