import React from "react";

import Icon from "../components/Icon";

const card = props => {
  let linkIcon = null;
  let linkImg = null;
  let linkImg2 = null;
  if (props.hasIcon) {
    linkIcon = (
      <a
        className="card--link sub-title flex row content-flex-start"
        href={props.link}
      >
        <Icon
          icon={props.icon}
          transform="translate(0, 0) scale(0.4)"
          size="24"
          color="#222831"
        />
        <span>{props.linkLabel}</span>
      </a>
    );
  }
  if (props.hasImage) {
    linkImg = (
      <a
        className="card--linkImg flex content-flex-start row"
        href={props.link}
      >
        <img src={props.linkImg} alt="Click here" />
      </a>
    );
  }
  if (props.hasSecondImg) {
    linkImg2 = (
      <a
        className="card--linkImg flex content-flex-start row"
        href={props.link2}
      >
        <img src={props.linkImg2} alt="Click here" />
      </a>
    );
  }

  return (
    <div className="card">
      <div className="card--image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card--title title">{props.title}</div>
      <div className="card--title text">{props.description}</div>
      <div className="card--link-container flex row content-flex-start">
        {linkIcon}
        {linkImg}
        {linkImg2}
      </div>
    </div>
  );
};

export default card;
