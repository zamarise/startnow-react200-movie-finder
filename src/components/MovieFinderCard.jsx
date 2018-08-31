import React, { Component } from 'react';

export default class MovieFinderCard extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-content">
          <article className="media">
            <figure className="media-left">
              <p className="image">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                  alt="Movie cover"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <h1>John Smith</h1> <h3>@johnsmith</h3>
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  <br />
                  <a class="button is-large is-fullwidth">Movie Information</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

// export default className MovieFinderCard extends Component {
//   render() {
//     return <div classNameName="card">{this.props.children}</div>;
//   }
// }
