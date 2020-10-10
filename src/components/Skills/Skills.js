import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="SkillsContent">
      <div className="SkillsList">
        <h2>{"Skills"}</h2>
        <div>
          <div>
            <strong>{"> Programming Languages: "}</strong>
            JavaScript, C#, Java, Python
          </div>
          <div>
            <strong>{"> Libraries & Frameworks: "}</strong>React.js, Node.js,
            Express.js{" "}
          </div>
          <div>
            <strong>{"> Database Technologies: "}</strong>
            PostgreSQL, MySQL, SQL, MongoDB, Firebase
          </div>
          <div>
            <strong>{"> DevOps: "}</strong>AWS, Azure, Netlify
          </div>
          <div>
            <strong>{"> Tools & Other: "}</strong>Git, NGINX, Linux, Regex
          </div>
          <div>
            <strong>{"> Additional Concepts: "}</strong>
            React Context, Redux, REST, HTTP, JSON
          </div>
        </div>
        <br />
        <div>
          <strong>Preferred Stack: </strong>
          {"PostgreSQL, Express, React, Node (PERN)"}
        </div>
      </div>
    </div>
  );
};

export default Skills;
