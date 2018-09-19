import React from 'react';
import ReactDOM from 'react-dom';
import './env';
import './styles/index.css';
import 'bulma/css/bulma.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';
require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={MovieSearchContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
