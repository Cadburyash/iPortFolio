import React from "react";
import "./Services.css";
import services from "../Data/Services.json";

import backend from "../Data/Serviceimg/backend.png";
import api from "../Data/Serviceimg/api.png";
import systemDesign from "../Data/Serviceimg/system-design.png";
import database from "../Data/Serviceimg/database.png";
import microservice from "../Data/Serviceimg/microservice.png";
import security from "../Data/Serviceimg/security.png";

const serviceImages = {
  "backend.png": backend,
  "api.png": api,
  "system-design.png": systemDesign,
  "database.png": database,
  "microservice.png": microservice,
  "security.png": security
};

const Services = () => {
  return (
    <div id="services" data-aos="fade-in">
      <div className="container">
        <div className="row">

          <div className="col-12 col-lg-11 offset-lg-1">
            <h2 className="text-center">What I do</h2>
            <br />
          </div>

          <div className="col-12 col-lg-11 offset-lg-1">
            <div className="row">

              {services.map((item) => (
                <div className="col-12 col-lg-4" key={item.id}>
                  <div className="servicebox" data-aos="fade-zoom-in">

                    <img
                      src={serviceImages[item.img]}
                      alt={item.servicename}
                      className="img-fluid"
                    />

                    <h4>{item.servicename}</h4>

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

export default Services;