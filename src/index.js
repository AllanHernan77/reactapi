import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'; // creating the globalized state
import allReducers from './reducers'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
//STORE -> globalized state

//const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose

let store  =createStore(allReducers, applyMiddleware(thunk))

//ACTION  describes what you want to do


//REDUCER how actions transforms state


//DISPATCH dispatch the action to the reducer




ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
