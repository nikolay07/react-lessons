import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        <div>{this.state.visible && <Clock />}</div>
      </div>
    );
  }
}
export default App;
