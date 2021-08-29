import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux"
import {logger} from "redux-logger"
import reducers from './reducers';
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
