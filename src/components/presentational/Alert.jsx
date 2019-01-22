import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleAlert } from "../../js/actions/index";

import "./Alert.scss";

const mapDispatchToProps = dispatch => {
	return { toggleAlert: alert => dispatch(toggleAlert(alert)) };
};

const mapStateToProps = state => {
	return { alert: state.alert };
};

const ConnectedAlert = props => {
	const dismiss = () => {
		props.toggleAlert({ show: false });
	};

	if (props.alert.show) {
		return (
			<div className={`alert alert-${props.alert.type} alert-${status}`}>
				<div className="alert-wrapper">
					<span>{props.alert.content}</span>
					<a onClick={dismiss} title="dismiss" className="close">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
						>
							<path fill="none" d="M-2-1h20v18H-2z" />
							<g>
								<path
									fill="#FFF"
									d="M11 8.2l4.4-4.4c.6-.6.6-1.7 0-2.4l-.6-.6c-.6-.6-1.7-.6-2.4 0L8 5.2 3.6.8C3 .2 1.9.2 1.3.8l-.6.6C0 2.1 0 3.1.7 3.8l4.4 4.4-4.4 4.4c-.6.6-.6 1.7 0 2.4l.6.6c.6.6 1.7.6 2.4 0L8 11.1l4.4 4.4c.6.6 1.7.6 2.4 0l.6-.6c.6-.6.6-1.7 0-2.4L11 8.2z"
								/>
							</g>
						</svg>
					</a>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

const Alert = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedAlert);

export default Alert;
