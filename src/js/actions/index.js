import { ADD_USER, ADD_DOOR } from "../constants/action-types";

export function addUser(payload) {
	return { type: ADD_USER, payload };
}
export function addDoor(payload) {
	return { type: ADD_DOOR, payload };
}
