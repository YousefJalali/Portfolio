import React, { Component } from "react";

import Icon from "./Icon";
import { ICONS } from "../assets/ICONS";
import FloatButtonItem from "./FloatButtonItem";

class FloatButton extends Component {
  state = {
    isMenuClicked: false,
    menu: [
      { label: "home", icon: "ICONS.home" },
      { label: "work", icon: "ICONS.work" },
      { label: "skills", icon: "ICONS.skills" },
      { label: "contact", icon: "ICONS.contact" }
    ]
  };

  clickOnMenuHandler = () => {
    this.setState(prevState => {
      return {
        isMenuClicked: !prevState.isMenuClicked
      };
    });
  };

  render() {
    const menuStatus = ["menu", "flex", "content-space-evenly"];
    if (this.state.isMenuClicked) {
      menuStatus.push("menu open");
    } else {
      menuStatus.push("menu closed");
    }

    const items = this.state.menu.map(item => {
      let itemIcon;
      switch (item.label) {
        case "home":
          itemIcon = ICONS.home;
          break;
        case "work":
          itemIcon = ICONS.work;
          break;
        case "skills":
          itemIcon = ICONS.skills;
          break;
        case "contact":
          itemIcon = ICONS.contact;
          break;
        default:
          itemIcon = null;
      }
      return (
        <FloatButtonItem
          key={item.label}
          icon={itemIcon}
          itemName={item.label}
        />
      );
    });

    return (
      <div className="float-button" onClick={this.clickOnMenuHandler}>
        <div className="top-half" />
        <div className={menuStatus.join(" ")}>{items}</div>
        <div className="bottom-half" />
        <div className="float-button-icon">
          <Icon
            icon={ICONS.menu}
            size="40"
            color="#222831"
            transform="translate(3, 3)"
          />
        </div>
      </div>
    );
  }
}

export default FloatButton;
