import React, { useRef, useState } from "react";
import "./App.css";
import { MemoryRouter as Router } from "react-router";
import { Button, Grid, IconButton } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MatterIntake from "./components/ProjectCards/MatterIntake";
import Eventsignups from "./components/ProjectCards/Eventsignups";
import Bookitnow from "./components/ProjectCards/Bookitnow";
import LegalHub from "./components/ProjectCards/LegalHub";
import { useStateValue } from "./state";
import EmailIcon from "@material-ui/icons/Email";
import Pdf from "./docs/Resume.pdf";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     height: "100%",
//   },
//   gridContainer: {
//     height: "100%",
//     marginTop: "5vh",
//   },
// }));
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

  // const handle = () => {
  //   dispatch({ type: "editTheme", theme: { mode: "dark" } });
  //   console.log(theme);
  // };

  return (
    <>
      <Router>
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
                {/* <button onClick={handle}>Change Theme</button> */}
                <div className="SocialButtons">
                  <IconButton href="https://www.linkedin.com/in/joseph-atlas/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href="https://github.com/jAtlasCode">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href="mailto:joeyatlas27@gmail.com">
                    <EmailIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          <div className="About" ref={aboutRef}>
            <h1>About Me</h1>
            <div className="Bio">
              <h2>{"Bio"}</h2>
              <p>
                My name is Joseph Atlas and I'm currently a full stack software
                engineer in Goodyear, Arizona. Although my passion resides in
                front end engineering & design, I am experienced and enjoy
                working with the full stack in which formulates today's
                software.
              </p>
              <p>
                {" "}
                I'm a Northern Arizona University Graduate with a Bachelors of
                Science in Computer Information Systems and a certificate in
                Enterprise Systems. Since I can remember I have been fiddling
                with any sort of technology I could get my hands on, starting
                with phones and old laptops -- to today building software,
                computers, and even keyboards.
              </p>{" "}
              <p>
                My passion for front end engineering & design is driven by a
                lifetime of not only being subjected to poor application user
                experiences, but hearing <strong>others </strong>
                complaints of these experiences. This inspired me to create
                applications that people find <strong>enjoyable </strong>
                and <strong>intuitive </strong> to use. <br /> <br />I hope you
                enjoy my portfolio, and if you would like to contact me, feel
                free to use the provided methods!
              </p>
              <hr />
            </div>

            <div className="Skills">
              <div className="SkillsContent">
                <div className="SkillsList">
                  <h2>{"Skills"}</h2>
                  <div>
                    <div>
                      <strong>{"> Programming Languages: "}</strong>
                      JavaScript, C#, Java, Python
                    </div>
                    <div>
                      <strong>{"> Libraries & Frameworks: "}</strong>React.js,
                      Node.js, Express.js{" "}
                    </div>
                    <div>
                      <strong>{"> Database Technologies: "}</strong>
                      PostgreSQL, MySQL, SQL, MongoDB, Firebase
                    </div>
                    <div>
                      <strong>{"> DevOps: "}</strong>AWS, Azure, Netlify
                    </div>
                    <div>
                      <strong>{"> Tools & Other: "}</strong>Git, NGINX, Linux,
                      Regex
                    </div>
                    <div>
                      <strong>{"> Additional Concepts: "}</strong>
                      React Context, Redux, REST, HTTP, JSON
                    </div>
                  </div>
                  <br />
                  <div>
                    <strong>Preferred Stack: </strong>
                    {"PostgreSQL, Express, React, Node (PERN)"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Projects" ref={projectsRef}>
            <div className="ProjectsHeader">
              <h1>Projects</h1>
            </div>
            <div className="ProfessionalProjects">
              <h2>Professional Projects</h2>
              <div className="ProProjectContent">
                <div className="ProjectRow1">
                  <div className="CardHolder">
                    <MatterIntake />
                  </div>
                  <div className="CardHolder">
                    <LegalHub />
                  </div>
                </div>
                <div className="ProjectRow2">
                  <div className="CardHolder">
                    <Bookitnow />
                  </div>
                  <div className="CardHolder">
                    <Eventsignups />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer">
            <div className="FooterLinks">
              <IconButton href="https://www.linkedin.com/in/joseph-atlas/">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/jAtlasCode">
                <GitHubIcon />
              </IconButton>
              <IconButton href="mailto:joeyatlas27@gmail.com">
                <EmailIcon />
              </IconButton>
              <Button onClick={() => window.open(Pdf)}>Résumé</Button>
            </div>
            <div className="FooterText">
              © Joseph Atlas | All Rights Reserved.
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
