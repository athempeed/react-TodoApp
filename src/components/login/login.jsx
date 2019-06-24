import React from "react";
import "./login.css";

export default class LoginComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Absolute-Center is-Responsive">
            <div id="logo-container">
              <h3>Todo App Login</h3>
            </div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <form action="" id="loginForm">
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="username"
                  />
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock" />
                  </span>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
