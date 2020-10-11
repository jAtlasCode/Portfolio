import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { Router } from "react-router";
import history from "./history";
import { Button } from "@material-ui/core";
import Projects from "./components/Projects/Projects";
import { useStateValue } from "./state";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Skills from "./components/Skills/Skills";
import Bio from "./components/Bio/Bio";
import SocialButtons from "./components/SocialButtons/SocialButtons";
import Footer from "./components/Footer/Footer";
import ReactGA from "react-ga";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <ArrowUpwardIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
        fontSize="large"
      />
    </>
  );
};

function App() {
  // eslint-disable-next-line
  const [{ theme }, dispatch] = useStateValue();

  // const classes = useStyles();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const toAbout = () => {
    scrollToRef(aboutRef);
  };

  const toProjects = () => {
    scrollToRef(projectsRef);
  };

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  // const handle = () => {
  //   dispatch({ type: "editTheme", theme: { mode: "dark" } });
  //   console.log(theme);
  // };

  return (
    <>
      <Router history={history}>
        <ScrollArrow />
        <div className="App" style={theme.app}>
          <div className="Intro" ref={aboutRef}>
            <div className="IntroContent">
              <div className="IntroTyping">
                <p>Joseph Atlas</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="NavButtons">
                <Button size="large" onClick={toAbout}>
                  About
                </Button>
                <Button size="large" onClick={toProjects}>
                  Projects
                </Button>
                <SocialButtons />
              </div>
            </div>
          </div>

          <div className="About" ref={aboutRef}>
            <h1>About Me</h1>
            <Bio />

            <div className="Skills">
              <Skills />
            </div>
          </div>

          <div className="Projects" ref={projectsRef}>
            <h2>Projects</h2>
            <Projects />
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
