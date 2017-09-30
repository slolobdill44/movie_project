'use strict';

import React, { Component } from 'react';

//css
require('style-loader!./App.css');

class App extends Component {


  render() {
    return (
      <div>
        <h1>Movie Reviews</h1>
        <section className="movie-tile-container">
          <div className="movie-tile-image-container">
            <img className="movie-tile-image" src="../../public/images/moon-2009.jpg"></img>
          </div>
          <div className="movie-tile-info-container">
            <div className="movie-tile-title-section">
              <div className="movie-tile-title-section-text">
                <b className="movie-tile-list-number">1. </b><b className="movie-tile-title">Moon <b className="movie-tile-year">(2009)</b></b>
              </div>

              <div className="movie-tile-rating">Rating: 5</div>
            </div>
            <div className="movie-tile-description-section">An astronaut miner extracting the precious moon gas that promises to reverse the Earth's energy crisis nears the end of his three-year contract, and makes an ominous discovery in this psychological sci-fi film starring Sam Rockwell and Kevin Spacey. For three long years, Sam Bell has dutifully harvested Helium 3 for Lunar, a company that claims it holds the key to solving humankind's energy crisis. As Sam's contract comes to an end, the lonely astronaut looks forward...</div>
            <div className="movie-tile-people-section">
              <div className="movie-tile-people-director">Director: Duncan Jones</div>
              <div className="movie-tile-people-rating">Rating: R</div>
              <button className="add-watchlist-button">Add to Watchlist</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
