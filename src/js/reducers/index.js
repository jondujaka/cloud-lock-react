import { ADD_USER, ADD_DOOR } from "../constants/action-types.js";

const initialState = {
	name: "Asd",
	users: [
		{
			name: "Name 1",
			id: 1,
			acces: [1, 2]
		},
		{
			name: "Name 2",
			id: 2,
			acces: [2]
		},
		{
			name: "Name 3",
			id: 3,
			acces: [1]
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
		case ADD_USER:
			return Object.assign({}, state, {
				users: state.users.concat(action.payload)
			});
			break;

		case ADD_DOOR:
			return Object.assign({}, state, {
				doors: state.doors.concat(action.payload)
			});
			break;

		default:
			return state;
	}
}
export default rootReducer;
