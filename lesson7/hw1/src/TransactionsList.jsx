import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const transactionsList = this.props.transactions.map((transaction) => {
      return <Transaction key={transaction.id} {...transaction} />;
    });
    return <ul className="transactions">{transactionsList}</ul>;
  }
}

export default TransactionsList;

// const TransactionsList = ({ transactions }) => {
//   const transactionsList = transactions.map((transaction) => {
//     return <Transaction key={transaction.id} {...transaction} />;
//   });
//   return <ul className="transactions">{transactionsList}</ul>;
// };
