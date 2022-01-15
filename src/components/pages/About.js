import React from "react";

const About = () => (
  <div className="columns">
   <section className="section">
      <figure className="image is-256x256">
        <img src={require("../../assets/me.png")} />
      </figure>  
    </section>
    <section className="section is-medium">
        <h1 className="title has-text-link">About Me</h1>
        <h2 className="subtitle">
          I have been working as a Quality Assurance Analyst for the past 10 years. My job has been to ensure the software we devleop is both functional and usable.
          <br/>
          <br />
          I am currently transitioning to a more technical role which will include frontend development and automated testing.
        </h2>
    </section>
  </div>
);

export default About;
