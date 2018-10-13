import React from "react";
// import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const underLine = props => {
  const style = {
    width: props.width,
    marginBottom: props.marginBottom
  };
  return <Bounce top><div className="underLine flex" style={style} /></Bounce>;
};

export default underLine;
