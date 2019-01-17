import React, { Component } from "react";

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
		this.props.addFunction(this.state.value);
		this.setState({ value: "" });
		// this.props.addFunction(this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default Input;
