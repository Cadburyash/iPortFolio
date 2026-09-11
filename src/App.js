import "./App.css";
import "./common/Commoncss.css";

import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import Nav from "./common/Nav";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter basename="/iPortFolio">
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/work" component={Work} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;