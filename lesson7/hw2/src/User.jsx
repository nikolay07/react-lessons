import React from "react";

const User = (name, age) => {
  return (
    <div>
      <ul className="users">
        <li className="user">
          <span className="user__name">Bob</span>
          <span className="user__age">21</span>
        </li>
        <li className="user">
          <span className="user__name">Sam</span>
          <span className="user__age">45</span>
        </li>
      </ul>
    </div>
  );
};

export default User;
