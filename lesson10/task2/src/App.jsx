import React from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart />
          <Profile />
        </main>
      </div>
    );
  }
}

export default App;
