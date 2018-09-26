import React, { Component } from "react";

import "./styles/main.scss";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";

class App extends Component {
  render() {
    return (
      <div className="App flex">
        <Home />
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
