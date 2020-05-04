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
        <button className="clock__btn" onClick={this.toggle}>
          Toggle
        </button>
        <div>
          {this.state.visible && <Clock offset={0} location={"London"} />}
        </div>
        <div>
          {this.state.visible && <Clock offset={3} location={"Kiyv"} />}
        </div>
        <div>
          {this.state.visible && <Clock offset={-5} location={"New York"} />}
        </div>
      </div>
    );
  }
}
export default App;
