import React, { Component } from 'react';
import MovieFinderCard from '../components/MovieFinderCard';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { movieDetails: '' };
  }

  render() {
    return (
      <div>
        <MovieFinderCard />
        <h1>Movie Detail Container</h1>
        <p>Viewing movie {this.props.match.params.id}</p>
        {console.log(this.props.match.params.id)}
        {console.log('hello this is movie DETAIL container')}
      </div>
    );
  }
}
