import React from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxiliary";

import * as repositoryActions from "../../store/actions/repositoryActions";
import "./displayTask.css";
import { isNullOrUndefined } from "util";

class TaskList extends React.Component {
  componentDidMount = () => {
    let url = "/api/owner";
    this.props.onGetData(url, null);
  };

  updateTask(obj) {
    if (!isNullOrUndefined(obj)) {
      this.props.onUpdateData("", obj);
    }
  }

  deleteTask(id) {
    if (!isNullOrUndefined(id)) {
      this.props.onDeleteData("", { id: id });
    }
  }

  render() {
    return (
      <Aux>
        <div className="container">
          <div
            className="container-fluid  overflow-auto"
            style={{
              height: 500,
              overflowY: "scroll"
            }}
          >
            <table className="table table-striped table-bordered table-responsive text-center">
              <thead className="thead-dark">
                <tr>
                  <td>Sr No.</td>
                  <td>Task</td>
                  <td>Status</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {this.props.data != null && this.props.data.length > 0 ? (
                  this.props.data.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.completed.toString()}</td>
                        <td>
                          <button
                            onClick={this.updateTask.bind(this, {
                              id: value.id,
                              isCompleted: !value.completed
                            })}
                            className="btn btn-primary mr-3"
                          >
                            Update
                          </button>
                          |
                          <button
                            onClick={this.deleteTask.bind(this, value.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetData: (url, props) => dispatch(repositoryActions.getData(url, props)),
    onUpdateData: (url, props) =>
      dispatch(repositoryActions.putData(url, props)),
    onDeleteData: (url, props) =>
      dispatch(repositoryActions.deleteData(url, props))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
