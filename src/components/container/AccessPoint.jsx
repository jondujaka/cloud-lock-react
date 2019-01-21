import React, { Component } from "react";
import { connect } from "react-redux";

import { login, toggleAlert, accessDoor } from "../../js/actions/index";
import Input from "../presentational/Input.jsx";

import "./AccessPoint.css";

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user)),
		toggleAlert: alert => dispatch(toggleAlert(alert)),
		accessDoor: door => dispatch(accessDoor(door))
	};
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		doors: state.doors
	};
};

const ConnectedAccessPoint = props => {
	const auth = door => {
		let hasAccess = false;

		props.accessDoor(door);
		// props.currentUser.access.map(point => {
		// 	if (point === door) {
		// 		hasAccess = true;
		// 	}
		// });

		// let alertObj = {
		// 	show: true
		// };
		// if (hasAccess) {
		// 	alertObj.type = "success";
		// 	alertObj.content = "Access Granted!";
		// } else {
		// 	alertObj.type = "error";
		// 	alertObj.content = "Access Denied!";
		// }
		// props.toggleAlert(alertObj);
	};

	return (
		<div className="access-point">
			{props.doors.map(door => (
				<a
					title="Click to enter"
					onClick={() => auth(door.id)}
					key={door.id}
				>
					{door.name}
				</a>
			))}
		</div>
	);
};

const AccessPoint = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedAccessPoint);

export default AccessPoint;
