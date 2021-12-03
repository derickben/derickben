import { NavContext } from "../context/NavContext";
import { useCallback, useContext, useRef, useLayoutEffect } from "react";
import sassIcon from "../img/sass-1.svg";
import reactIcon from "../img/react-2.svg";
import reduxIcon from "../img/redux.svg";
import materialIcon from "../img/material-ui-1.svg";
import githubIcon from "../img/github-icon.svg";
import figmaIcon from "../img/figma-1.svg";
import nodeIcon from "../img/nodejs-icon.svg";
import mongoIcon from "../img/mongodb-icon-1.svg";
import mysqlIcon from "../img/mysql-6.svg";
import postmanIcon from "../img/postman.svg";
import awsIcon from "../img/aws-logo.svg";
import CardSkill from "./CardSkill";

const frontEnd = {
  title: "Front-end Developer",
  skillList: [
    { name: "SaSS", icon: sassIcon },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Material UI", icon: materialIcon },
    { name: "Github pages", icon: githubIcon },
    { name: "Figma", icon: figmaIcon },
  ],
};

const backEnd = {
  title: "Back-end Developer",
  skillList: [
    { name: "Node JS", icon: nodeIcon },
    { name: "Mongo DB", icon: mongoIcon },
    { name: "mySQL", icon: mysqlIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "AWS", icon: awsIcon },
  ],
};

const Skills = () => {
  const { offset, setActive } = useContext(NavContext);
  const skillRef = useRef();

  const setScrollNav = useCallback(() => {
    let skillsTop = skillRef.current.offsetTop;
    let skillsHeight = skillRef.current.clientHeight;
    console.log({
      skillsTop,
      skillsHeight,
      offset,
    });
    if (offset > skillsTop && offset <= skillsHeight + skillsTop) {
      setActive("skills");
    } else if (offset > skillsHeight + skillsTop) {
      setActive("portfolio");
    }
  }, [setActive, offset]);

  useLayoutEffect(() => {
    setScrollNav();
  }, [setScrollNav]);

  return (
    <div className="skills" id="skills" ref={skillRef}>
      <h1>My Skills</h1>
      <div className="skills__grid">
        <CardSkill skillSet={frontEnd} />
        <CardSkill skillSet={backEnd} />
      </div>
    </div>
  );
};

export default Skills;
