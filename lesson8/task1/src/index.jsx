import React from "react";
import ReactDOM from "react-dom";
import Life from "./Life";
import "./index.scss";

const root = document.querySelector("#root");
const text = [
  {
    "constructor:": "good place to create state",
  },
  { "componentDidMount:": "API calls, subscriptions" },
  {
    "shouldComponentUpdate(nextProps, nextState):":
      "decide to render or not to render",
  },
  {
    "componentDidUpdate(prevProps, prevState):":
      "some updates based on new props",
  },
  {
    "componentWillUnmount():":
      "cleanup before DOM related to component will be removed",
  },
  {
    "return:": "React element to build DOM",
  },
];
ReactDOM.render(<Life text={text} />, root);
