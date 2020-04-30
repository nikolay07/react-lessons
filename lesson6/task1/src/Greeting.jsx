import React, { Component } from "react";

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
export default Greeting;
