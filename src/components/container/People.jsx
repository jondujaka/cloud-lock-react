import React, { Component } from "react";

import { connect } from "react-redux";
import { addUser, removeUser, updateUser } from "../../js/actions/index";
import { uniqueId } from "../../js/utilities";

import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";
import Alert from "../presentational/Alert.jsx";

const mapStateToProps = state => {
	return { users: state.users, alert: state.alert, doors: state.doors };
};

function mapDispatchToProps(dispatch) {
	return {
		addNewUser: user => dispatch(addUser(user)),
		removeUser: user => dispatch(removeUser(user)),
		updateUser: (accesses, id) => dispatch(updateUser({id, accesses})),
		closeAlert: alert => dispatch(toggleAlert({show: false}))
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

	const updateUser = (id, accesses) => {
		console.log(accesses, id);
		props.updateUser(id, accesses);
		// props.updateUser(userId, data);
	}

	const deleteUser = user => {
		props.removeUser(user);
	}

	const closeAlert = () => {
		props.closeAlert();
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

			{props.alert.show && <Alert closeAlert={closeAlert} alert={props.alert} />}

			{props.users ? (
				<Table
					list={props.users}
					deleteItem={deleteUser}
					options={props.doors}
					updateUser={updateUser}
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
