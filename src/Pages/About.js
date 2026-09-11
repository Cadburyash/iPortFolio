import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                I am a Backend Developer specializing in robust software
                architectures, distributed systems, and scalable data
                engineering pipelines using Java and JavaScript. Leveraging a
                strong foundation in Data Structures &amp; Algorithms (DSA) and
                System Design (HLD/LLD), I build high-availability internal
                systems, optimize relational infrastructures, and engineer
                high-throughput data processing layers.
              </p>
              <h3>System Design &amp; Architecture (HLD/LLD)</h3>
              <p>
                I translate complex product requirements into clean, modular
                low-level designs using OOP, SOLID principles, and design
                patterns, and design scalable high-level architectures featuring
                resilient REST APIs and asynchronous microservices.
              </p>
              <h3>Data &amp; SQL Engineering</h3>
              <p>
                I have experience in database schema design, indexing
                strategies, and writing high-performance SQL queries to manage
                and process large-scale transaction logs, eliminate system
                bottlenecks, and ensure strict data persistence.
              </p>
              <h3>Advanced Software Engineering &amp; Automation</h3>
              <p>
                I focus on modern software practices, including optimizing
                runtime complexities, designing secure web engines such as
                HIPAA-compliant dashboards via Angular, and engineering
                automated Java utility frameworks to streamline operational
                efficiency.
              </p>
              <p>
                Driven by a passion for solving complex problems, I excel in
                high-scale environments where performance tuning, systems
                reliability, and clean execution are paramount.
              </p>
              <div className="aboutskills">
                <p>
                  <strong>Core Languages:</strong> Java (Advanced), JavaScript
                  (ES6+), TypeScript
                </p>
                <p>
                  <strong>Engineering Pillars:</strong> Data Structures &amp;
                  Algorithms (DSA), Low-Level Design (LLD), High-Level Design
                  (HLD)
                </p>
                <p>
                  <strong>Data &amp; Databases:</strong> SQL, Relational Databases
                  (RDBMS), Data Engineering Pipelines
                </p>
                <p>
                  <strong>Systems &amp; Integration:</strong> REST APIs,
                  Microservices, Async Systems, System Performance Tuning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
