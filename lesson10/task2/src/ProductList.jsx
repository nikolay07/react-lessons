import React from "react";

class ProductList extends React.Component {
  state = {
    cartItems: [
      { id: "1", name: "iPhone 11", price: 999 },
      { id: "2", name: "iPad Pro", price: 799 },
    ],
  };
  render() {
    const total = this.state.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    return (
      <div className="products">
        <ul className="products__list">
          {this.state.cartItems.map(({ id }) => {
            <li key={id} className="">
              <span className=""></span>
              <span className=""></span>
            </li>;
          })}
        </ul>
        <div className="products__total"></div>
      </div>
    );
  }
}

export default ProductList;
