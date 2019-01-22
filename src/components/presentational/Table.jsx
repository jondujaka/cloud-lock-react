import React from "react";
import PropTypes from "prop-types";
import "./Table.scss";

const Table = props => {
	const deleteItem = id => {
		props.deleteItem(id);
	};

	const options = (accesses, itemId) => {
		if (props.options) {
			return props.options.map(option => (
				<label key={option.id}>
					{option.name}
					<input
						type="checkbox"
						onChange={() =>
							toggleCheck(accesses, option.id, itemId)
						}
						checked={accesses.includes(option.id)}
					/>
				</label>
			));
		}
	};

	const toggleCheck = (accesses, optionId, itemId) => {
		if (accesses.includes(optionId)) {
			let newAccesses = [];

			accesses.filter(access => {
				if (access !== optionId) {
					newAccesses.push(access);
				}
			});

			props.updateUser(newAccesses, itemId);
		} else {
			accesses.push(optionId);
			props.updateUser(accesses, itemId);
		}
	};

	const removeButton = id => {
		if (props.noRemoveComparator === id && props.type === "people") {
			return;
		} else {
			return (
				<a
					title="Delete item"
					className="remove"
					onClick={() => deleteItem(id)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
						<path fill="none" d="M-2-1h20v18H-2z" />
						<g>
							<path
								fill="#000"
								d="M11 8.2l4.4-4.4c.6-.6.6-1.7 0-2.4l-.6-.6c-.6-.6-1.7-.6-2.4 0L8 5.2 3.6.8C3 .2 1.9.2 1.3.8l-.6.6C0 2.1 0 3.1.7 3.8l4.4 4.4-4.4 4.4c-.6.6-.6 1.7 0 2.4l.6.6c.6.6 1.7.6 2.4 0L8 11.1l4.4 4.4c.6.6 1.7.6 2.4 0l.6-.6c.6-.6.6-1.7 0-2.4L11 8.2z"
							/>
						</g>
					</svg>
				</a>
			);
		}
	};

	return (
		<div className="table">
			<ul>
				{props.list.map(item => (
					<li key={item.id}>
						<span>{item.name}</span>
						<div className="options">
							{options(item.access, item.id)}
						</div>

						{removeButton(item.id)}
					</li>
				))}
			</ul>
		</div>
	);
};


Table.propTypes = {
	options: PropTypes.array,
	deleteItem: PropTypes.func,
	updateUser: PropTypes.func,
	list: PropTypes.array,
	noRemoveComparator: PropTypes.number,
	type: PropTypes.string
};


export default Table;
