import { constants } from "../constants/action-types.js";

const initialState = {
	currentUser: { privileged: false, activated: false, id: Number },
	users: [
		{
			name: "admin", //Only this user can add remove other users and doors
			id: 1,
			access: [1],
			admin: true
		}
	],
	doors: [
		{
			name: "Shop",
			id: 1
		},
		{
			name: "Magazine",
			id: 2
		}
	],
	alert: {
		show: false,
		type: "",
		content: ""
	},
	log: []
};

/* eslint-disable no-unreachable */
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case constants.ADD_USER:
			return {
				...state,
				users: [...state.users.concat(action.payload)]
			};
			break;

		case constants.ADD_DOOR:
			return {
				...state,
				doors: [...state.doors.concat(action.payload)]
			};
			break;

		case constants.REMOVE_USER:
			return {
				...state,
				users: [
					...state.users.filter(user => user.id !== action.payload)
				]
			};
			return {
				...state,
				users: [
					...state.users.filter(user => user.id !== action.payload)
				]
			};
			break;

		case constants.UPDATE_USER: {
			let updatedUsers = state.users.map(user => {
				if (user.id !== action.payload.userId) {
					return user;
				}

				return { ...user, access: action.payload.accesses };
			});

			if (action.payload.userId == state.currentUser.id) {
				let updatedCurrentUser = {
					...state.currentUser,
					access: action.payload.accesses
				};
				return {
					...state,
					users: [...updatedUsers],
					currentUser: { ...updatedCurrentUser }
				};
			} else {
				return {
					...state,
					users: [...updatedUsers]
				};
			}

			break;
		}

		case constants.REMOVE_DOOR:
			return {
				...state,
				doors: [
					...state.doors.filter(door => door.id !== action.payload)
				]
			};
			break;

		case constants.LOGIN:
			return { ...state, currentUser: { ...action.payload } };
			break;

		case constants.LOG_ITEM:
			return {
				...state,
				log: [ ...[].concat(action.payload, state.log)]
			};
			break;

		case constants.LOGOUT:
			return { ...state, currentUser: {} };
			break;

		case constants.TOGGLE_ALERT:
			return { ...state, alert: { ...action.payload } };
			break;

		default:
			return state;
	}
}

/* eslint-enable no-unreachable */

export default rootReducer;
