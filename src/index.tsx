import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/home';
import GlobalStyle from './globalStyled';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);