import React, { Component } from "react";

import Header from '../components/Header';
import Card from "../components/Card";
import Image from "../assets/card-image.jpg";
import AppStore from "../assets/appStore.png";
import PlayStore from "../assets/playStore.png";
import { ICONS } from "../assets/ICONS";

import Zoom from "react-reveal/Zoom";

class Work extends Component {
  render() {
    return (
      <section className="work section flex content-flex-start" id="work">
        <Header title="Work"/>
        <Zoom>
          <div className="card--container flex row content-space-evenly items-flex-start">
            <Card
              image={Image}
              title="Native App"
              description="Is a challenge I made for myself to learn skills in iOS, Android, game and web development as well as design. (In Progress)"
              hasImage="true"
              linkImg={AppStore}
              link="www.google.com"
              hasSecondImg="true"
              linkImg2={PlayStore}
              link2="www.apple.com"
            />
            <Card
              image={Image}
              title="Portfolio"
              description="Where I show my projects, contact information, and social links."
              hasIcon="true"
              icon={ICONS.website}
              link="www.google.com"
              linkLabel="website"
            />
          </div>
        </Zoom>
      </section>
    );
  }
}

export default Work;
