import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, removeUser } from "../../js/actions/index";
import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";

const mapStateToProps = state => {
	return { users: state.users };
};

function mapDispatchToProps(dispatch) {
	return {
		addNewUser: user => dispatch(addUser(user)),
		removeUser: user => dispatch(removeUser(user))
	};
}

class ConnectedPeople extends Component {
	constructor() {
		super();
		this.state = {};
		this.registerUser = this.registerUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	registerUser(user) {
		this.props.addNewUser({ name: user, id: this.props.users.length + 1 });
	}

	deleteUser(user) {
		// this.props.addNewUser({ name: user, id: this.props.users.length + 1 });
		this.props.removeUser(user);
	}

	render() {
		return (
			<div>
				{this.props.users ? (
					<ul className="list-group list-group-flush">
						<Table
							list={this.props.users}
							deleteItem={this.deleteUser}
						/>
					</ul>
				) : (
					<span>No users</span>
				)}

				{/*<button onClick={addUser}>Test</button>*/}

				{this.props.users &&
					this.props.users.length < 4 && (
						<Input
							item="person"
							submitFunction={this.registerUser}
							submitText="Add user"
						/>
					)}
			</div>
		);
	}
}
const People = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedPeople);

export default People;
