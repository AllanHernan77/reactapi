import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'; // creating the globalized state
import allReducers from './reducers'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"

//const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose


//creating a global store variable that has middleware and imported reducers
let store  =createStore(allReducers, applyMiddleware(thunk))





ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
