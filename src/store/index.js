import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import colorReducer from "./reducer";

const store = createStore(colorReducer, applyMiddleware(thunk));

export { store };
