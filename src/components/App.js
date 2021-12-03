import "../App.scss";
import { FormspreeProvider } from "@formspree/react";
import { useEffect } from "react";
import Radium, { StyleRoot } from "radium";
import { NavProvider } from "../context/NavContext";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function App({ Component, pageProps }) {
  useEffect(() => {});
  return (
    <StyleRoot>
      <FormspreeProvider project="{your-project-id}">
        <div className="App">
          <div className="container">
            <NavProvider>
              <Navbar />
              <Home />
              <Skills />
              <Portfolio />

              <Contact {...pageProps} />
              <Footer />
            </NavProvider>
          </div>
        </div>
      </FormspreeProvider>
    </StyleRoot>
  );
}

export default Radium(App);
