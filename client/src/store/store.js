import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/main.js";
import thunkMiddleWare from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleWare))
);

export default store;
