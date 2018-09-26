import React, { Component } from "react";

import Octagon from "../components/Octagon";
import { ICONS } from "../assets/ICONS";
import LoadingBar from "../components/LoadingBar";
import UnderLine from "../components/UnderLine";

class About extends Component {
  state = {
    skills: {
      css: 80,
      html: 90,
      react: 70,
      react_Native: 70,
      UI_Design: 50,
      photoshop: 60,
      illustrator: 40
    }
  };

  render() {
    const mapSkills = [];

    for (let skill in this.state.skills) {
      // console.log(this.state.skills[skill])
      mapSkills.push({ label: skill, percent: this.state.skills[skill] });
    }

    const skills = mapSkills.map(skill => {
      if (skill.label.indexOf("_") > -1) {
        skill.label = skill.label.replace("_", " ");
      }
      return (
        <LoadingBar
          key={skill.label}
          label={skill.label}
          percent={skill.percent}
        />
      );
    });
    return (
      <section className="about section flex content-space-between">
        <div>
          <h1 className="header">About</h1>
          <UnderLine marginBottom="15rem" />
        </div>
        <div className="performance--container flex row items-flex-start">
          <div className="flex row content-space-around items-flex-start">
            <div className="performance flex">
              <Octagon
                className="square"
                icon={ICONS.fast}
                size="50"
                color="white"
              />
              <div>
                <h2 className="title">Fast</h2>
                <p className="text">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </div>

            <div className="performance flex">
              <Octagon
                className="square"
                icon={ICONS.phone}
                size="50"
                color="white"
              />
              <div>
                <h2 className="title">Responsive</h2>
                <p className="text">
                  My layouts will work on any device, big or small.
                </p>
              </div>
            </div>
          </div>

          <div className="flex row content-space-around items-flex-start">
            <div className="performance flex">
              <Octagon
                className="square"
                icon={ICONS.bulb}
                size="50"
                color="white"
              />
              <div>
                <h2 className="title">Intuitive</h2>
                <p className="text">
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </div>
            </div>

            <div className="performance flex">
              <Octagon
                className="square"
                icon={ICONS.dynamic}
                size="50"
                color="white"
              />
              <div>
                <h2 className="title">Dynamic</h2>
                <p className="text">
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex row content-space-between items-flex-start">
          <div className="flex profile">
            <Octagon size="0" />
            <h2 className="title">Who's this guy?</h2>
            <p className="text">
              I'm the Front-End Developer for EyeCue Lab in Portland, OR. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div className="skills">{skills}</div>
        </div>
      </section>
    );
  }
}

export default About;
