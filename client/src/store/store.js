import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/main.js";
// test
import thunkMiddleWare from "redux-thunk";

var store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare)
);

export default store;
