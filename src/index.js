import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import repositoryReducer from "./store/reducers/repositoryReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { runWithAdal } from "react-adal";
import { authContext, callAccessToken } from "./adlConfig";


require('dotenv').config();
const store = createStore(repositoryReducer, applyMiddleware(thunk));


const DO_NOT_LOGIN = false;
runWithAdal(authContext, () => {
  console.log(process.env);
  callAccessToken().then((token) => {
   // console.log(token)
   console.log("successfully get success token");
})
//console.log(authContext);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
},DO_NOT_LOGIN);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
