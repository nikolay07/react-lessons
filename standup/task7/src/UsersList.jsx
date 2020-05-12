import React, { Component } from "react";
import User from "./User";
import Pagination from "./Pagination";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const { users } = this.props;
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const usersToDisplay = users.slice(start, end);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
