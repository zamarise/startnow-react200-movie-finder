import React, { Component } from 'react';

const InputField = props => {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
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
        
        </div>
      </div>
    </div>
  );
};

export default InputField;
