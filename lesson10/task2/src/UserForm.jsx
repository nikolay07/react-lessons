import React from "react";

class UserForm extends React.Component {
  render() {
    return (
      <form className="user-form">
        <input
          type="text"
          name="firstName"
          className="user-form__input"
        />
        <input
          type="text"
          name="lastName"
          className="user-form__input"
        />
      </form>
    );
  }
}

export default UserForm;
