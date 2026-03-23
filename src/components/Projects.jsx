function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>E-Commerce Microservices Platform</h3>
          <p>
            Production-style e-commerce backend built as a distributed
            microservices system. Comprises 5 independent Spring Boot
            services — Auth, Product, Order, Inventory, and API Gateway —
            each with its own MySQL database. Services register with a
            Eureka Service Registry and communicate via OpenFeign clients.
            The API Gateway routes all traffic on port 8080. JWT-based
            authentication is handled centrally by the Auth Service;
            other services validate tokens by calling
            <code> /auth/validate</code> before processing requests.
            Order placement atomically reduces inventory stock via a
            Feign call, rejecting orders if stock is insufficient.
          </p>
          <span className="tech">Java · Spring Boot · Microservices · JWT · Eureka · OpenFeign · MySQL · API Gateway</span>
          <div className="project-links">
            <a href="https://github.com/Athish-07" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Real-Time Chat App v2.0</h3>
          <p>
            Upgraded chat application running on a Spring Boot backend
            with WebSocket support via STOMP protocol. Clients connect
            over a persistent WebSocket connection — messages are broadcast
            instantly without polling. Built with Spring&apos;s
            MessageBroker and SimpMessagingTemplate for pub/sub style
            message routing.
          </p>
          <span className="tech">Java · Spring Boot · WebSocket · STOMP · Lombok</span>
          <div className="project-links">
            <a href="https://github.com/Athish-07/ChatAppv2.0" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Airline Management System</h3>
          <p>
            Full-stack web application with separate Admin and User roles.
            Admins manage flights and view all bookings; users register,
            log in, and book flights. Built with a clean MVC structure —
            Servlets handle routing and business logic, JSP handles
            rendering, and MySQL stores data. Session-based authentication
            prevents unauthorised access across both roles.
          </p>
          <span className="tech">Java · Servlets · JSP · MySQL · HTML/CSS</span>
          <div className="project-links">
            <a href="https://github.com/Athish-07/MyProjects" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
