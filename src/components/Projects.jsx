function Projects() {
  return (
    <section className="projects" id="projects">
        <h3>Projects</h3>

        <div className="projects-grid">
          <div className="project-card">
            <h4>Airline Management System</h4>
            <p>
              A role-based airline booking system with admin and user modules.
              Implemented flight management, booking flow, and session-based
              authentication using a clean MVC structure.
            </p>
            <span className="tech">
              Java • Servlets • JSP • HTML • CSS
            </span>
          </div>

          <div className="project-card">
            <h4>Spring Boot REST API</h4>
            <p>
              Developed RESTful APIs with layered architecture, request
              validation, and global exception handling. APIs were tested using
              Postman and designed following REST best practices.
            </p>
            <span className="tech">
              Java • Spring Boot • JPA • MySQL
            </span>
          </div>

          <div className="project-card">
            <h4>End-to-End Encrypted Chat Application</h4>
            <p>
              Designed a secure multi-user chat application using hybrid
              encryption. Implemented RSA for key exchange and AES for encrypted
              message transfer.
            </p>
            <span className="tech">
              Java • JavaFX • Sockets • RSA • AES
            </span>
          </div>
        </div>
    </section>
  );
}

export default Projects;
