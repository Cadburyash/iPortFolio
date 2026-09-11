import "./App.css";
import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/iPortFolio" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;