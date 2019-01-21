import React, { Component } from "react";
import { connect } from "react-redux";

import { login, logout, toggleAlert } from "../../js/actions/index";
import { People } from "./People.jsx";

import AccessPoint from "./AccessPoint";
import EventsLog from "./EventsLog";
import Input from "../presentational/Input.jsx";
import Settings from "../presentational/Settings";

import "./Landing.css";

function mapDispatchToProps(dispatch) {
	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout()),
		toggleAlert: alert => dispatch(toggleAlert(alert))
	};
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		users: state.users
	};
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
	auth(username) {
		let userExists = false;
		let newUser = {};
		this.props.users.forEach(user => {
			if (user.name.toLowerCase() === username.toLowerCase()) {
				userExists = true;
				newUser.activated = true;
				newUser.privileged = user.admin;
				newUser.id = user.id;
				newUser.access = [...user.access];
			}
		});
		if (userExists) {
			this.props.login(newUser);
		} else {
			this.props.toggleAlert({
				show: true,
				content: "That user doesn't exist",
				type: "error"
			});
		}
	}

	logOut() {
		this.props.logout();
		this.changePage("access-point");
	}

	renderPage() {
		switch (this.state.view) {
			case "access-point":
				if (this.props.currentUser.activated) {
					return <AccessPoint />;
				} else {
					return (
						<div className="login-wrapper">
							<Input
								submitText="Login"
								placeholder="Enter your username"
								submitFunction={this.auth}
							/>
						</div>
					);
				}

				break;
			case "settings":
				if (this.props.currentUser.privileged) {
					return <Settings />;
				}

				break;

			case "log":
				if (this.props.currentUser.privileged) {
					return <EventsLog />;
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

	eventsLogButton(){
		if (this.props.currentUser.privileged) {
			return (
				<a
					className={this.state.view === "log" ? "active" : ""}
					onClick={() => this.changePage("log")}
				>
					Events Log
				</a>
			);
		}
	}

	settingsButton() {
		if (this.props.currentUser.privileged) {
			return (
				<a
					className={this.state.view === "settings" ? "active" : ""}
					onClick={() => this.changePage("settings")}
				>
					Settings
				</a>
			);
		}
	}

	accessButon() {
		if (this.props.currentUser.activated) {
			return (
				<a
					className={
						this.state.view === "access-point" ? "active" : ""
					}
					onClick={() => this.changePage("access-point")}
				>
					Access Point
				</a>
			);
		}
	}

	render() {
		return (
			<div className="landing">
				<div className="navigation">
					{this.accessButon()}
					{this.settingsButton()}
					{this.eventsLogButton()}
					{this.logoutButton()}
				</div>

				{this.renderPage()}
			</div>
		);
	}
}

const Landing = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedLanding);

export default Landing;
