import React, { Component } from 'react';
import InputField from './InputField';
import MovieFinderCard from './MovieFinderCard';

export default class FoundResults extends Component {
  render() {
    return (
      <section className="hero is-info is-large">
        <div className="content" style={{ backgroundColor: 'rgb(0, 155, 234)' }}>
          <h1 />
          <h1>Search Results</h1>
          <p>
            <MovieFinderCard />
          </p>
          <h3 className="container has-text-centered">Didn't like your results? Try searching again.</h3>
          <p>
            <InputField />
          </p>
          <h1 />
        </div>
      </section>
    );
  }
}

// return (
//   <section className="hero is-info is-large">
//     <div className="hero-body">
//       <div className="container has-text-centered is-fluid">
//         <p className="title">Movie Finder</p>
//         <p className="subtitle">Search for movies and view more information by clicking on a movie.</p>
//         <InputField />
//       </div>
//     </div>
//   </section>
