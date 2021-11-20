import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect} from "react";

const CardPortfolio = ({ details }) => {
  const { bgImg, fig, text, link, color1, color2, altText } = details;
  
    useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div
      className="cardPortfolio"
	  data-aos={"fade-right"}
      style={{
        backgroundImage: `linear-gradient(${color1}, ${color2}),url(${bgImg})`,
      }}
    >
      <img src={fig} alt="" className="cardPortfolio__figure" />
      <div className="cardPortfolio__caption">
        {" "}
        <p>{text}</p>
        <a href={link} alt={altText} target="__blank">
          Visit website
        </a>
      </div>
    </div>
  );
};

export default CardPortfolio;
