import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  state = {
    isLogin: false,
    isLoading: false,
  };

  onLogin = () => {
    this.setState({
      isLogin: true,
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    if (!this.state.isLogin) {
      return <Login onLogin={this.onLogin} />;
    }
    if (this.state.isLoading) {
      return <Spinner size={"30px"} />;
    } else {
      return <Logout onLogout={this.onLogout} />;
    }
  }
}
export default Auth;
