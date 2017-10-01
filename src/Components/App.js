'use strict';

import React, { Component } from 'react';
import MovieTile from './MovieTile';
import { reviews, movies } from '../data.json';

//css
require('style-loader!./App.css');

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      movies: []
    };

  }

  componentDidMount() {
    this.setState({reviews: reviews});
    this.setState({movies: movies});
  }

  render() {
    const movieList = this.state.movies.map(movie => {
      let userReview = this.state.reviews.find(movieReview => {
        return movieReview["movie-id"] === movie.id
      });

      return (
        <MovieTile
          key={movie.id}
          id={movie.id}
          coverUrl={movie[ "cover-url"]}
          director={movie.director}
          runtime={movie["runtime-in-minutes"]}
          synopsis={movie.synopsis}
          title={movie.title}
          infoLink={movie.url}
          year={movie.year}
          rating={movie.rating.toUpperCase()}
          userReview={userReview.review}
          />
      )
    })

    return (
      <div>
        {movieList}
      </div>
    );
  }
}

export default App;
