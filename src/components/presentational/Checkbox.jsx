import React from "react";

const Checkbox = (props) => {

	const toggleChecked = () => {
		props.toggle();
	};

	return (
		<form>
			<input type="checkbox" value={props.checked} onClick={toggleChecked} />
		</form>
	);
};

export default Checkbox;
