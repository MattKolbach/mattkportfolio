import React from "react";


function ProjectList() {



  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        
        <div className="card col">
          <img
            src={require('../../assets/images/3GPnP.PNG')}
            alt="a freshly baked pizza with a wood fired oven in the background"
            className="img-project"
          />
          <div className="card-body">
            <h2 className="text-center">3 Guys Pizza-n-Pies</h2>
            <p>HTML, CSS, Bootstrap, javascript, express, express handlebars, mysql2, sequelize, dotenv, bcrypt, express
              session, connect session sequelize, loadingbar.js</p>
          </div>
          <div className="d-flex justify-content-center project-button">
            <a href="https://threeguyspizzanpies.herokuapp.com/" className="btn btn-primary project-links" rel="noreferrer" target="_blank">Check it out</a>
            <a href="https://github.com/MattKolbach/3-guys-pizza-n-pies" target="_blank" rel="noreferrer" className="project-links">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
          </div>
        </div>

        <div className="card col">
        <img
          src={require('../../assets/images/dinnerplanner.PNG')}
          alt="a group of people clinking glasses"
          className="img-project mx-1"
        />
          <div className="card-body">
            <h2 className="text-center">Dinner Planner</h2>
            <p>HTML, CSS, Pure.CSS, JS, API calls</p>
          </div>
          <div className="d-flex justify-content-center project-button">
            <a href="https://mattkolbach.github.io/DinnerPlanner/" className="btn btn-primary project-links" rel="noreferrer" target="_blank">Check it out</a>
            <a href="https://github.com/MattKolbach/DinnerPlanner" target="_blank" rel="noreferrer" className="project-links">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
          </div>
        </div>

        <div className="card col">
        <img
          src={require('../../assets/images/MyOutdoorSpace.PNG')}
          alt="a graph showing a budget balance"
          className="img-project mx-1"
        />
          <div className="card-body">
            <h2 className="text-center">My Outdoor Space</h2>
            <p>HTML, CSS, javascript, Bootstrap5, Express.js. React.js, ApolloServer, GraphQL, jwt, bcrypt, mongoDB, mongoose, Concurrently</p>
          </div>
          <div className="d-flex justify-content-center project-button">
            <a href="https://my-outdoor-space.herokuapp.com/" className="btn btn-primary project-links" rel="noreferrer" target="_blank">Check it out</a>
            <a href="https://github.com/MattKolbach/my-outdoor-space" target="_blank" rel="noreferrer" className="project-links">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
          </div>
        </div>



      </div>
    </div>
  );
}


export default ProjectList;
