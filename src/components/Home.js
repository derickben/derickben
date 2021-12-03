import {
  useState,
  useEffect,
  useRef,
  useContext,
  useLayoutEffect,
  useCallback,
} from "react";
import { NavContext } from "../context/NavContext";
import useTypewriter from "react-typewriter-hook";
import giraffeImg from "../img/giraffeeBac.jpg";
import bac1 from "../img/bac1.jpg";
import bac2 from "../img/bac2.jpg";
import bac4 from "../img/bac4.jpg";

const MagicOcean = ["signer", "veloper", "signer", "veloper"];
let index = 0;

const imgArr = [bac1, bac2, bac4, giraffeImg];
let imgIndex = 0;

let homeTop;
let homeHeight;

const Home = () => {
  const [occupation, setOccupation] = useState("veloper");
  //const [bgImg, setBgImg] = useState(giraffeImg);
  const [bgImg, setBgImg] = useState(() => {
    const initialState = giraffeImg;
    return initialState;
  });
  const intervalRef = useRef({});
  const { offset, setActive } = useContext(NavContext);
  const homeRef = useRef();
  const name = useTypewriter(occupation);

  const setScrollNav = useCallback(() => {
    homeTop = homeRef.current.offsetTop;
    homeHeight = homeRef.current.clientHeight;

    if (offset > homeTop && offset <= homeHeight) {
      setActive("home");
    } else if (offset > homeHeight) {
      setActive("skills");
    }
  }, [offset, setActive]);

  const changeImage = () => {
    if (imgIndex >= imgArr.length) {
      imgIndex = 0;
    }
    setBgImg(imgArr[imgIndex]);
    imgIndex++;
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setOccupation(MagicOcean[index]);
    }, 5000);

    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    setScrollNav();
  }, [setScrollNav]);

  useEffect(() => {
    setInterval(() => {
      changeImage();
    }, 5000);
  }, []);

  return (
    <div
      className="home"
      ref={homeRef}
      style={{
        backgroundImage: `linear-gradient(
        45deg,
        hsla(24, 43%, 46%, 1) 0%,
        hsla(24, 43%, 46%, 0.93) 50%,
        hsla(24, 100%, 72%, 0.53) 100%
      ),
      url(${bgImg})`,
      }}
    >
      <div className="home__text">
        <h3>Hi! I'm Benedict</h3>
        <h1 className="home__text--developer">De{name}</h1>
        <h1 className="home__text--africa">Based In Africa</h1>
        <p>
          I am a developer focused on cratfing user-friendly experiences. I am
          passionate about building excellent software that improves the lives
          of those around me.
        </p>
        <a href="#portfolio">See Portfolio</a>
      </div>
    </div>
  );
};

export default Home;
