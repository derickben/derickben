import { useEffect, useRef, useContext, useLayoutEffect } from "react";
import { NavContext } from "../context/NavContext";
import CardPortfolio from "./CardPortfolio";

import portfolio1 from "../img/portfolio1.png";
import portfolio3 from "../img/portfolio2.png";
import portfolio2 from "../img/portfolio3.png";
import portfolio4 from "../img/portfolio4.png";

import portfolioMini1 from "../img/portfolioMini1.png";
import portfolioMini3 from "../img/porfolioMini2.png";
import portfolioMini2 from "../img/portfolioMini3.png";
import portfolioMini4 from "../img/portfolioMini4.png";

const card1 = {
  bgImg: portfolio1,
  bgImgMini: portfolioMini1,
  text: "Two page responsive website built with React and Sass. Utilized CSS Grid and Flexbox",
  link: "https://arvin-instruments.herokuapp.com/",
  tools: ["React", "Radium", "Sass", "Animation", "NodeJS", "MongoDB", "JWT"],
  altText: "OEMA project",
};

const card2 = {
  bgImg: portfolio2,
  bgImgMini: portfolioMini2,
  text: "Two page responsive website built with React and Sass. Utilized CSS Grid and Flexbox",
  link: "https://derickben.github.io/empower/#/",
  tools: ["React", "Sass", "React-router"],
  altText: "Empower project",
};

const card3 = {
  bgImg: portfolio3,
  bgImgMini: portfolioMini3,
  text: "Single page website built with flexbox and float.",
  link: "https://derickben.github.io/portfolio-project/",
  tools: ["HTML5", "Sass"],
  altText: "Single page project",
};

const card4 = {
  bgImg: portfolio4,
  bgImgMini: portfolioMini4,
  text: "Landing page developed for future homes built with Sass and grid",
  link: "https://derickben.github.io/nexter-project/",
  tools: ["HTML5", "Sass"],
  altText: "Nexter project",
};

const Portfolio = () => {
  const { offset, setActive } = useContext(NavContext);
  const portfolioRef = useRef();

  const setScrollNav = () => {
    let portfolioTop = portfolioRef.current.offsetTop;
    let portfolioHeight = portfolioRef.current.clientHeight;

    if (offset > portfolioTop && offset <= portfolioHeight + portfolioTop) {
      setActive("portfolio");
    }
  };
  useLayoutEffect(() => {
    setScrollNav();
  });
  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <span className="line">Portfolio</span>
      <h1>My Porfolio</h1>
      <div className="portfolio__grid">
        <CardPortfolio details={card1} />
        <CardPortfolio details={card2} />
        <CardPortfolio details={card3} />
        <CardPortfolio details={card4} />
      </div>
    </section>
  );
};

export default Portfolio;
