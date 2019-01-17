import React from "react";
import { connect } from "react-redux";
import Table from "../presentational/Table.jsx";
import Input from "../presentational/Input.jsx";

const mapStateToProps = state => {
	return { users: state.users };
};

const ConnectedPeople = ({ users }) => {
	return (
		<div>
			<ul className="list-group list-group-flush">
				<Table list={users} />
			</ul>

			{users.length < 4 && <Input />}
		</div>
	);
};
const People = connect(mapStateToProps)(ConnectedPeople);

export default People;
