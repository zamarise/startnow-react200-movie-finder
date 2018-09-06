import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bulma/css/bulma.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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
