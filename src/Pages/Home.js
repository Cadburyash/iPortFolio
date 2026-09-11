import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg.png";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">

          {/* Profile Image */}
          <div className="col-12 col-lg-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                data-aos-delay="200"
                alt="Asish Jena"
                className="img-fluid"
              />

              <div className="socialmedia">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/asish-jena222522/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="LinkedIn"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/cadburyash"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="GitHub"
                    data-aos="fade-right"
                    data-aos-delay="1100"
                  />
                </a>

                {/* Email */}
                <a href="mailto:ashishdestination@gmail.com">
                  <img
                    src={MailIcon}
                    alt="Email"
                    data-aos="fade-right"
                    data-aos-delay="1200"
                  />
                </a>
              </div>

              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-5 offset-lg-2">
            <div  className="rightcontent"  data-aos="fade-right"  data-aos-delay="500">
              <h1>Asish Jena</h1>

              <h2>Software Engineer</h2>

              <p className="intro">
                I build scalable backend systems and REST APIs using Java,
                Spring Boot, databases, and modern system design principles.
              </p>

              <br />

              <div className="row">
                <div className="col-6 col-sm-4">
                  <a
                    href="https://drive.google.com/file/d/1x8q9QsWDbHXpE60Ll7pmYdI2AlO-JUR7/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>

                <div className="col-6 col-sm-5">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;