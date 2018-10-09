import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// export const initialize = (element_id, sort="gold") => {
  // ReactDOM.render(<App sort={sort} />, element_id);
// }

// TODO: need to take these two as params
const sort = "gold";
const element_id = "medal-widget"

ReactDOM.render(<App sort={sort}/>, document.getElementById(element_id));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
