import React from "react";

import Icon from "../components/Icon";

const card = props => {
  const link = (
    <a className="card--link sub-title flex row content-flex-start" href={props.link}>
      <Icon
        icon={props.icon}
        transform="translate(0, 0) scale(0.4)"
        size="24"
        color="#222831"
      />
      <span>
        {props.linkLabel}
      </span>
    </a>
  );

  return (
    <div className="card">
      <div className="card--image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card--title title">{props.title}</div>
      <div className="card--title text">{props.description}</div>
      <div className="flex row content-flex-start">
        {link}
        {props.hasSecondLink ? link : null}
      </div>
    </div>
  );
};

export default card;
