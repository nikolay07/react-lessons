import React, { Component } from "react";
import transactions from "./Transaction.jsx";

const TransactionsList = (transactions) => {
  return (
    <>
      <ul className="transactions">
        <li className="transaction">
          <span className="transaction__date">10 Jan</span>
          <span className="transaction__time">19:08</span>
          <span className="transaction__assets">USD → EUR</span>
          <span className="transaction__rate">0.8</span>
          <span className="transaction__amount">1,200</span>
        </li>
        <li className="transaction">
          <span className="transaction__date">10 Jan</span>
          <span className="transaction__time">19:01</span>
          <span className="transaction__assets">EUR → USD</span>
          <span className="transaction__rate">1.1</span>
          <span className="transaction__amount">100</span>
        </li>
      </ul>
    </>
  );
};
export default TransactionsList;
