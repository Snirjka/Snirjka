import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
/* import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger'; */
import registerServiceWorker from './registerServiceWorker';

import './style.css';
/* import Reducers from './reducers/'; */
import App from './components/App';

/* const logger = createLogger();
const store = createStore(
    Reducers,
    applyMiddleware(thunk, promise, logger)
); */


/* <Provider store={store}></Provider> */
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
