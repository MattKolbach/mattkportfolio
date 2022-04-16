import React from "react";


function ProjectList() {



  return (
    <div>
      <div className="flex-row">
        <img
          src={require('../../assets/images/3GPnP.PNG')}
          alt="a freshly baked pizza with a wood fired oven in the background"
          className="img-thumbnail mx-1"
        />
        <img
          src={require('../../assets/images/dinnerplanner.PNG')}
          alt="a group of people clinking glasses"
          className="img-thumbnail mx-1"
        />
        <img
          src={require('../../assets/images/ohsnap.PNG')}
          alt="a photographer's backdrop with flash tripods"
          className="img-thumbnail mx-1"
        />
        <img
          src={require('../../assets/images/budgettrackerpwa.png')}
          alt="a graph showing a budget balance"
          className="img-thumbnail mx-1"
        />
        <img
          src={require('../../assets/images/weatherdashboard.png')}
          alt="a five day forcast for a chosen city"
          className="img-thumbnail mx-1"
        />
        <img
          src={require('../../assets/images/runbuddy.jpg')}
          alt="a woman in running gear bending down to tie her shoe"
          className="img-thumbnail mx-1"
        />
      </div>
    </div>
  );
}


export default ProjectList;
