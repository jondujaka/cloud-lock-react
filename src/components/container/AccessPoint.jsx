import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../../js/actions/index";

import Input from "../presentational/Input.jsx";

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user))
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
		props.currentUser.access.map(point => {
			if (point === door) {
				console.log("access granted");
			}
		});
	}

	return (
		<div className="landing">
			{props.doors.map(door => (
				<a onClick={() => auth(door.id)} key={door.id}>
					{door.name}
				</a>
			))}
		</div>
	);
}

const AccessPoint = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedAccessPoint);

export default AccessPoint;
