import React from "react";

class Numbers extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="number">
          <span className="number__title">All numbers</span>
          <span className="number__value">83</span>
        </div>
        <div className="number">
          <span className="number__title">Just 17</span>
          <span className="number__value">17</span>
        </div>
      </div>
    );
  }
}

export default Numbers;
