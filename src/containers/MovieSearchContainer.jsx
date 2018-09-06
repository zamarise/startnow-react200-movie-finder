import React, { Component } from 'react';

// import BackgroundSearch from '../components/BackgroundSearch';
import { searchMovie } from '../store/actions/searchAction';
import InputField from '../components/InputField';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(searchMovie(this.state.movieName));
  }

  render() {
    return (
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Movie Finder</p>
            <p className="subtitle">Search for movies and view more information by clicking on a movie.</p>
            <form>
              <InputField
                id="search"
                type="text"
                label="Search"
                name="movieName"
                className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleSubmit}
              />
            </form>
          </div>
        </div>
        {console.log('hello this is movie search container')}
      </section>
    );
  }
}
