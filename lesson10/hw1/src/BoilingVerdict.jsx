import React from "react";
const BoilingVerdict = (props) =>
  props.celsius >= 100 ? <p>Вода закипит</p> : <p>Вода не закипит</p>;

export default BoilingVerdict;
