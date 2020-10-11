import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./projects.css";

const Projects = () => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: "100%",
      justifyContent: "center",
      backgroundColor: "#c4c4c4",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
    hr: {
      marginTop: "5%",
      width: "85%",
    },
    detailsP: {
      textAlign: "left",
      marginTop: "1%",
      padding: "2%",
    },
  });

  const classes = useStyles();
  const cards = [
    {
      id: "matterIntakeCard",
      className: classes.root,
      title: classes.title,
      titleText: "Legal Matter Submission Tool",
      pos: classes.pos,
      bullet: classes.bullet,
      details:
        "Authenticated making use of Role-Based-Access-Control, this application provides conditionally rendered forms and cuts down matter submission man-hours by providing all required matter template types in one form.",
      tech: [
        "React front-end",
        "Express/ Node server for REST API + proxy",
        "Auth0 + PostgreSQL as database & provides RBAC",
        "React Context API global state.",
        "Forms built & validated using React-Final-Form",
        "SmartSheet cloud spreadsheet as data endpoint.",
        "Load balanced using NGINX",
        "Setup in continuous deployment using Netlify + AWS",
      ],
    },
    {
      id: "bookItNowCard",
      className: classes.root,
      title: classes.title,
      titleText: "Service Scheduling App",
      pos: classes.pos,
      bullet: classes.bullet,
      details:
        "Service appointment scheduling application which provides conditional service selection, pricing estimation, and secure payment processing",
      tech: [
        "React front-end",
        "Express / Node server for REST API + proxy.",
        "Stripe.js for secure payment processing",
        "Advanced error handling + validation",
        "Links with ServiceMonster scheduling API",
        "Front end continuous deployment setup on Netlify",
        "Server hosted on clients Linux server",
      ],
    },
    {
      id: "companyPortal",
      className: classes.root,
      title: classes.title,
      titleText: "Company Web Portal",
      pos: classes.pos,
      bullet: classes.bullet,
      details:
        "Fully responsive & authenticated portal; provides news & events, documents, and custom tools to both internal and external users.",
      tech: [
        "React front-end",
        "Authenticated with Auth0.js",
        "Responsive CSS layout using Flexbox",
      ],
    },
    {
      id: "eventSignupCard",
      className: classes.root,
      title: classes.title,
      titleText: "Event Signup Webpages",
      pos: classes.pos,
      bullet: classes.bullet,
      details:
        "Fully responsive website displaying a current company event and provides a validated signup form that outputs to a cloud spreadsheet.",
      tech: [
        "React front-end",
        "Express / Node REST API / proxy",
        "SmartSheet cloud spreadsheet as data endpoint",
        "Front end continuous deployment setup on Netlify",
        "Continuous deployment Express / Node setup in serverless config with Netlify functions.",
      ],
    },
  ];
  return (
    <>
      <div className="ProjectCardsContainer">
        {" "}
        {cards.map((c, i) => (
          <div className="CardHolder" key={i}>
            <Card className={c.className} id={c.id}>
              <CardContent>
                <Typography
                  className={c.title}
                  color="textPrimary"
                  component="h2"
                >
                  {c.titleText}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.detailsP}
                >
                  {c.details}
                </Typography>
                <hr className={classes.hr} />
                <Typography>{"Tech Stack & Details"}</Typography>
                <ul>
                  {c.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
