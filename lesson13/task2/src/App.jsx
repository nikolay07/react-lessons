import React, { Component } from "react";
import Home from "./Home";
import Products from "./Products";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/products">Products</Link>{" "}
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products" component={Products} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
