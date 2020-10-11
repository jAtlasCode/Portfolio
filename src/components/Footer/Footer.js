import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import Pdf from "../../docs/Resume.pdf";
import "./footer.css";

const Footer = () => {
  return (
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
      <div className="FooterText">© Joseph Atlas | All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
