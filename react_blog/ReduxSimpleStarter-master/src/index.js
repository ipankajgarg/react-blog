import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,browserHistory} from 'react-router'; //route will decide what to serve on the screen and browser history used to manages the url

import reducers from './reducers';
import routes from './routes';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
