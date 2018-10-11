import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TODO: simple, but doesn't work in IE
const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");

ReactDOM.render(<App sort={sort}/>, document.getElementById("root"));
