function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Application Support Engineer</h3>
            <p className="experience-company">Confidential Banking Client · Chennai, India</p>
          </div>
          <time className="experience-date" dateTime="2023-01">
            Jan 2023 – Present
          </time>
        </div>

        <ul>
          <li>
            Maintained production stability for core banking systems running on
            Linux and WebLogic, supporting operations across multiple business units.
          </li>
          <li>
            Monitored and resolved IBM MQ queue depth alerts to ensure
            zero message loss in payment and transaction pipelines.
          </li>
          <li>
            Reduced manual operational effort by automating log rotation,
            health checks, and deployment steps using Bash shell scripts.
          </li>
          <li>
            Acted as L2 support during P1/P2 incidents — diagnosed root causes,
            coordinated with development teams, and documented resolution steps
            to prevent recurrence.
          </li>
          <li>
            Participated in change management processes, reviewing deployment
            plans and validating rollback procedures before production releases.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
