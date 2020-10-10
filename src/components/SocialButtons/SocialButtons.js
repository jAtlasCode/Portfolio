import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./socialButtons.css";

const SocialButtons = () => {
  return (
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
  );
};

export default SocialButtons;
