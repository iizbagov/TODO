import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { loggerMiddleware } from "../middleware";
import todoReducer from "../todoReducer";

const store = createStore(todoReducer, applyMiddleware(loggerMiddleware));

export default store;
