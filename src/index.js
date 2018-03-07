import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import './assets/icons/font-mfizz-2.4.1/font-mfizz.css';
import './assets/icons/fontawesome-free-5.0.6/web-fonts-with-css/css/fontawesome.min.css'
import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App/>
  </Router>, document.getElementById('root'));
registerServiceWorker();
