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
	]
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

		case constants.REMOVE_DOOR:
			console.log(action.payload);
			return Object.assign({}, state, {
				doors: [
					...state.doors.filter(door => door.id !== action.payload)
				]
			});
			break;

		case constants.LOGIN:
			let activated, privileged, id;
			let access = [];

			state.users.forEach(user => {
				if (user.name.toLowerCase() === action.payload.toLowerCase()) {
					activated = true;
					privileged = user.admin;
					id = user.id;
					access = [...user.access];
				}
			});

			if (activated) {
				return Object.assign({}, state, {
					currentUser: {
						activated,
						privileged,
						id,
						access
					}
				});
			} else {
				return state;
			}

			break;

		default:
			return state;
	}
}
export default rootReducer;
