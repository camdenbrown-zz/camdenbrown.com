import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('root'));
registerServiceWorker();
