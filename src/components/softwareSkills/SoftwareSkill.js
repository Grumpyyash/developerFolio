import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          <li
                className="software-skill-inline"
                name="react-native"
              >
                <img src={require('./icons8-react-native-50.png')} />
                <p>react-native</p>
              </li>
              <li
                className="software-skill-inline"
                name="mongodb"
              >
                <img src={require('./icons8-mongodb-48.png')} />
                <p>jquery</p>
              </li>
              <li
                className="software-skill-inline"
                name="c++"
              >
                <img src={require('./icons8-c++-50.png')} />
                <p>c++</p>
              </li>
              <li
                className="software-skill-inline"
                name="c"
              >
                <img src={require('./icons8-c-programming-48.png')} />
                <p>c</p>
              </li>
              <li
                className="software-skill-inline"
                name="python"
              >
                <img src={require('./icons8-python-50.png')} />
                <p>python</p>
              </li>
              <li
                className="software-skill-inline"
                name="figma"
              >
                <img src={require('./icons8-figma-50.png')} />
                <p>figma</p>
              </li>
              <li
                className="software-skill-inline"
                name="git"
              >
                <img src={require('./icons8-git-50.png')} />
                <p>git</p>
              </li>
        </ul>
      </div>
    </div>
  );
}
