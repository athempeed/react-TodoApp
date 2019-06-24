import React from "react";
import { connect } from "react-redux";

import * as repositoryActions from "../../store/actions/repositoryActions";
import { isNullOrUndefined } from "util";

class ContentComponent extends React.Component {
  constructor() {
    super();
    this.state = { task: "" };
  }
  addTask() {
    if (!(isNullOrUndefined(this.state.task) || this.state.task === "")) {
      var obj = { userId: 1, id: 9, title: this.state.task, completed: false };
      this.props.onAddTask("", obj, "");
      this.setState({ task: "" });
    }
  }

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter task to add:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Task here "
            required
            value={this.state.task}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button
          type="button"
          onClick={this.addTask.bind(this)}
          className="btn btn-primary"
        >
          Add task
        </button>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: (url, obj, props) =>
      dispatch(repositoryActions.postData(url, obj, props))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent);
