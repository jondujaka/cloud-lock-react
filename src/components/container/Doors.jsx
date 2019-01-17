import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";
import { addDoor, removeDoor } from "../../js/actions/index";

const mapStateToProps = state => {
	return { doors: state.doors };
};

function mapDispatchToProps(dispatch) {
	return {
		addDoor: door => dispatch(addDoor(door)),
		removeDoor: door => dispatch(removeDoor(door))
	};
}

class ConnectedPeople extends Component {
	constructor() {
		super();
		this.state = {};
		this.registerDoor = this.registerDoor.bind(this);
		this.deleteDoor = this.deleteDoor.bind(this);
	}

	registerDoor(door) {
		this.props.addDoor({ name: door, id: this.props.doors.length + 1 });
	}

	deleteDoor(door) {
		this.props.removeDoor(door);
	}

	render() {
		return (
			<div>
				{this.props.doors ? (
					<ul className="list-group list-group-flush">
						<Table
							list={this.props.doors}
							deleteItem={this.deleteDoor}
						/>
					</ul>
				) : (
					<span>No doors</span>
				)}

				{/*<button onClick={addUser}>Test</button>*/}

				{this.props.doors &&
					this.props.doors.length < 2 && (
						<Input item="person" addFunction={this.registerDoor} />
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
