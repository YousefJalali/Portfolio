import React, { Component } from "react";

import "./styles/main.scss";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";
import Experiments from "./sections/Experiments";
import Contact from "./sections/Contact";

class App extends Component {
  render() {
    return (
      <div className="App flex">
        <Home />
        <About />
        <Work />
        <Experiments />
        <Contact />
      </div>
    );
  }
}

export default App;
