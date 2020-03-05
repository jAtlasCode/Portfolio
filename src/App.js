import React, { useRef } from "react";
import "./App.css";
import { MemoryRouter as Router } from "react-router";
// import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, IconButton, Icon } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MatterIntake from './components/ProjectCards/MatterIntake'

// import 'bootstrap/dist/css/bootstrap.min.css';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const toAbout = () => {
    scrollToRef(aboutRef);
  };

  const toProjects = () => {
    scrollToRef(projectsRef);
  };

  return (
    <>
      <Router>
        <div className="App">
          <div className="Intro" ref={aboutRef}>
            <div className="IntroContent">
              <h1>Joseph Atlas</h1>
              <h2>Front End Software Engineer</h2>

              <div className="NavButtons">
                <Button size="large" onClick={toAbout}>
                  About
                </Button>
                <Button size="large" onClick={toProjects}>
                  Projects
                </Button>
                <div className="SocialButtons">
                <IconButton href="https://www.linkedin.com/in/joseph-atlas/">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/jAtlasCode" >
                  <GitHubIcon />
                </IconButton>
                </div>
              </div>
            </div>
          </div>

          <div className="About" ref={aboutRef}>
            <h2>About Me</h2>
            <div className="AboutMe">
            <p>
              My name is Joseph Atlas and I'm currently a full stack software
              engineer in Flagstaff, Arizona. Although my passion resides in front
              end engineering & design, I am experienced and enjoy working with the full stack
              in which formulates today's software. I'm a Northern Arizona University
              Graduate with a Bachelors of Science in Computer Information
              Systems and a certificate in Enterprise Systems. Since I can remember
              I have been fiddling with any sort of technology I could get my hands on,
              starting with phones and old laptops -- to today building software, computers
              and even keyboards. My passion for front end engineering & design is driven by a lifetime
              of not only being subjected to poor application user experiences, but hearing <strong>others </strong>
              complaints of these experiences. This inspired me to create applications that people find <strong>enjoyable </strong>
              and <strong>intuitive </strong> to use.
            </p>

            <p>
              I hope you enjoy my portfolio, and if you would like to contact me, feel free to use the provided methods!
            </p>
            </div>
          </div>

          <div className="Projects" ref={projectsRef}>
          <div className="ProjectsHeader">
          <h1>Projects</h1>
          </div>
          <div className="ProfessionalProjects">
            <h2>Professional Projects</h2>
            <Grid container>
            <MatterIntake />
            </Grid>
          </div>
          <div className="PersonalProjects">
            <h2>Personal Projects</h2>
            <Grid container>
            </Grid>
          </div>
            
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
