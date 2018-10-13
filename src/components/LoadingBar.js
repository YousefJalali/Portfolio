import React from "react";
import Reveal from "react-reveal/Reveal";

const loadingBar = props => {
  const percentBar = (props.percent * 75) / 100;

  return (
    <div className="loading-bar">
      <div className="label flex sub-title">{props.label}</div>
      <Reveal effect="progress-bar-animation">
        <div className="percent" style={{ width: percentBar + "%" }} />
      </Reveal>
      <div className="percent-number flex items-flex-end text">
        {props.percent}%
      </div>
    </div>
  );
};

export default loadingBar;
