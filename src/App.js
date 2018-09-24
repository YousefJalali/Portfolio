import React, { Component } from 'react';

import './styles/main.scss';
import Home from './sections/Home';
import About from './sections/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
