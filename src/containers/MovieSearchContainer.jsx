import React, { Component } from 'react';
import InputField from '../components/InputField';

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
        <InputField />
        {console.log('hello this is movie search container')}
      </div>
    );
  }
}
