import { constants } from "../constants/action-types";

export function addUser(payload) {
	return { type: constants.ADD_USER, payload };
}

export function addDoor(payload) {
	return { type: constants.ADD_DOOR, payload };
}

export function removeUser(payload) {
	return { type: constants.REMOVE_USER, payload };
}

export function removeDoor(payload) {
	return { type: constants.REMOVE_DOOR, payload };
}

export function login(payload) {
	return { type: constants.LOGIN, payload };
}
