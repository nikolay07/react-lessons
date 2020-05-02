import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isVisibleSpinner: false,
    };
  }

  handleLogIn = () => {
    this.setState({
      isLoggedIn: true,
    });
    this.showSpinner();
  };

  handleLogOut = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  showSpinner = () => {
    this.setState({
      isVisibleSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isVisibleSpinner: false,
      });
    }, 2000);
  };

  render() {
    const button = !this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogIn} />
    ) : (
      <Logout onLogout={this.handleLogOut} />
    );

    return (
      <div className="main">
        {this.state.isVisibleSpinner ? <Spinner size={50} /> : button}
      </div>
    );
  }
}
export default Auth;
