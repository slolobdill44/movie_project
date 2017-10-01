'use strict';

import React, { Component } from 'react';

require('style-loader!./App.css');

class MovieTile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showDescription: false
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    if (this.state.showDescription === false) {
      this.setState({showDescription: true});
      console.log(this.state.showDescription);
    } else {
      this.setState({showDescription: false});
      console.log(this.state.showDescription);
    }
  }

  render() {

    return (
      <div>
        <section className="movie-tile-container">
          <div className="movie-tile-image-container">
            <img className="movie-tile-image" src="../../public/images/moon-2009.jpg"></img>
          </div>
          <div className="movie-tile-info-container">
            <div className="movie-tile-title-container">
              <div className="movie-tile-title-section-text">
                <b className="movie-tile-list-number">1. </b><a className="movie-tile-title" href="https://www.rottentomatoes.com/m/10009075_moon">Moon</a><b className="movie-tile-year"> (2009)</b>
              </div>
            </div>
            <div className="movie-tile-description-section">An astronaut miner extracting the precious moon gas that promises to reverse the Earths energy crisis nears the end of his three-year contract, and makes an ominous discovery in this psychological sci-fi film starring Sam Rockwell and Kevin Spacey. For three long years, Sam Bell has dutifully harvested Helium 3 for Lunar, a company that claims it holds the key to solving humankind's energy crisis. As Sam's contract comes to an end, the lonely astronaut looks forward...</div>
            <div className="movie-tile-people-section">
              <div className="movie-tile-people-director">Director: Duncan Jones</div>
              <div className="movie-tile-mpaa-rating">Rating: R</div>
              <button onClick={this.toggleDescription} className="read-review-button">Read Review</button>
            </div>
            <div className={this.state.showDescription ? "show": "hide"}>Duncan Jones second film, equally smart science fiction as Moon. A really fun action-y mental trip through a seemingly normal sequence of events that gets progressively weirder as you dive deeper into the rabbit hole. Great film, great acting, great directing.</div>
          </div>
        </section>
      </div>
    );
  }
}

export default MovieTile;
