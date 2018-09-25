import React, { Component } from "react";

import Icon from "./Icon";

class FloatButtonItem extends Component {
  state = {
    isHover: false
  };

  onHoverHandler = () => {
    console.log("hover");
    this.setState(prevState => {
      return {
        isHover: !prevState.isHover
      };
    });
  };

  render() {
    const description = ["description", "button--text", "flex"];
    if (this.state.isHover) {
      description.push("open");
    } else {
      description.push("closed");
    }
    return (
      <div
        className="float-button-item"
        onMouseEnter={this.onHoverHandler}
        onMouseLeave={this.onHoverHandler}
      >
        <Icon
          icon={this.props.icon}
          size="40"
          color="#222831"
          transform="translate(5, 5.625), scale(1.5)"
        />
        <div className={description.join(" ")}>{this.props.itemName}</div>
      </div>
    );
  }
}

export default FloatButtonItem;
