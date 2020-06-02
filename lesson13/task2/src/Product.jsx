import React from "react";
import { Link } from "react-router-dom";

const Product = ({ match }) => {
  return (
    <div className="page__content">
      Product is a {match.params.productId}
    </div>
  );
};

export default Product;
