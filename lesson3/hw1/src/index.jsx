import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";

const rootElem = document.querySelector("#root");
ReactDOM.render(
    <Greeting firstName='Nik' lastName='Abramson' birthDate={new Date('1986-01-07T10:09:03.819Z')}/>,
    rootElem
);

