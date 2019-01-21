import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import logger from "../middleware/index";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;