import React from 'react';
import './index.css'; // Adjust the path to where your CSS file is located
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store1'; // Adjust the path as needed
import App from './App'; // Your main component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
