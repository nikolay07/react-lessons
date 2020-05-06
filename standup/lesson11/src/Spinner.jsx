import React from "react";

const Spinner = (props) => {
  console.log(props);
  const { size } = props;
  const style = {
    width: size,
    height: size,
  };
  return <span className="spinner" style={style}></span>;
};

export default Spinner;
