import { constants } from "../constants/action-types.js";
import { logItem } from "../actions/index";

const logger = store => next => action => {

	if(action.type === constants.ACCESS_DOOR){
		let hasAccess = false;

		let currentUser = store.getState().currentUser;
		let allUsers = store.getState().users;

		currentUser.access.map(access =>{
			if(access === action.payload){
				hasAccess = true;
			}
		});



		let loggedUser = allUsers.filter(user => {
			return user.id === currentUser.id;
		});

		let logType = hasAccess ? 'denied' : 'authorized';

		store.dispatch(logItem({user: loggedUser, logType, timestamp: Date().toLocaleString()}))
	}

	return next(action);
}

export default logger;

