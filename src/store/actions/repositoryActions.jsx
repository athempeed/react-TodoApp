import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios";
import {adalApiFetch} from "../../adlConfig";

const getDataSuccess = data => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data: data
  };
};

export const getData = (url, props) => {
  return dispatch => {
    // var data = [
    //   {
    //     userId: 1,
    //     id: 1,
    //     title: "delectus aut autem",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 2,
    //     title: "quis ut nam facilis et officia qui",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 3,
    //     title: "fugiat veniam minus",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 4,
    //     title: "et porro tempora",
    //     completed: true
    //   },
    //   {
    //     userId: 1,
    //     id: 5,
    //     title:
    //       "laboriosam mollitia et enim quasi adipisci quia provident illum",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 6,
    //     title: "qui ullam ratione quibusdam voluptatem quia omnis",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 7,
    //     title: "illo expedita consequatur quia in",
    //     completed: false
    //   },
    //   {
    //     userId: 1,
    //     id: 8,
    //     title: "quo adipisci enim quam ut ab",
    //     completed: true
    //   }
    // ];
    //dispatch(getDataSuccess(data));
    // adalApiFetch(axios,url).then(response => {
    //   //console.log(response);
    //   dispatch(getDataSuccess(response.data));
    // })
    // .catch(error => {
    //   //TODO: handle the error when implemented
    // });
    // // axios
    //   .get(url)
    //   .then(

      const options = {
        method: 'GET'
    };
    
    //console.log(url1);
    adalApiFetch(axios, url, options)
    .then(response =>{
      dispatch(getDataSuccess(response.data));
    })
    .catch(error => console.error('SERVER ERROR:', error));
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
    //dispatch(postDataSuccess(obj));
    const options = {
      method: 'POST',
      data:obj
  };
  adalApiFetch(axios, url, options)
    .then(response =>{
      //console.log(response.data);
        dispatch(postDataSuccess(response.data));
    })
    .catch(error => console.error('SERVER ERROR:', error));
    // axios
    //   .post(url, obj)
    //   .then(response => {
        
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

export const putData = (url) => {
  return dispatch => {
    const options = {
      method: 'PUT'
  };
    adalApiFetch(axios, url, options)
    .then(response =>{
      //console.log(response.data);
      dispatch(putDataSuccess(response.data));
    })
    .catch(error => console.error('SERVER ERROR:', error));
    // //dispatch(putDataSuccess(props));
    // axios
    //   .put(url)
    //   .then(response => {
        
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

export const deleteData = (url) => {
  return dispatch => {

    const options = {
      method: 'DELETE'
  };
    adalApiFetch(axios, url, options)
    .then(response =>{
     // console.log(response.data);
      dispatch(deleteDataSuccess(response.data));
    })
    .catch(error => console.error('SERVER ERROR:', error));

    // axios
    //   .delete(url)
    //   .then(response => {
    //     dispatch(deleteDataSuccess(response.data));
    //   })
    //   .catch(error => {
    //     //TODO: handle the error when implemented
    //   });
  };
};

const loginDataSuccess = response => {
  return {
    type: actionTypes.LOGIN_DATA_SUCCESS,
    data: response
  };
};

export const Login = (url, props) => {
  return dispatch => {
    //console.log("ddd", props);
    dispatch(loginDataSuccess(true));
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

const loginUpdateSuccess = response => {
  return {
    type: actionTypes.AUTHENTICATE_DATA_SUCCESS,
    data: response
  };
};

export const onUpdateIsAuthenticated = (url, isAuthenticated) => {
  //console.log('dddd',isAuthenticated);
  return dispatch => {
    //console.log("ddd", isAuthenticated);
    dispatch(loginUpdateSuccess(isAuthenticated));
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

