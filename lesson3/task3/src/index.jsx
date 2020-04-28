import React from 'react';
import ReactDOM from 'react-dom';
import Comenting from './Comment.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');


ReactDOM.render(
  <Comenting name="Nik"/>,
  rootElement
)