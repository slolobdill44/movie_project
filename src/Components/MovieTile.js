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
            <img className="movie-tile-image" src={this.props.coverUrl}></img>
          </div>
          <div className="movie-tile-info-container">
            <div className="movie-tile-title-container">
              <div className="movie-tile-title-section-text">
                <b className="movie-tile-list-number">{this.props.id}. </b><a className="movie-tile-title" href={`${this.props.infoLink}`}>{this.props.title}</a><b className="movie-tile-year"> ({this.props.year})</b>
              </div>
            </div>
            <div className="movie-tile-description-section">{this.props.synopsis}</div>
            <div className="movie-tile-people-section">
              <div className="movie-tile-people-director">Director: {this.props.director}</div>
              <div className="movie-tile-mpaa-rating">Rating: {this.props.rating}</div>
              <button onClick={this.toggleDescription} className="read-review-button">Read Review</button>
            </div>
            <div className={this.state.showDescription ? "show": "hide"}>{this.props.userReview}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default MovieTile;
