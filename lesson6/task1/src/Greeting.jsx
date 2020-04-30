import React, { Component } from "react";
import GuestGreeting from "GuestGreeting.jsx";
import UserGreeting from "UserGreeting.jsx";

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
export default Greeting;
