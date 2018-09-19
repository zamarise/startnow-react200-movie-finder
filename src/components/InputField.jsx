import React, { Component } from 'react';

const InputField = props => {
  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-three-fifths is offset-one-fifth">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              onChange={props.inputAction}
              type={props.type}
              id={props.id}
              className="input"
              placeholder="Find a movie"
            />
          </div>
          <div class="control">
            <a class="button is-primary">Search</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
