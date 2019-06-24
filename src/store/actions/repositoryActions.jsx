import * as actionTypes from "./actionTypes";
// import axios from "../../axios/axios";

const getDataSuccess = data => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data: data
  };
};

export const getData = (url, props) => {
  return dispatch => {
    var data = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      },
      {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
      },
      {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
      },
      {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
      }
    ];
    dispatch(getDataSuccess(data));
    // axios
    //   .get(url)
    //   .then(response => {
    //     dispatch(getDataSuccess(response.data));
    //   })
    //   .catch(error => {
    //     //TODO: handle the error when implemented
    //   });
  };
};

const postDataSuccess = response => {
  return {
    type: actionTypes.POST_DATA_SUCCESS,
    data: response
  };
};

export const postData = (url, obj, props) => {
  return dispatch => {
    dispatch(postDataSuccess(obj));
    // axios
    //   .post(url, obj)
    //   .then(response => {
    //     dispatch(postDataSuccess(response));
    //   })
    //   .catch(error => {
    //     //TODO: handle the error when implemented
    //   });
  };
};

const putDataSuccess = response => {
  return {
    type: actionTypes.PUT_DATA_SUCCESS,
    data: response
  };
};

export const putData = (url, props) => {
  return dispatch => {
    dispatch(putDataSuccess(props));
    // axios
    //   .put(url, obj)
    //   .then(response => {
    //     dispatch(putDataSuccess(response));
    //   })
    //   .catch(error => {
    //     //TODO: handle the error when implemented
    //   });
  };
};

const deleteDataSuccess = response => {
  return {
    type: actionTypes.DELETE_DATA_SUCCESS,
    data: response
  };
};

export const deleteData = (url, props) => {
  return dispatch => {
    dispatch(deleteDataSuccess(props.id));
    // axios
    //   .delete(url)
    //   .then(response => {
    //     dispatch(deleteDataSuccess(response));
    //   })
    //   .catch(error => {
    //     //TODO: handle the error when implemented
    //   });
  };
};
