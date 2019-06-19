import React from "react";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Todo App</h2>
          <p>Welcome to Todo application</p>
        </div>
      </div>
    );
  }
}
