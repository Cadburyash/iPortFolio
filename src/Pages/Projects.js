import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Custom Node.js Backend Framework",
    description:
      "Built a lightweight backend framework from scratch using Node.js native HTTP modules to understand the fundamentals behind frameworks like Express.",
    highlights: [
      "Custom routing and URL parameter handling",
      "Asynchronous middleware pipeline using next()",
      "Controller-based request handling",
      "Custom JSON request body parsing",
    ],
    tech: "Node.js • JavaScript • Native HTTP Module",
    github:
      "https://github.com/Cadburyash/Node.js-Backend-Framework-from-Scratch",
  },
  {
    id: 2,
    title: "Real-Time Multithreaded Chat Application",
    description:
      "Built a TCP/IP client-server application for real-time communication between multiple clients over a local network.",
    highlights: [
      "Multithreaded client-server architecture",
      "ExecutorService thread pool for concurrent connections",
      "Thread-safe message persistence",
      "SQLite-based chat history",
    ],
    tech: "Java • TCP/IP Sockets • SQLite • JavaFX",
    github: "https://github.com/Cadburyash/Chat-Server",
  },
];

const Projects = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 offset-lg-1">
            <h2>Projects</h2>

            <div className="projects-container">
              {projects.map((project) => (
                <div
                  className="project-card"
                  key={project.id}
                  data-aos="zoom-in"
                >
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <h5>Key Highlights</h5>

                  <ul>
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>

                  <p className="project-tech">
                    <strong>Tech:</strong> {project.tech}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;