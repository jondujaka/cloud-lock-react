import React from "react";
import { connect } from "react-redux";
import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";

const mapStateToProps = state => {
	return { doors: state.doors };
};

const ConnectedDoors = ({ doors }) => {
	return (
		<div>
			<ul className="list-group list-group-flush">
				<Table list={doors} />
			</ul>

			{doors.length < 2 && <Input />}
		</div>
	);
};
const Doors = connect(mapStateToProps)(ConnectedDoors);

export default Doors;
