import React from "react";

const MyWork = () => (
  <div className="container">
    <nav className="level">
      <div className="level-item has-text-centered">
        <h1 className="title is-3 has-text-link">Work Portfolio</h1>
      </div>
    </nav>

    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/travel-experience.png")} alt="image with boat and mountains" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Travel Experience App</p>
            <a href="https://stormy-sea-06466.herokuapp.com/" target="_blank">Visit Travel Experience Tracker!</a>
            <br />
            <a href="https://github.com/jenn-renken/Travel-App" target="_blank">GitHub Repository</a>
          </div>
      </div>
        <div className="content">
          Blog application where users can sign up and add travel experience posts. An authenticated user can add edit and delete their own posts.
            <br />
            <br />
          <p className="title is-4">Technologies Used:</p>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Sequelize</li>
            <li>Mysql2</li>
            <li>Express Handlebars</li>
            <li>Bulma</li>
            <li>jawsDB</li>
        </div>
      </div>
    </div>

    <br />

    <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/cocktail.png")} alt="cocktails on a bar" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Cocktail Quiz</p>
            <a href="https://jenn-renken.github.io/team-win-project/" target="_blank">Take the cocktail quiz!</a>
            <br />
            <a href="https://github.com/jenn-renken/team-win-project" target="_blank">GitHub Repository</a>
          </div>
        </div>
        <div className="content">
          A buzzfeed style quiz that presents the user with various choices and shows a cocktail and gif at the end based on the user input.
          This quiz integrates with the Cocktail DB API and the Giphy API.  
          <br />
          <br />
          <p className="title is-4">Technologies Used:</p>
            <li>Spectre CSS framework</li>
            <li>Giphy API</li>
            <li>Cocktail DB API</li>
        </div>
      </div>
    </div>

  <br />

  <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/food-festival.png")} alt="plate of nachos with a drink" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Food Festival App</p>
            <a href="https://jenn-renken.github.io/food-festival/" target="_blank">Visit Food Festival!</a>
            <br />
            <a href="https://github.com/jenn-renken/food-festival" target="_blank">GitHub Repository</a>
          </div>
        </div>
        <div className="content">
          An application to purchase tickets and view the schedule of a local food festival. 
          <br />
          <br />
          <p className="title is-4">Technologies Used:</p>
            <li>Bootstrap</li>
            <li>webpack</li>
        </div>
      </div>
    </div>

    <br />

  <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/zookeepr.png")} alt="image of Zookeepr app" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Zookeepr</p>
            <a href="https://jrenken-zookeepr.herokuapp.com/" target="_blank">Visit Zookeepr!</a>
            <br />
            <a href="https://github.com/jenn-renken/zookeepr" target="_blank">GitHub Repository</a>
          </div>
        </div>
        <div className="content">
          An application to search for animals at the zoo and add new animals including name, species, diet and personality traits. There is also a section to enter zookeepers and the names of new ones.
        </div>
      </div>
    </div>

    <br />

  <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/note-taker.png")} alt="image of Note Taker app" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Note Taker</p>
            <a href="https://mysterious-taiga-79412.herokuapp.com/" target="_blank">Visit Note Taker!</a>
            <br />
            <a href="https://github.com/jenn-renken/note-taker" target="_blank">GitHub Repository</a>
          </div>
        </div>
        <div className="content">
          An application where a user can write, save, edit and delete notes. The user can come back to the same browser and view past saved notes.  
          <br />
          <br />
          <p className="title is-4">Technologies Used:</p>
            <li>express.js</li>
            <li>node.js</li>
            <li>Heroku</li>
        </div>
      </div>
    </div>

    <br />

  <div className="card">
      <div className="card-image">
        <figure className="image is-256x256">
          <img src={require("../../assets/weather.png")} alt="image of weather app" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Note Taker</p>
            <a href="https://jenn-renken.github.io/weather-dashboard/" target="_blank">Visit the Weather Dashboard!</a>
            <br />
            <a href="https://github.com/jenn-renken/weather-dashboard" target="_blank">GitHub Repository</a>
          </div>
        </div>
        <div className="content">
          A weather application where the user can seach for weather in different cities. The app will store the most 10 recently searched cities and display the current forecast and the five day forecast. 
          <br />
          <br />
          <p className="title is-4">Technologies Used:</p>
            <li>Bootstrap</li>
            <li>moment.js</li>
            <li>weather API</li>
        </div>
      </div>
    </div>

</div>
);

export default MyWork;
