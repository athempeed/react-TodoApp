import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const Authenticate = Comp => {
  class AuthenticateIn extends React.Component {
    componentWillMount() {
      console.log("this.props.isAuthenticated", this.props.isAuthenticated);
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
