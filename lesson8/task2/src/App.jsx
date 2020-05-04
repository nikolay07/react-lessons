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
      <div className="clock-tgl">
        <button className="clock__btn" onClick={this.toggle}>
          Toggle
        </button>
        {this.state.visible && <Clock offset={0} location={"London"} />}
        {this.state.visible && <Clock offset={3} location={"Kiyv"} />}
        {this.state.visible && <Clock offset={-5} location={"New York"} />}
      </div>
    );
  }
}
export default App;
