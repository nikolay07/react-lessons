import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };
  handleCelsiusChange = (e) => {
    this.setState({
      scale: "c",
      temperature: e.target.value,
    });
  };

  handleFahrenheitChange = (e) => {
    this.setState({
      scale: "f",
      temperature: e.target.value,
    });
  };

  render() {
    const { temperature } = this.state;
    const celsius =
      this.state.scale === "f"
        ? tryConvert(temperature, toCelsius)
        : this.state.temperature;
    const fahrenheit =
      this.state.scale === "c"
        ? tryConvert(temperature, toFahrenheit)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale={scaleNames.c}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={scaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
