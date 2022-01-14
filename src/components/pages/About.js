import React from "react";

const About = () => (
  <div class="columns">
   <section className="section">
      <figure className="image is-256x256">
        <img src={require("../../assets/me.png")} />
      </figure>  
    </section>
    <section className="section is-medium">
        <h1 className="title has-text-link">About Me</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
    </section>
  </div>
);

export default About;
