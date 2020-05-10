import React, { Component } from "react";

class ProductsList extends Component {
  render() {
    const total = this.props.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    const cartList = this.props.cartItems.map((elem) => {
      return (
        <li className="products__list-item" key={elem.id}>
          <span className="products__item-name">{elem.name}</span>
          <span className="products__item-price">${elem.price}</span>
        </li>
      );
    });
    return (
      <div className="products">
        <ul className="products__list">{cartList}</ul>
        <div className="products__total">Total: ${total}</div>
      </div>
    );
  }
}

export default ProductsList;
