import React, { Component } from "react";
import { connect } from "react-redux";

import { login, toggleAlert, accessDoor } from "../../js/actions/index";
import Input from "../presentational/Input.jsx";

import "./AccessPoint.scss";

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
		props.accessDoor(door);
	};

	return (
		<div className="access-point">
			{props.doors.map(door => (
				<a
					title="Click to enter"
					onClick={() => auth(door)}
					key={door.id}
				>
					<span>{door.name}</span>
					<span className="click-to-enter">Click to enter</span>
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
