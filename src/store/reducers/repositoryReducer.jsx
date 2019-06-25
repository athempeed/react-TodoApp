import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
  isAuthenticated: false
};
const executeGetDataSuccess = (state, action) => {
  return {
    ...state,
    data: action.data
  };
};

const executePostDataSuccess = (state, action) => {
  return Object.assign({}, state, {
    data: state.data.concat(action.data)
  });
};

const executePutDataSuccess = (state, action) => {
  // var idx = state.
  var data = Object.assign([], state.data);
  var idx = data.findIndex(x => x.id === action.data.id);
  if (idx >= 0) {
    data[idx].completed = action.data.isCompleted;
  }
  return Object.assign({}, state, {
    data: data
  });
};

const executeLoginDataSuccess = (state, action) => {
  return {
    ...state,
    isAuthenticated: action.data
  };
};

const executeDeleteDataSuccess = (state, action) => {
  var idx = state.data.findIndex(x => x.id === action.data);
  var data = Object.assign([], state.data);
  data.splice(idx, 1);
  return Object.assign({}, state, {
    data: data
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS:
      return executeGetDataSuccess(state, action);
    case actionTypes.POST_DATA_SUCCESS:
      return executePostDataSuccess(state, action);
    case actionTypes.PUT_DATA_SUCCESS:
      return executePutDataSuccess(state, action);
    case actionTypes.DELETE_DATA_SUCCESS:
      return executeDeleteDataSuccess(state, action);
    case actionTypes.LOGIN_DATA_SUCCESS:
      console.log("came here");
      return executeLoginDataSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
