import React from "react";

class Numbers extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   this.props.number === nextProps.number &&
  //   this.props.title === nextProps.title
  //     ? false
  //     : true;
  // }
  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default Numbers;