import React from "react";
import "./Work.css";
import work from "../Data/Work.json";

const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 offset-lg-1">
            <h2 data-aos="fade-down">Work Experience</h2>

            <div className="work-container">
              {work.map((item, i) => (
                <div
                  className="workblock"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="work-year">
                    <h5>{item.year}</h5>
                  </div>

                  <div className="work-details">
                    <h3>{item.companyname}</h3>

                    <h5 className="position">
                      {item.position}
                    </h5>

                    <p className="location">
                      {item.location}
                    </p>

                    <ul className="workhighlights">
                      {item.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;