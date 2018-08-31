import React, { Component } from 'react';

export default class MovieFinderCard extends Component {
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          {' '}
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Find a movie" />
            </div>
            <div className="control">
              <a className="button is-success">Search</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
