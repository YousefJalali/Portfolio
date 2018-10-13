import React from "react";

import Octagon from "../components/Octagon";

const experiment = props => {
  return (
    <div className="experiment flex content-flex-end">
      <div className="experiment--img-container">
        {/* <img src={props.img} alt={props.alt} /> */}
        <Octagon img="true" src={props.src} alt={props.alt} />
      </div>
      
      <h3 className="sub-title">{props.title}</h3>
    </div>
  );
};

export default experiment;
