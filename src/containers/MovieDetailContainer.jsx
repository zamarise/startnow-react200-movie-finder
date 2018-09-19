import React, { Component } from 'react';
// import MovieFinderCard from '../components/MovieFinderCard';
import FoundResults from '../components/FoundResults';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { movieDetails: '' };
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgb(0, 155, 234)' }}>
        <FoundResults />
      </div>
    );
  }
}
