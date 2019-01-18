import React, { Component } from "react";

import { connect } from "react-redux";
import { addUser, removeUser } from "../../js/actions/index";
import { uniqueId } from "../../js/utilities";

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

const ConnectedPeople = props => {

	const registerUser = user => {
		props.addNewUser({
			name: user,
			id: uniqueId(),
			privileged: false,
			access: [1, 2]
		});
	}

	const deleteUser = user => {
		props.removeUser(user);
	}

	const showInput = () => {
		if(props.users && props.users.length < 4){
			return (
				<Input
					item="person"
					submitFunction={registerUser}
					submitText="Add user"
				/>
			);
		}
	}

	return (
		<div>
			{props.users ? (
				<Table
					list={props.users}
					deleteItem={deleteUser}
				/>
			) : (
				<span>No users</span>
			)}

			{showInput()}
		</div>
	);
}

const People = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedPeople);

export default People;
