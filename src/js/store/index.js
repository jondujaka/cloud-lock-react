import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import {logger, authentication, addItem} from "../middleware/index";
import {loadState, saveState} from "../utilities";
import throttle from "lodash/throttle";

const savedStore = loadState();

const store = createStore(
	rootReducer,
	savedStore,
	applyMiddleware(
		logger,
		authentication,
		addItem
	)
);

store.subscribe(throttle(()=> {
	saveState(store.getState());
}), 1000);

export default store;