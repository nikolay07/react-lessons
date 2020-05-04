import React, { Component } from "react";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

// class Auth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   onLogin = () => {
//     this.setState({
//       isLoggedIn: true,
//     });
//   };

//   onLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

//   render() {
//     const { isLoggedIn } = this.state;
//     if (isLoggedIn) {
//       return <Logout onLogout={this.onLogout} />;
//     }
//     return <Login onLogin={this.onLogin} />;
//   }
// }

// export default Auth;

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}
export default Auth;

//render() {
// let button;
// const button = this.state.isLoggedIn ? (
//   <button onClick={this.handleLogout}>Logout</button>
// ) : (
//   <button onClick={this.handleLogin}>Login</button>
// );
// if (this.state.isLoggedIn) {
//   button = (
//     <button className="btn login" onClick={this.handleLogout}>
//       Logout
//     </button>
//   );
// } else {
//   button = <Login onClick={this.handleLogin} />;
//   <button className="btn logout" onClick={this.handleLogin}>
//     Login
//   </button>;
// }
