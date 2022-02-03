import React from "react";
import Project from "../Project";


const MyWork = () => {
  const projects = [
    {
      title: "CentralBark",
      description:
        "Social media app where pet owners can signup and post profiles of their pets to connect with other pet owners",
      img: {
        srcId: "centralbark",
        alt: "image of centralbark application",
      },
      deployed: {
        href: "httpshttps://centralbark.herokuapp.com/://stormy-sea-06466.herokuapp.com/",
        text: "Visit CentralBark!",
      },
      repo: {
        href: "https://github.com/jenn-renken/project3",
        text: "GitHub Repository",
      },
      techs: [
        "Apollo Express",
        "React",
        "GraphQL",
        "Bulma",
        "MongoDB Atlas",
      ]
    },
    {
      title: "Travel Experience Tracker",
      description:
        "Blog application where users can sign up and add travel experience posts. \n An authenticated user can add edit and delete their own posts.",
      img: {
        srcId: "travel",
        alt: "image with boat and mountains",
      },
      deployed: {
        href: "https://stormy-sea-06466.herokuapp.com/",
        text: "Visit Travel Experience Tracker!",
      },
      repo: {
        href: "https://github.com/jenn-renken/Travel-App",
        text: "GitHub Repository",
      },
      techs: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "mySql2",
        "Express Handlebar",
        "Bulma",
        "jawsDB",
      ]
    },
    {
      title: "Cocktail Quiz",
      description:
        "A buzzfeed style quiz that presents the user with various choices and shows a cocktail and gif at the end based on the user input. This quiz integrates with the Cocktail DB API and the Giphy API.",
      img: {
        srcId: "cocktail",
        alt: "coctails on a bar",
      },
      deployed: {
        href: "https://jenn-renken.github.io/team-win-project/",
        text: "Take the cocktail quiz!",
      },
      repo: {
        href: "https://github.com/jenn-renken/team-win-project",
        text: "GitHub Repository",
      },
      techs: [
        "Spectre CSS framework",
        "giphy API",
        "Cocktail DB API"
      ]
    },
    {
      title: "Food Festival App",
      description:
        "An application to purchase tickets and view the schedule of a local food festival.",
      img: {
        srcId: "food",
        alt: "plate of nachos with a drink",
      },
      deployed: {
        href: "https://jenn-renken.github.io/food-festival/",
        text: "Visit Food Festival!",
      },
      repo: {
        href: "https://github.com/jenn-renken/food-festival",
        text: "GitHub Repository",
      },
      techs: [
        "Bootstrap",
        "webpack"
      ]
    },
    {
      title: "Zookeepr",
      description:
        "An application to search for animals at the zoo and add new animals including name, species, diet and personality traits. There is also a section to enter zookeepers and the names of new ones.",
      img: {
        srcId: "zoo",
        alt: "image of Zookeepr app",
      },
      deployed: {
        href: "https://jrenken-zookeepr.herokuapp.com/",
        text: "Visit Zookeepr!",
      },
      repo: {
        href: "https://github.com/jenn-renken/zookeepr",
        text: "GitHub Repository"
      },
      techs: [
        "Bootstrap"
      ]
    },
    {
      title: "Note Taker",
      description:
        "An application where a user can write, save, edit and delete notes. The user can come back to the same browser and view past saved notes.",
      img: {
        srcId: "note",
        alt: "image of Note Taker app",
      },
      deployed: {
        href: "https://mysterious-taiga-79412.herokuapp.com/",
        text: "Visit Note Taker!",
      },
      repo: {
        href: "https://github.com/jenn-renken/note-taker",
        text: "GitHub Repository"
      },
      techs: [
        "express.js",
        "node.js",
        "Heroku"
      ]
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application where the user can seach for weather in different cities. The app will store the most 10 recently searched cities and display the current forecast and the five day forecast.",
      img: {
        srcId: "weather",
        alt: "image of Weather Dashboard",
      },
      deployed: {
        href: "https://jenn-renken.github.io/weather-dashboard/",
        text: "Visit the Weather Dashboard!",
      },
      repo: {
        href: "https://github.com/jenn-renken/weather-dashboard",
        text: "GitHub Repository"
      },
      techs: [
        "Bootstrap",
        "moment.js",
        "weather API"
      ]
    },
  ];
  return (
    <div className="container">
      <nav className="level">
        <div className="level-item has-text-centered">
          <h1 className="title is-3 has-text-link">Work Portfolio</h1>
        </div>
      </nav>
      <ul>
        {projects.map((p, i) => {
          return (
            <li key={i}>
              <Project project={p} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyWork;
