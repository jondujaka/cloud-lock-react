import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser, removeUser, updateUser } from "../../js/actions/index";
import { uniqueId } from "../../js/utilities";

import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";

const mapStateToProps = state => {
	return { users: state.users, doors: state.doors };
};

function mapDispatchToProps(dispatch) {
	return {
		addNewUser: user => dispatch(addUser(user)),
		removeUser: user => dispatch(removeUser(user)),
		updateUser: (accesses, userId) =>
			dispatch(updateUser({ accesses, userId }))
	};
}

const ConnectedPeople = props => {
	const registerUser = user => {
		props.addNewUser({
			name: user,
			id: uniqueId(),
			privileged: false,
			access: []
		});
	};

	const updateUser = (accesses, itemId) => {
		props.updateUser(accesses, itemId);
	};

	const deleteUser = user => {
		props.removeUser(user);
	};

	const showInput = () => {
		if (props.users && props.users.length < 4) {
			return (
				<Input
					item="person"
					submitFunction={registerUser}
					submitText="Add"
					placeholder="Add new user"
				/>
			);
		}
	};

	return (
		<div className="table-wrapper">
			{props.users ? (
				<React.Fragment>
					<h2>People</h2>
					<Table
						list={props.users}
						deleteItem={deleteUser}
						options={props.doors}
						updateUser={updateUser}
					/>
				</React.Fragment>
			) : (
				<span>No users</span>
			)}

			{showInput()}
		</div>
	);
};

const People = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedPeople);

export default People;
