import React from "react";
import User from "./User";
import Filter from "./Filter";

class UsersList extends React.Component {
  state = {
    filterText: "",
    count: this.props.users.length,
  };

  onChange = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const { filterText } = this.state;
    const usersList = this.props.users
      .filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .map((user) => {
        return <User key={user.id} {...user} />;
      });
    return (
      <div>
        <div className="filter">
          <Filter
            filterText={filterText}
            count={usersList.length}
            onChange={this.onChange}
          />
        </div>
        <ul className="users">{usersList}</ul>
      </div>
    );
  }
}

export default UsersList;
