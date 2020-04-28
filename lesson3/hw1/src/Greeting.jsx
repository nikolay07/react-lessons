import React from "react";

const calcAge = (date) =>
Math.floor(((new Date().getTime() - new Date(date)) / (24 * 3600 * 365 * 1000)))

function Greeting(props) {
  return (<div className="reeting">My name is {props.firstName} {props.lastName}. I`m {calcAge(props.birthDate)} years old.</div>);
}
export default Greeting;