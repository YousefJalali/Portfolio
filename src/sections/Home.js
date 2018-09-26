import React from "react";

import { ICONS } from "../assets/ICONS";
import Icon from "../components/Icon";
import FloatButton from "../components/FloatButton";
import UnderLine from "../components/UnderLine";

const home = () => (
  <section className="home section flex items-flex-start">
    <FloatButton />
    <div className="flex items-flex-start">
      <h1 className="header">
        <div className="header--extra">Yousef Jalali</div>
        <UnderLine width="5rem" marginBottom="3rem" />
        <div className="sub-title big">Front-end/UI Developer</div>
      </h1>
      <a className="button button--text flex row">
        <span>View my work</span>
        <div className="icon">
          <Icon
            icon={ICONS.arrow}
            transform="translate(3, 3)"
            size="24"
            color="#eeeeee"
          />
        </div>
      </a>
    </div>
  </section>
);

export default home;
