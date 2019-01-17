import React from "react";
import Doors from "../container/Doors";
import People from "../container/People";

const Table = props => {
	const deleteItem = id => {
		props.deleteItem(id);
	};

	return (
		<div className="settings">
			<People />
			<Doors />
		</div>
	);
};

export default Table;
