import React from "react";
import ProductList from "./ProductList";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="column">
        <ProductList />
      </div>
    );
  }
}

export default ShoppingCart;
