'use strict';

import React, { Component } from 'react';

class MovieTile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showReview: false,
      expandSynopsis: false
    };

    this.toggleReview = this.toggleReview.bind(this);
    this.toggleSynopsis = this.toggleSynopsis.bind(this);
  }

  toggleSynopsis() {
    this.setState({expandSynopsis: !this.state.expandSynopsis});
  }

  toggleReview() {
    this.setState({showReview: !this.state.showReview});
  }

  render() {

    const synopsisLength = this.props.synopsis.length;

    //if the synopsis length is longer than 140 characters and has not been expanded by the user,
    //show a shortened synopsis with an ellipses and a more button
    const shorterSynopsis = (
      <div className="movie-tile-description-section">
        {this.props.synopsis} ({this.props.runtime} mins.)
      </div>
    )

    const longerSynopsis = (!this.state.expandSynopsis ?
      <div className="movie-tile-description-section">
        {this.props.synopsis.slice(0,320)}... <text className="movie-tile-description-toggle-text" onClick={this.toggleSynopsis}>more</text> ({this.props.runtime} mins.)
      </div> :
      <div className="movie-tile-description-section">
        {this.props.synopsis} <text className="movie-tile-description-toggle-text" onClick={this.toggleSynopsis}>less</text> ({this.props.runtime} mins.)
      </div>)

    return (
      <div className="app-container">
        <section className="movie-tile-container">
          <div className="movie-tile-image-container">
            <img className="movie-tile-image" src={this.props.coverUrl}></img>
          </div>
          <div className="movie-tile-info-container">
            <div className="movie-tile-title-section-text">
              <text className="movie-tile-list-number">{this.props.id}. </text><a className="movie-tile-title" href={`${this.props.infoLink}`}>{this.props.title}</a><text className="movie-tile-year"> ({this.props.year})</text>
            </div>
            <div className="movie-tile-description-section">{this.props.synopsis.length > 320 ? longerSynopsis : shorterSynopsis}</div>
            <div className="movie-tile-people-section">
              <div className="movie-tile-people-director">Director: {this.props.director}</div>
              <div className="movie-tile-mpaa-rating">Rating: {this.props.rating}</div>
              <button onClick={this.toggleReview} className="read-review-button">{this.state.showReview ? "Close Review" : "Open Review"}</button>
            </div>
            <div className={this.state.showReview ? "show": "hide"}>"{this.props.userReview}"</div>
          </div>
        </section>
      </div>
    );
  }
}

export default MovieTile;
