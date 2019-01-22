import React from "react";
import PropTypes from "prop-types";

import Doors from "../container/Doors";
import People from "../container/People";

import "./Settings.scss";

const Settings = props => {
	const deleteItem = id => {
		props.deleteItem(id);
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

Settings.propTypes = {
	deleteItem: PropTypes.func
};

export default Settings;
