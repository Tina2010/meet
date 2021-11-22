import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
/* import * as serviceWorkerRegistration from './serviceWorkerRegistration'; */
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import * as atatus from 'atatus-spa';
atatus.config('5ca33d12b75f48faa3932e086e263109').install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register(); 

reportWebVitals();