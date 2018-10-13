import React from "react";

import Wrapper from "../components/Wrapper";

const input = props => {
  let inputElement = null;
  let inputClass = ["input"];
  if (!props.isValid && props.isTouched) {
    inputClass.push("invalid");
  }
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          className={inputClass.join(" ")}
          {...props.inputConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClass.join(" ")}
          {...props.inputConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="input"
          {...props.inputConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return <Wrapper>{inputElement}</Wrapper>;
};

export default input;
