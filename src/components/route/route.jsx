import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginComponent from "../../components/login/login";
import HomeComponent from "../../components/home/home";

export default class RouteComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}
