import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import "./index.scss";

const root = document.querySelector("#root");
const users = [
  {
    id: "id-01",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-02",
    age: 45,
    name: "Sam",
  },
  {
    id: "id-03",
    age: 34,
    name: "Oleg",
  },
  {
    id: "id-04",
    age: 29,
    name: "Ivan",
  },
  {
    id: "id-05",
    age: 37,
    name: "Artem",
  },
  {
    id: "id-06",
    age: 29,
    name: "Klara",
  },
];
// const newUsers = users.map((user, index) => {
//   return { ...user, id1: index };
// });
console.log(newUsers);
ReactDOM.render(<UsersList users={users} />, root);
