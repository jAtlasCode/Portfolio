import React from "react";
import "./bio.css";

const Bio = () => {
  return (
    <div className="Bio">
      <h2>{"Bio"}</h2>
      <p>
        My name is Joseph Atlas and I'm currently a full stack software
        developer in Goodyear, Arizona. Although my passion resides in front end
        engineering & design, I am experienced and enjoy working with the full
        stack in which formulates today's JavaScript web applications.
      </p>
      <p>
        {" "}
        I'm a Northern Arizona University graduate with a Bachelors of Science
        in Computer Information Systems and a certificate in Enterprise Systems.
        Since I can remember I have been fiddling with any sort of technology I
        could get my hands on, starting with phones and old laptops -- to today
        building software, computers, and even keyboards.
      </p>{" "}
      <p>
        My passion for front end engineering and design is driven by a lifetime
        of not only being subjected to poor application user experiences &
        appearances, but hearing <strong>others </strong>
        complaints of these experiences. This inspired me to create applications
        that people find <strong>enjoyable, </strong>
        <strong>intuitive, </strong> and <strong>pleasant </strong>to use.{" "}
        <br /> <br />I hope you enjoy my portfolio, and if you would like to
        contact me, feel free to use the provided methods!
      </p>
      <hr />
    </div>
  );
};

export default Bio;
