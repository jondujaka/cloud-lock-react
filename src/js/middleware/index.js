import { constants } from "../constants/action-types.js";
import { timeStamp } from "../utilities";
import { logItem, toggleAlert } from "../actions/index";

const logger = store => next => action => {

	if(action.type === constants.ACCESS_DOOR){
		let hasAccess = false;

		let currentUser = store.getState().currentUser;
		let allUsers = store.getState().users;

		currentUser.access.map(access =>{
			if(access === action.payload.id){
				hasAccess = true;
			}
		});

		let loggedUser = allUsers.find(user => {
			return user.id === currentUser.id;
		});

		let logType = hasAccess ? 'authorized' : 'denied';

		let alertObj;

		if(hasAccess){
			alertObj = {
				type: 'success',
				content: 'Access granted!',
				show: true
			}
		} else {
			alertObj = {
				type: 'error',
				content: 'Access denied!',
				show: true
			}
		};

		store.dispatch(toggleAlert(alertObj));

		store.dispatch(logItem({
			user: loggedUser,
			door: action.payload.name,
			logType,
			timestamp: timeStamp()
		}));
	}

	return next(action);
}

export default logger;

