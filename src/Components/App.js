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
    // console.log(this.state);
    // console.log(movies);
  }

  render() {
    const movieList = this.state.movies.map(movie => {
      return (
        <MovieTile
          id={movie.id}
          coverUrl={movie["cover-url"]}
          director={movie.director}
          runtime={movie["runtime-in-minutes"]}
          synopsis={movie.synopsis}
          title={movie.title}
          url={movie.url}
          year={movie.year}
          userReview={this.state.reviews[movie.id]}
          />
      )
    })

    return (
      <div>
        <MovieTile />
      </div>
    );
  }
}

export default App;
