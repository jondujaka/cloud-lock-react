import React from "react";

const Alert = ({closeAlert, alert}) => {

	const dismiss = () => {
		closeAlert();
	};

	return (
		<div className={"alert alert-" + alert.type}>
			<a onClick={dismiss}>{alert.content}</a>
		</div>
	);
};

export default Alert;
