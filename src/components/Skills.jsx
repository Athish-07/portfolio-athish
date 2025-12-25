function Skills() {
  return (
    <section className="skills" id="skills">
        <h3>Skills</h3>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Backend</h4>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>JDBC</li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Frontend</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Databases</h4>
            <ul>
              <li>MySQL</li>
              <li>PL/SQL</li>
              <li>MongoDB (basic)</li>
            </ul>
          </div>

          <div className="skill-card">
            <h4>Tools & OS</h4>
            <ul>
              <li>Linux</li>
              <li>Git</li>
              <li>Postman</li>
              <li>Shell Scripting</li>
            </ul>
          </div>
        </div>
    </section>
  );
}

export default Skills;
