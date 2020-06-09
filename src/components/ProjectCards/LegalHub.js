import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MitPhoto from '../../Images/MIT.jpg'
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    minWidth: 350,
    maxHeight: 400,
    marginTop: '1%'
  },
  gridItem: {
    height: '100%'
  },
  gridContainer: {
    height: '100%',
    marginTop: '5vh'
  },
  media: {
    height: '',
    width: 'auto',
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

export default function LegalHub() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card className={classes.root} id="LegalHubCard">
          <CardHeader
            // action={
            // }
            title="Legal Custom Tool Hub"
            subheader="Responsive React Website"
          />
          <CardMedia
            className={classes.media}
            image={MitPhoto}
            title="Matter Intake Tool"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Website made using React.
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
        </>
  );
}