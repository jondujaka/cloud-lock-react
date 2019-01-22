import React from "react";

import Doors from "../container/Doors";
import People from "../container/People";

import "./Settings.scss";

const Table = props => {
	const deleteItem = id => {
		props.deleteItem(id)
	};

	return (
		<div className="settings">
			<div className="setting-wrapper">
				<People />
			</div>
			<div className="setting-wrapper">
				<Doors />
			</div>
		</div>
	);
};

export default Table;
