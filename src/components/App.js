import "../App.scss";
import { useEffect } from "react";
import Radium, { StyleRoot } from "radium";
import { NavProvider } from "../context/NavContext";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function App() {
  useEffect(() => {});
  return (
    <StyleRoot>
      <div className="App">
        <div className="container">
          <NavProvider>
            <Navbar />
            <Home />
            <Skills />
            <Portfolio />

            <Contact />
            <Footer />
          </NavProvider>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
