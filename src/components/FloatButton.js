import React, { Component } from "react";

import { ICONS } from "../assets/ICONS";
import FloatButtonItem from "./FloatButtonItem";

class FloatButton extends Component {
  state = {
    isMenuClicked: false,
    isMenuOpen: false,
    menu: [
      { label: "skills", icon: "ICONS.skills", id: "skills" },
      { label: "work", icon: "ICONS.work", id: "work" },
      { label: "experiments", icon: "ICONS.experiments", id: "experiments" },
      { label: "contact", icon: "ICONS.contact", id: "contact" }
    ]
  };

  clickOnMenuHandler = () => {
    this.setState(prevState => {
      return {
        isMenuClicked: !prevState.isMenuClicked
      };
    });
    setTimeout(
      () =>
        this.setState(prevState => {
          return { isMenuOpen: !prevState.isMenuOpen };
        }),
      162
    );
  };

  scrollHandler = id => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  render() {
    //bar effects
    const topBar = ["float-button--bar"];
    const middleBar = ["float-button--bar"];
    const bottomBar = ["float-button--bar"];

    const menuStatus = ["menu", "flex", "content-space-evenly"];
    if (this.state.isMenuClicked) {
      menuStatus.push("open");
      topBar.push("top-bar-transform");
      middleBar.push("middle-bar-transform");
      bottomBar.push("bottom-bar-transform ");
    } else {
      menuStatus.push("closed");
    }

    //overflow
    if (this.state.isMenuOpen) {
      menuStatus.push("menuOpenOverflow");
    } else {
      menuStatus.push("menuClosedOverflow");
    }

    const items = this.state.menu.map(item => {
      const id = item.id;
      let itemIcon;
      switch (item.label) {
        case "experiments":
          itemIcon = ICONS.experiments;
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
          onClick={() => this.scrollHandler(id)}
        />
      );
    });

    return (
      <div className="float-button" >
        <div>
          <div className="float-button-icon" onClick={this.clickOnMenuHandler}>
            <div className={topBar.join(" ")} />
            <div className={middleBar.join(" ")} />
            <div className={bottomBar.join(" ")} />
          </div>
          <div className="top-half" />
          <div className={menuStatus.join(" ")}>{items}</div>
          <div className="bottom-half" />
        </div>
      </div>
    );
  }
}

export default FloatButton;
