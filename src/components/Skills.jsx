function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Java (Core + OOP)</li>
            <li>Spring Boot</li>
            <li>REST API Design</li>
            <li>JDBC / JPA</li>
            <li>Multithreading</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 / CSS3</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>PL/SQL</li>
            <li>MongoDB (basic)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Infrastructure & Tools</h3>
          <ul>
            <li>Linux (RHEL / Ubuntu)</li>
            <li>WebLogic App Server</li>
            <li>IBM MQ</li>
            <li>Shell Scripting (Bash)</li>
            <li>Git / GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
