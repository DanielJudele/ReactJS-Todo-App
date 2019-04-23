import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var todoItems = [];
todoItems.push({index: 1, value: "Learn React", details:"Follow the School of Centric training", priority:"", view: false});
todoItems.push({index: 2, value: "Pay the invoices", details:"Pay the invoices online using a credit card.", priority:"", view: false});
todoItems.push({index: 3, value: "Shopping", details: "Go to supermarket all buy food based on the list.", priority:"", view: false});

ReactDOM.render(<App initItems={todoItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
