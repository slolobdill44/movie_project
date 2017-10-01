'use strict';

import React, { Component } from 'react';
import MovieTile from './MovieTile';

//css
require('style-loader!./App.css');

class App extends React.Component {

  render() {
    return (
      <div>
        <MovieTile />
      </div>
    );
  }
}

export default App;
