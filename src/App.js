import React, { useRef } from "react";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Grid from "@material-ui/core/Grid";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null)

  const toAbout = () => {
    scrollToRef(aboutRef);
  };

  const toProjects = () => {
  scrollToRef(projectsRef)
}

  
  return (
    <>
      <Router>
        <Grid className="App">
          <div className="Intro" ref={aboutRef}>
            <h1>Joseph Atlas</h1>
            <h2>Front End Software Engineer</h2>

            <Grid className="NavButtons">
              <Button size="large" onClick={toAbout}>
                About
              </Button>
              <Button size="large" onClick={toProjects}>Projects</Button>
            </Grid>
          </div>
          <div className="About" ref={aboutRef}>
            <h2>About Me</h2>
          </div>
          <div className="Projects" ref={projectsRef}>
            <h1>Projects</h1>
          </div>
        </Grid>
      </Router>
    </>
  );
}

export default App;
