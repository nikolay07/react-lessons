import React from "react";
import UsersList from "UsersList.jsx";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn">←</button>
      <span className="pagination__page">1</span>
      <button className="btn">→</button>
    </div>
  );
};
export default Pagination;
