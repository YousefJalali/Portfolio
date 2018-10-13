import React from "react";

import { ICONS } from "../assets/ICONS";
import Icon from "../components/Icon";
import FloatButton from "../components/FloatButton";
import UnderLine from "../components/UnderLine";
import Slide from "react-reveal/Slide";

const home = () => {
  const scrollHandler = () => {
    document.getElementById("skills").scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="home flex items-flex-start" id="home">
      <FloatButton />
      <Slide left cascade>
        <div className="name flex items-flex-start">
          <h1 className="header">
            <div className="header--extra">Yousef Jalali</div>
            <UnderLine width="5rem" marginBottom="3rem" />
          </h1>
          <h2 className="sub-title big">Front-end/UI Developer</h2>
          <a className="button button--text flex row" onClick={scrollHandler}>
            <span>Learn More</span>
            <div className="icon">
              <Icon icon={ICONS.arrow} size="24" color="#eeeeee" />
            </div>
          </a>
        </div>
      </Slide>
    </section>
  );
};

export default home;
