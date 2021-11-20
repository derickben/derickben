//import "aos/dist/aos.css";
//import AOS from "aos";
import { useEffect, useRef, useContext } from "react";
import { NavContext } from "../context/NavContext";
import CardPortfolio from "./CardPortfolio";
import BackEmpower from "../img/home-tile-1.jpg";
import BackMart from "../img/portfolio.png";
import BackHouse from "../img/house.jpeg";
import empower from "../img/empower.svg";
import nexter from "../img/nexter.png";
import hero from "../img/hero.svg";

const card1 = {
  bgImg: BackEmpower,
  fig: empower,
  text: "Two page responsive website built with React and Sass. Utilized CSS Grid and Flexbox",
  color1: "hsla(24, 43%, 46%, 0.85)",
  color2: "hsla(24, 43%, 46%, 0.85)",
  link: "https://derickben.github.io/empower/#/",
  altText: "Empower project",
};

const card2 = {
  bgImg: BackMart,
  fig: hero,
  text: "Single page website built with flexbox and float.",
  color1: "hsla(266, 94%, 30%, 0.8)",
  color2: "hsla(266, 94%, 30%, 0.8)",
  link: "https://derickben.github.io/portfolio-project/",
  altText: "Portfolio project",
};

const card3 = {
  bgImg: BackHouse,
  fig: nexter,
  text: "Landing page developed for future homes built with Sass and grid",
  color1: "hsla(212, 47%, 12%, 0.85)",
  color2: "hsla(212, 47%, 12%, 0.85)",
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
    <section
      className="portfolio"
      id="portfolio"
      ref={portfolioRef}
    >
      <span className="line">Portfolio</span>
      <h1>My Porfolio</h1>
      <div className="portfolio__grid">
        <CardPortfolio details={card1} />
        <CardPortfolio details={card2} />
        <CardPortfolio details={card3} />
      </div>
    </section>
  );
};

export default Portfolio;
