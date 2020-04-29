import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };
  render() {
    return (
      <div onClick={this.handleClick} className="toggler">
        {this.state.isToggleOn ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggle;