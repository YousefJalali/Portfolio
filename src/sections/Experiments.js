import React from "react";

import Header from "../components/Header";
import Flip from 'react-reveal/Flip';
// import Experiment from "../components/Experiment";
// import Image from "../assets/card-image.jpg";

const experiments = props => {
  return (
    <section
      className="experiments section flex content-flex-start"
      id="experiments"
    >
      <Header title="Experiments"/>
      <h2 className="title"><Flip cascade>
      Web is fun
        </Flip></h2>
      {/* <div className="experiments-container ">
        <Experiment src={Image} alt="spinner" title="spinner"/>
        <Experiment />
        <Experiment />
        <Experiment />
      </div> */}
    </section>
  );
};

export default experiments;
