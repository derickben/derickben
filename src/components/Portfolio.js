//import "aos/dist/aos.css";
//import AOS from "aos";
import { useEffect, useRef, useContext } from "react";
import { NavContext } from "../context/NavContext";
import CardPortfolio from "./CardPortfolio";

import portfolio1 from "../img/portfolio1.png";
import portfolio2 from "../img/portfolio2.png";
import portfolio3 from "../img/portfolio3.png";
import portfolio4 from "../img/portfolio4.png";

const card1 = {
  bgImg: portfolio1,
  text: "Two page responsive website built with React and Sass. Utilized CSS Grid and Flexbox",
  link: "https://derickben.github.io/empower/#/",
  altText: "Empower project",
};

const card2 = {
  bgImg: portfolio2,
  text: "Single page website built with flexbox and float.",
  link: "https://derickben.github.io/portfolio-project/",
  altText: "Portfolio project",
};

const card3 = {
  bgImg: portfolio3,
  text: "Landing page developed for future homes built with Sass and grid",
  link: "https://derickben.github.io/nexter-project/",
  altText: "Nexter project",
};

const card4 = {
  bgImg: portfolio4,
  text: "Landing page developed for future homes built with Sass and grid",
  link: "https://derickben.github.io/nexter-project/",
  altText: "Nexter project",
};

const Portfolio = () => {
  const { offset, setActive } = useContext(NavContext);
  const portfolioRef = useRef();

  const setScrollNav = () => {
    let sectionTop = portfolioRef.current.offsetTop;
    let sectionHeight = portfolioRef.current.clientHeight;
    if (offset > sectionTop && offset <= sectionHeight + sectionTop) {
      setActive("portfolio");
    }
  };
  useEffect(() => {
    /*
    AOS.init({
      duration: 2000,
    });
	*/
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
