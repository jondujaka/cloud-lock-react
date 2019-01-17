import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../presentational/Input.jsx";
import { login, logout } from "../../js/actions/index";
import { People } from "./People.jsx";
import AccessPoint from "./AccessPoint";
import Settings from "../presentational/Settings";

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout())
	};
}

const mapStateToProps = state => {
	return { currentUser: state.currentUser };
};

class ConnectedLanding extends Component {
	constructor() {
		super();
		this.state = {
			view: "access-point"
		};
		this.auth = this.auth.bind(this);
		this.logOut = this.logOut.bind(this);
		this.changePage = this.changePage.bind(this);
	}
	auth(user) {
		this.props.login(user);
	}

	logOut() {
		console.log("logout");
		this.props.logout();
	}

	renderPage() {
		switch (this.state.view) {
			case "access-point":
				return <h1>Access Point View </h1>;
				break;
			case "settings":
				if (this.props.currentUser.privileged) {
					return <Settings />;
				}

				break;
			default:
				return;
		}
	}

	changePage(view) {
		this.setState({ view });
	}

	logoutButton() {
		if (this.props.currentUser.activated) {
			return <a onClick={this.logOut}>Logout</a>;
		}
	}

	settingsButton() {
		if (this.props.currentUser.privileged) {
			return <a onClick={() => this.changePage("settings")}>Settings</a>;
		}
	}

	render() {
		return (
			<div className="landing">
				<div className="navigation">
					<a onClick={() => this.changePage("access-point")}>
						Access Point
					</a>
					{this.settingsButton()}
					{this.logoutButton()}
				</div>

				{this.renderPage()}

				{this.props.currentUser.activated ? (
					<AccessPoint />
				) : (
					<Input submitText="Login" submitFunction={this.auth} />
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
