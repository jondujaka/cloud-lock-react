import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.submitFunction(this.state.value);
		this.setState({ value: "" });
		// this.props.addFunction(this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder={this.props.placeholder}
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="submit" disabled={this.state.value.length < 2}>
					{this.props.submitText}
				</button>
			</form>
		);
	}
};


Input.propTypes = {
	placeholder: PropTypes.string,
	submitText: PropTypes.string,
	onChange: PropTypes.func
};

Input.defaultProps = {
	submitText: "Submit"
};

export default Input;
