import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/main.js";
import thunk from "redux-thunk";

var store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
