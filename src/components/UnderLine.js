import React from "react";

const underLine = props => {
  const style = {
    width: props.width,
    marginBottom: props.marginBottom
  };
  return <div className="underLine flex" style={style} />;
};

export default underLine;
