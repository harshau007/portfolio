import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Redirect} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
      
      <Redirect path="/"/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

