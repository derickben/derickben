import "aos/dist/aos.css";
import AOS from "aos";
import { NavContext } from "../context/NavContext";
import { useEffect, useContext, useRef } from "react";
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

  const setScrollNav = () => {
    let skillsTop = skillRef.current.offsetTop;
    let skillsHeight = skillRef.current.clientHeight;
    if (offset > skillsTop && offset <= skillsHeight + skillsTop) {
      setActive("skills");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    ///

    setScrollNav();
  });

  return (
    <div className="skills" id="skills" ref={skillRef} data-aos={"fade-left"}>
      <h1>My Skills</h1>
      <div className="skills__grid">
        <CardSkill skillSet={frontEnd} />
        <CardSkill skillSet={backEnd} />
      </div>
    </div>
  );
};

export default Skills;
