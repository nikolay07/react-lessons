import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  state = { temperature: "" };
  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };
  render() {
    const { temperature } = this.state.temperature;
    return (
      <fieldset>
        <legend>Введите температуру в градусах Цельсия:</legend>
        <input value="temperature" onChange={this.handleChange} />
        <BoilingVerdict celsium={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;
