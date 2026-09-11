import React, { useState } from "react";
import "./Nav.css";

import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Projects from "../assets/img/projects.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";

import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <div id="navigation">
        <ul>
          <Link to="/">
            <li data-aos="zoom-in">
              <img src={Home} alt="Home" />
            </li>
          </Link>

          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="About" />
            </li>
          </Link>

          <Link to="/services">
            <li data-aos="zoom-in">
              <img src={Services} alt="What I Do" />
            </li>
          </Link>

          <Link to="/work">
            <li data-aos="zoom-in">
              <img src={Work} alt="Work" />
            </li>
          </Link>

          <Link to="/projects">
            <li data-aos="zoom-in">
              <img src={Projects} alt="Projects" />
            </li>
          </Link>

          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="Contact" />
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div id="navigation-mob">
        <h1 data-aos="fade-in">
          <Link to="/" onClick={closeMenu}>
            Asish Jena
          </Link>
        </h1>

        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>

        {visible && (
          <ul
            className="list-unstyled"
            data-aos="slide-down"
            data-aos-duration="700"
          >
            <Link to="/" onClick={closeMenu}>
              <li>Home</li>
            </Link>

            <Link to="/about" onClick={closeMenu}>
              <li>About</li>
            </Link>

            <Link to="/services" onClick={closeMenu}>
              <li>What I Do</li>
            </Link>

            <Link to="/work" onClick={closeMenu}>
              <li>Work</li>
            </Link>

            <Link to="/projects" onClick={closeMenu}>
              <li>Projects</li>
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              <li>Contact</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;