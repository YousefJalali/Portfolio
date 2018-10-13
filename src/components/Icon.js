import React from "react";

const icon = props => {
  const icon = props.icon;
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    path: {
      fill: props.color
    }
  };
  const path = {
    d: icon.d,
    transform: icon.transform
  };
  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 24 24"
    >
      <path style={styles.path} transform={path.transform} d={path.d} />
    </svg>
  );
};

export default icon;
