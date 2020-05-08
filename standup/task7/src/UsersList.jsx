import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <User user={user} />
      ))}
    </ul>
  );
};

export default UsersList;

// class UsersList extends Component {
//   render() {
//     return (
//       <div className="pagination">
//         <div>{this.props.users.length}</div>
//         <button className="btn">←</button>
//         <span className="pagination__page">1</span>
//         <button className="btn">→</button>
//       </div>
//     );
//   }
// }

// class UsersList extends Component {
//   state = {
//     currentPage: 0,
//     itemsPerPage: 3,
//   };

//   goPrev = () => {
//     this.setState({
//       currentPage: this.state.currentPage - 1,
//     });
//   };

//   goNext = () => {
//     this.setState({
//       currentPage: this.state.currentPage + 1,
//     });
//   };

//   render() {
//     const { currentPage, itemsPerPage } = this.state;
//     const firstIndex = currentPage * itemsPerPage;
//     const lastIndex = firstIndex + itemsPerPage;
//     const usersList = this.props.users.slice(firstIndex, lastIndex);
//     return (
//       <div>
//         <Pagination
//           goPrev={this.goPrev}
//           goNext={this.goNext}
//           currentPage={currentPage}
//           itemsPerPage={itemsPerPage}
//           totalItems={this.props.users.length}
//         />
//         <ul className="users">
//           {usersList.map((user) => (
//             <User key={user.id} {...user} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default UsersList;
