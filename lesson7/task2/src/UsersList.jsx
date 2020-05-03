import React from "react";
import users from "./Users.jsx";

const UsersList = ({ users }) => {
  return (
    <div>
      <button className="btn">-</button>
      <ul className="users">
        <li className="user">
          <span className="user__name">Bob</span>
          <span className="user__age">21</span>
        </li>
        <li className="user">
          <span className="user__name">Tom</span>
          <span className="user__age">17</span>
        </li>
        ...
        <li className="user">
          <span className="user__name">Sam</span>
          <span className="user__age">45</span>
        </li>
      </ul>
    </div>
  );
};
export default UsersList;
