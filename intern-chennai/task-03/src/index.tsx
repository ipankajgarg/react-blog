import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from "redux";
// import { Router, BrowserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers/index';
// import Routes from './routes';
import App from './components/App';
import Content from './components/Content';
import Recent from './components/Recent';
// import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route exact={true} path="/" component={Content} />
        <Route exact={true} path="/content1" component={Recent} />
        <Route exact={true} path="/content2" component={Recent} />
        <Route exact={true} path="/content3" component={Recent} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
