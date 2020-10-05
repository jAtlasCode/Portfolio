import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Bookitpic from "../../Images/bookit.jpg";
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

export default function Bookitnow() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root} id="bookitnowCard">
        <CardHeader
          // action={
          // }
          title="Book it Now!"
          subheader="Service Industry Appointment Scheduling Application"
        />
        <CardMedia
          className={classes.media}
          id="bookitnowMedia"
          image={Bookitpic}
          title="Book it Now App"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Full-stack service industry appointment booking application which
            allows customers to get a quote, and schedule an appointment from
            anywhere at any time.
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
                <li>React Context API for global state management</li>
                <li>Conditional Service Picker</li>
                <li>Express.js server (REST API/ Proxy)</li>
                <li>Stripe.js for payments</li>
                <li>Advanced error handling & validation</li>
                <li>React App Deployed on Netlify</li>
                <li>Serverless Server using Netlify Functions</li>
                <li>Links with ServiceMonster API</li>
              </ul>
            </Typography>
            <br />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
