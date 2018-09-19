import React, { Component } from 'react';

// import BackgroundSearch from '../components/BackgroundSearch';
import { searchMovieSubmit } from '../store/actions/searchAction';
import InputField from '../components/InputField';

export default class MovieSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviePoster: '',
      movieTitle: '',
      moviePlot: '',
      movieYear: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // handleButton(e) {
  //   const { dispatch } = this.props;

  //   dispatch(searchMovieSubmit(e.target.value));
  // }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(searchMovieSubmit(this.state.name));
  }

  render() {
    return (
      <section className="section hero is-info is-large is-fullheight">
        <div className="hero-content has-text-centered">
          <p className="title">Movie Finder</p>
          <p className="subtitle">Search for movies and view more information by clicking on a movie.</p>
          <form onSubmit={this.handleSubmit}>
            <InputField
              id="search"
              type="text"
              label="Search"
              name="movieTitle"
              className="form-control"
              value={this.state.movieTitle}
              onChange={this.handleChange}
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </section>
    );
  }
}
