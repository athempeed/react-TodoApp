import React from "react";
import "./App.css";

import HeaderComponent from "./components/header/header";
import ContentComponent from "./components/content/content";
import TaskList from "./components/displayTask/displayTask";
function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      <ContentComponent />
      <TaskList />
    </div>
  );
}

export default App;
