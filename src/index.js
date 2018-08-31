import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bulma/css/bulma.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={MovieSearchContainer} />
        <Route path="/movie/:id" component={MovieDetailContainer} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
