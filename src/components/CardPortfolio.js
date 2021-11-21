import Radium from "radium";

const CardPortfolio = ({ details }) => {
  const { bgImg, text, link, altText, tools, bgImgMini } = details;

  const styles = {
    main: {
      backgroundImage: `url(${bgImg})`,
      "@media only screen and (max-width: 500px)": {
        backgroundImage: `url(${bgImgMini})`,
      },
    },
  };

  return (
    <div className="cardPortfolio" style={styles.main}>
      <div className="cardPortfolio__caption">
        <p className="desc">{text}</p>
        <ul className="tools">
          {tools.map((tool, idx) => (
            <li key={idx}>
              <p>{tool}</p>
            </li>
          ))}
        </ul>
        <a href={link} alt={altText} target="__blank" rel="noreferrer">
          Visit website
        </a>
      </div>
    </div>
  );
};

export default Radium(CardPortfolio);
