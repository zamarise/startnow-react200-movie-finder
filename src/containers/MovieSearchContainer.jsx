import React, { Component } from 'react';
import BackgroundSearch from '../components/BackgroundSearch';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
    };
  }

  render() {
    return (
      <div>
        <BackgroundSearch />
        {console.log('hello this is movie search container')}
      </div>
    );
  }
}
