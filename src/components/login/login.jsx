import React from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

import * as repositoryActions from "../../store/actions/repositoryActions";
import "./login.css";
import { isNullOrUndefined } from "util";

let url = "/api/user";
class LoginComponent extends React.Component {


  constructor() {
    super();
    this.state = { username: "", password: "" };
  }


  componentWillMount(){
    //console.log('came',window.sessionStorage["adal.state.login"]);
    if(!isNullOrUndefined(window.sessionStorage["adal.state.login"])) {
      this.props.onUpdateIsAuthenticated("",true);
      //console.log("this.props.isAuthenticated", this.props.isAuthenticated);
      this.props.history.push("/home");
    }
    else{
      this.props.history.push("/");
    }
    
  }
  submitLogin = () => {
    var request = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.onLogin(url, request);
    this.props.history.push("/home");
  };

  handleChange = event => {
    if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    } else if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Absolute-Center is-Responsive">
            <div id="logo-container">
              <h3>Todo App Login</h3>
            </div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              {/* <form action="" id="loginForm"> */}
              <div className="form-group input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user" />
                </span>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
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
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  onClick={this.submitLogin}
                  className="btn btn-primary btn-block"
                >
                  Login
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
 // console.log(state);
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapStateToDispatch = dispatch => {
  return {
    onLogin: (url, request) => dispatch(repositoryActions.Login(url, request)),
    onUpdateIsAuthenticated: (url, request) => dispatch(repositoryActions.onUpdateIsAuthenticated(url, request))
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(LoginComponent);
