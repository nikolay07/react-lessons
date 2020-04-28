import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Search.jsx'
import './index.scss';

const rootElement = document.querySelector('#root');

// const Greeting = ()=>{
//   return (<div>1</div>)
// }


ReactDOM.render(
  <Greeting name="Nik"/>,
  rootElement
)