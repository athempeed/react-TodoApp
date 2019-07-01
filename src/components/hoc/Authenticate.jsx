import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { isNullOrUndefined } from "util";

const Authenticate = Comp => {
  class AuthenticateIn extends React.Component {
    componentWillMount() {
      if(isNullOrUndefined(window.sessionStorage["adal.error"] !=null)) {
        this.props.isAuthenticated =true;
        console.log("this.props.isAuthenticated", this.props.isAuthenticated);
      }
      
    }
    render() {
      return this.props.isAuthenticated ? (
        <Comp {...this.props} />
      ) : (
        <Redirect to="/" />
      );
    }
  }
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.isAuthenticated
    };
  };

  return connect(mapStateToProps)(AuthenticateIn);
};

export default Authenticate;
