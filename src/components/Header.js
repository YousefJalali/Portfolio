import React from "react";

import UnderLine from "../components/UnderLine";
import Bounce from 'react-reveal/Bounce';

const header = props => (
  <div>
    <Bounce><h1 className="header">{props.title}</h1></Bounce>
    <UnderLine marginBottom="15rem" />
  </div>
);

export default header;
