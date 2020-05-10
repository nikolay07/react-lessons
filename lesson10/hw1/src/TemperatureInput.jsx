import React, { Component } from "react";

class TemperatureInput extends Component {
  render() {
    const { scale, onTemperatureChange, temperature } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input
          name={scale}
          onChange={onTemperatureChange}
          value={temperature}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
