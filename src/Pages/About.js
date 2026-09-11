import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 offset-lg-1">
            <div className="aboutcontent">
              <h2>About Me</h2>

              <p>
                I'm a Software Engineer focused on backend development, with a strong
                interest in Java, system design, APIs, and scalable applications.
              </p>

              <p>
                I enjoy breaking down complex problems, designing clean solutions, and
                building reliable systems that are easy to maintain and improve.
              </p>

              <p>
                I'm also comfortable working across the stack when needed, using
                JavaScript, React, databases, and modern development tools.
              </p>

              <div className="aboutskills">
                <p>
                  <strong>Focus:</strong> Java Backend, REST APIs, GraphQL APIs System Design,
                  Microservices
                </p>

                <p>
                  <strong>Also Work With:</strong> JavaScript, NodeJs React, SQL, MongoDB
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
