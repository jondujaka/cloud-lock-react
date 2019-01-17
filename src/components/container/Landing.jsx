import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../presentational/Input.jsx";
import { login } from "../../js/actions/index";
import { People } from "./People.jsx";
import AccessPoint from "./AccessPoint";

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user))
	};
}

const mapStateToProps = state => {
	return { currentUser: state.currentUser };
};

class ConnectedLanding extends Component {
	constructor() {
		super();
		this.auth = this.auth.bind(this);
	}
	auth(user) {
		this.props.login(user);
	}

	render() {
		return (
			<div className="landing">
				<h1>Landing</h1>
				<AccessPoint />
				{!this.props.currentUser.activated && (
					<div>
						<Input submitText="Login" submitFunction={this.auth} />
					</div>
				)}
			</div>
		);
	}
}

const Landing = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedLanding);

export default Landing;
