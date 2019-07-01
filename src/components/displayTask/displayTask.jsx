import React from "react";
import { connect } from "react-redux";
import Aux from "../hoc/Auxiliary";

import * as repositoryActions from "../../store/actions/repositoryActions";
import "./displayTask.css";
import { isNullOrUndefined } from "util";



class TaskList extends React.Component {
  componentDidMount = () => {
    let url = "/api/todo";
    this.props.onGetData(url, null);
  };

  updateTask(id) {
    //console.log(id);
    let url = "/api/todo";
    if (!isNullOrUndefined(id)) {
      url+="/"+id;
      this.props.onUpdateData(url);
    }
  }

  deleteTask(id) {
    let url = "/api/todo";
    if (!isNullOrUndefined(id)) {
      url+="/"+id;
      this.props.onDeleteData(url);
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
                        <td>{value.task}</td>
                        <td>{value.status.toString()}</td>
                        <td>
                          <button
                            onClick={this.updateTask.bind(this, value.id)}
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
    onUpdateData: (url) =>
      dispatch(repositoryActions.putData(url)),
    onDeleteData: (url) =>
      dispatch(repositoryActions.deleteData(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
