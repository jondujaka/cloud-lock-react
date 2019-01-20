import { constants } from "../constants/action-types.js";

const initialState = {
	currentUser: { privileged: false, activated: false, id: Number },
	users: [
		{
			name: "admin", //Only this user can add remove other users and doors
			id: 1,
			access: [1, 2],
			admin: true
		}
	],
	doors: [
		{
			name: "Door 1",
			id: 1
		}
	],
	alert: {
		show: true,
		type: String,
		content: 'asd'
	}

};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case constants.ADD_USER:
			return Object.assign({}, state, {
				users: state.users.concat(action.payload)
			});
			break;

		case constants.ADD_DOOR:
			return Object.assign({}, state, {
				doors: state.doors.concat(action.payload)
			});
			break;

		case constants.REMOVE_USER:
			return Object.assign({}, state, {
				users: [
					...state.users.filter(user => user.id !== action.payload)
				]
			});
			break;

		case constants.UPDATE_USER:
			return state;
			break;

		case constants.REMOVE_DOOR:
			console.log(action.payload);
			return Object.assign({}, state, {
				doors: [
					...state.doors.filter(door => door.id !== action.payload)
				]
			});
			break;

		case constants.LOGIN:
			let newUser = {}

			console.log("login");
			state.users.forEach(user => {
				if (user.name.toLowerCase() === action.payload.toLowerCase()) {
					newUser.activated = true;
					newUser.privileged = user.admin;
					newUser.id = user.id;
					newUser.access = [...user.access];
				}
			});

			if (newUser.activated) {
				return Object.assign({}, state, {
					currentUser: {...newUser}
				});
			} else {
				return state;
			}

			break;

		case constants.LOGOUT:
			return Object.assign({}, state, {
				currentUser: {}
			});
			break;

		case constants.TOGGLE_ALERT:
			return Object.assign({}, state, {
				alert: {
					...action.payload
				}
			});
			break;

		default:
			return state;
	}
}
export default rootReducer;
