import React, { Component } from "react";

import { connect } from "react-redux";
import { addDoor, removeDoor } from "../../js/actions/index";
import { uniqueId } from "../../js/utilities";

import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";

const mapStateToProps = state => {
	return { doors: state.doors };
};

function mapDispatchToProps(dispatch) {
	return {
		addDoor: door => dispatch(addDoor(door)),
		removeDoor: door => dispatch(removeDoor(door))
	};
};

const ConnectedDoors = props => {

	const registerDoor = door => {
		props.addDoor({ name: door, id: uniqueId() });
	}

	const deleteDoor = door => {
		props.removeDoor(door);
	}

	const showInput = () => {
		if(props.doors && props.doors.length < 2){
			return (
				<Input
					item="door"
					submitFunction={registerDoor}
					submitText="Add door"
				/>
			);
		}
	}

	return (
		<div>
			{props.doors ? (
				<Table
					list={props.doors}
					deleteItem={deleteDoor}
				/>
			) : (
				<span>No doors</span>
			)}

			{showInput()}
		</div>
	);
}
const Doors = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedDoors);

export default Doors;
