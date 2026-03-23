function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications & Learning</h2>

      <div className="cert-grid">
        <div className="cert-card">
          <h3>Spring Boot & REST APIs</h3>
          <p className="cert-issuer">Udemy · 2024</p>
          <p>
            Layered architecture, REST design principles, Bean Validation,
            global exception handling, and Spring Data JPA.
          </p>
        </div>

        <div className="cert-card">
          <h3>Core Java Programming</h3>
          <p className="cert-issuer">Udemy · 2023</p>
          <p>
            OOP principles, Java Collections Framework, multithreading,
            exception handling, and Java I/O fundamentals.
          </p>
        </div>

        <div className="cert-card">
          <h3>Linux for Developers</h3>
          <p className="cert-issuer">Coursera · 2023</p>
          <p>
            Process management, file system structure, user permissions,
            networking basics, and shell scripting essentials.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
