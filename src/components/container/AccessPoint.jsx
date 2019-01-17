import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../presentational/Input.jsx";
import { login } from "../../js/actions/index";

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

class ConnectedAccessPoint extends Component {
	constructor() {
		super();
		this.auth = this.auth.bind(this);
	}
	auth(door) {
		this.props.currentUser.access.map(point => {
			if (point === door) {
				console.log("access granted");
			}
		});
	}

	render() {
		return (
			<div className="landing">
				{this.props.doors.map(door => (
					<a onClick={() => this.auth(door.id)} key={door.id}>
						{door.name}
					</a>
				))}
			</div>
		);
	}
}

const AccessPoint = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedAccessPoint);

export default AccessPoint;
