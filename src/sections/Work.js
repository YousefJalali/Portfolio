import React, { Component } from "react";

import UnderLine from "../components/UnderLine";
import Card from "../components/Card";
import Image from "../assets/card-image.jpg";
import { ICONS } from "../assets/ICONS";

class Work extends Component {
  render() {
    return (
      <section className="work section flex content-flex-start">
        <div>
          <h1 className="header">Work</h1>
          <UnderLine marginBottom="15rem" />
        </div>
        <div className="card--container flex row content-space-evenly items-flex-start">
          <Card
            image={Image}
            title="Terre d'Ocean"
            description="A website for a place"
            icon={ICONS.home}
            link="www.google.com"
            linkLabel="google"
          />
          <Card
            image={Image}
            title="Native App"
            description="is a challenge I made for myself to learn skills in iOS, Android, game and web development as well as design. (In Progress)"
            hasSecondLink="true"
            icon={ICONS.googlePlay}
            link="www.google.com"
            linkLabel="google Play"
          />
          <Card
            image={Image}
            title="Portfolio"
            description="App built using react native"
            icon={ICONS.home}
            link="www.google.com"
            linkLabel="google"
          />
        </div>
      </section>
    );
  }
}

export default Work;
