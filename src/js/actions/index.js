import { constants } from "../constants/action-types";

const addUser = payload => {
	return { type: constants.ADD_USER, payload };
};

const addDoor = payload => {
	return { type: constants.ADD_DOOR, payload };
};

const removeUser = payload => {
	return { type: constants.REMOVE_USER, payload };
};

const updateUser = payload => {
	return { type: constants.UPDATE_USER, payload };
};

const removeDoor = payload => {
	return { type: constants.REMOVE_DOOR, payload };
};

const accessDoor = payload => {
	return { type: constants.ACCESS_DOOR, payload };
};

const toggleAlert = payload => {
	return { type: constants.TOGGLE_ALERT, payload };
};

const logItem = payload => {
	return { type: constants.LOG_ITEM, payload };
};

const login = payload => {
	return { type: constants.LOGIN, payload };
};

const logout = () => {
	return { type: constants.LOGOUT };
};

export {
	addUser,
	addDoor,
	removeUser,
	updateUser,
	removeDoor,
	accessDoor,
	toggleAlert,
	logItem,
	login,
	logout
};
