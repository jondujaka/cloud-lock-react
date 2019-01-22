import React from "react";
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  toggleChecked: PropTypes.func
};

export default Checkbox;
