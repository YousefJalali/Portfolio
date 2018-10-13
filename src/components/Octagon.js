import React from "react";

import Icon from "./Icon";
import Rotate from 'react-reveal/Rotate';

const octagon = props => {
  let hasImg = null;
  let hasIcon = null;
  if (props.hasImg) {
    hasImg = <img src={props.src} alt={props.alt} />;
  }
  if (props.hasIcon) {
    hasIcon = <Icon icon={props.icon} size={props.size} color={props.color} />;
  }
  return (
    <Rotate>
      <div className="octagon flex">
        {hasIcon}
        {hasImg}
      </div>
    </Rotate>
  );
};

export default octagon;
