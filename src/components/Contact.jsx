function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <p>
        Open to full-stack and backend Java roles. Feel free to reach out
        for opportunities, collaborations, or technical discussions.
      </p>

      <div className="contact-links">
        <a href="mailto:athishharis02@gmail.com" className="contact-link">
          <span className="contact-icon">✉</span> Email
        </a>

        <a
          href="https://www.linkedin.com/in/haris-athish-17505523b"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span className="contact-icon">in</span> LinkedIn
        </a>

        <a
          href="https://github.com/Athish-07"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span className="contact-icon">⌥</span> GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
