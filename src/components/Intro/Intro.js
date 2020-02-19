import React from "react";
import "./Intro.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";



export default function Intro() {
  
  return (
    <Router>
    <div className="Intro">
      <h1>Joseph Atlas</h1>
      <h2>Front End Software Engineer</h2>

      <Grid className="NavButtons">
        <Button size="large" component={RouterLink} to="/About">About</Button>
        <Button size="large">Projects</Button>
      </Grid>
    </div>
    </Router>
  );
}
