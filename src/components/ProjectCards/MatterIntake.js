import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MitPhoto from "../../Images/MIT.jpg";
import "./MatterIntake.css";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: "400",
    height: "200",
    height: "100%",
    marginTop: "1%",
  },
  gridItem: {
    height: "100%",
  },
  gridContainer: {
    height: "100%",
    marginTop: "5vh",
  },
  media: {
    height: "100%",
    width: "auto",
    margin: "5%",
    paddingTop: "56.25%",
  },
  buttons: {
    justifyContent: "center",
    borderRadius: "100%",
    labelColor: "white",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    borderRadius: "0%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    width: "100%",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function MatterIntake() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root} id="matterIntakeCard">
        <CardHeader
          // action={
          // }
          title="Legal Matter Intake Tool"
          subheader="Advanced Conditional Forms"
        />
        <CardMedia
          className={classes.media}
          image={MitPhoto}
          title="Matter Intake Tool"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Conditionally formatted Legal Matter Intake Tool which can be
            customized to provide your company or client with every matter
            template they need, in one form.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Technology:</Typography>
            <Typography paragraph>
              <ul>
                <li>React front-end</li>
                <li>Express.js server (REST API/ Proxy)</li>
                <li>Auth0.js + PostgreSQL for RBAC</li>
                <li>React Context API for global state management</li>
                <li>Forms built and validated with React-Final-Form</li>
                <li>SmartSheet (data endpoint)</li>
                <li>React App Deployed on Netlify</li>
                <li>Server hosted on AWS EC2</li>
                <li>Database hosted on AWS RDS</li>
              </ul>
            </Typography>
            <Typography paragraph>Details:</Typography>
            <Typography paragraph>
              Forms are conditionally rendered based off of user choices. Provides streamlined
              data input and is further assisted by inline-validation. Forms can be saved as draft
              in event submission fails.
            </Typography>
            <Typography paragraph>
              
            </Typography>
            <Typography>
              
            </Typography>
            <br />
            {/* <Button
                variant="contained"
              >
              Request Demo</Button> */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
