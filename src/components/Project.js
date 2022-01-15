import React from "react";

const Project = (props) => {
    const project = props.project;
    const srcs = {
        "travel": require("../assets/travel-experience.png"),
        "cocktail": require("../assets/cocktail.png")
    }

    return (
        <div className="card pb-6">
        <div className="card-image">
          <figure className="image is-256x256">
            <img
              src={srcs[project.img.srcId]}
              alt={project.img.alt}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{project.title}</p>
              <a href={project.deployed.href} target="_blank">
                {project.deployed.text}
              </a>
              <br />
              <a href={project.repo.href} target="_blank">
                {project.repo.text}
              </a>
            </div>
          </div>
          <div className="content">
            {project.description}
            <br />
            <br />
            <p className="title is-4">Technologies Used:</p>
            <ul>
                {project.techs.map((t,i) => {
                    return <li key={i}>{t}</li>
                })}
            </ul>
          </div>
        </div>
      </div>
  
    )
};

export default Project;