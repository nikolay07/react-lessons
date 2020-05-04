import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
