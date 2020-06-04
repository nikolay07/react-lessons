import React, { Component } from "react";

class User extends Component {
  state = {
    userData: null,
  };

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) =>
        this.setState({
          userData,
        })
      );
  };

  componentDidMount() {
    const { match } = this.props;
    this.fetchUser(match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.userId !== prevProps.match.params.userId) {
      this.fetchUser(match.params.userId);
    }
  }

  render() {
    const { userData } = this.state;
    if (!userData) return null;
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{userData.name}</span>
          <span className="user__location">{userData.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
