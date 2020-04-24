import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./MatterIntake.css";
import MitPhoto from "../../Images/MIT.jpg";
import ComingSoon from "../../Images/picture_the_possibilities.png";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    width: "600",
    height: "100%",
    marginTop: "5%"
  },
  gridItem: {
    height: "100%"
  },
  gridContainer: {
    height: "100%",
    marginTop: "5vh"
  },
  media: {
    height: "",
    width: "auto",
    margin: "5%",
    paddingTop: "56.25%"
  },
  buttons: {
    justifyContent: "center",
    borderRadius: "100%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    borderRadius: "100%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    width: "100%"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function Tools() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <div className="ToolsContainer">
      <div className="ToolsHeader">
        <Typography variant="h4">Mosaic Custom Tools</Typography>
      </div>
      <Grid
        container
        justify="space-evenly"
        // alignItems="center"
        className="ToolsContent"
        direction="row"
        spacing={2}
      >
        <Card className={classes.root} id="matterIntakeCard">
          <CardHeader
            // action={
            // }
            title="Legal Matter Intake Tool"
            subheader="Advanced Matter Intake Application"
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
                [classes.expandOpen]: expanded
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
              <Typography paragraph>Details:</Typography>
              <Typography paragraph>
                Optimize your matter tracking by reducing matters submitted with
                errors or missing information. Matters submitted through this
                tool will be outputted to a cloud spreadsheet, where even more
                validation can occur.
              </Typography>
              <Typography paragraph>
                This is more than just a form! This application provides user
                accounts and authentication, with the ability to save forms as
                drafts to your account for later submission, and much more.
              </Typography>
              <Typography paragraph>
                Choosing a template type will instantly populate the form with
                all fields associated with the template.
              </Typography>
              <Typography>
                Advanced submission failure features will ensure your matter
                data is not lost in any event of failed submission
              </Typography>
              <br />
              <Button
                variant="contained"
              >
              Request Demo</Button>
            </CardContent>
          </Collapse>
        </Card>
{/*=============================================================================================== */}
        <Card className={classes.root}>
          <CardHeader
            // action={
            // }
            title="Title"
            subheader="Coming Soon"
          />
          <CardMedia
            className={classes.media}
            image={ComingSoon}
            title="Coming Soon"
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
                [classes.expandOpen]: expanded1
              })}
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
              <Typography paragraph>
                Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              </Typography>
              <Typography paragraph>
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              </Typography>
              <Typography paragraph>
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              </Typography>
              <Typography>
              Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon
              </Typography>
              <br />
              <Button
                variant="contained"
              >
              Request Demo</Button>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </div>
  );
}


/*
<ul className="ToolsList">
          <li>
            <Link href="https://matterintake.mosaiclegalhub.com">
              Matter Intake Tool
            </Link>
          </li>
        </ul>
        */


  /*}  <Card className={classes.root} id="cardMedia">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={MitPhoto}
              title="Matter Intake Tool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Matter Intake Tool
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Conditionally formatted Legal Matter Intake tool which includes
                all matter templates in one single form. Allows multi-level role
                & client authentication.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Button size="small" color="primary">
              Request Demo
            </Button>
          </CardActions>
        </Card>
        {/*=================================================================================== */


  /* <Card className={classes.root} id="cardMedia">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ComingSoon}
              title="Coming Soon"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Coming Soon!
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                More Mosaic Custom Tools coming soon!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Button size="small" color="primary">
              Request Demo
            </Button>
          </CardActions>
  </Card> */

