// Imports de React
import React from 'react';
import ReactDom from 'react-dom';

// imports de Readux
// import { Provider } from " react-redux";

import App from './components/App';

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
