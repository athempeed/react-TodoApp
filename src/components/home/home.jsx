import React from "react";

import HeaderComponent from "../header/header";
import ContentComponent from "../content/content";
import TaskList from "../displayTask/displayTask";

import Aux from "../../hoc/Auxiliary";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <Aux>
        <HeaderComponent />
        <ContentComponent />
        <TaskList />
      </Aux>
    );
  }
}
