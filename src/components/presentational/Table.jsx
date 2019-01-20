import React from "react";

const Table = props => {
	const deleteItem = id => {
		props.deleteItem(id);
	};

	const options = (accesses, itemId) => {
		if (props.options) {
			return props.options.map(option => (
				<input
					type="checkbox"
					onChange={() => toggleCheck(accesses, option.id, itemId)}
					checked={accesses.includes(option.id)}
					key={option.id}
				/>
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

	return (
		<ul>
			{props.list.map(item => (
				<li key={item.id}>
					<span>{item.name}</span>
					<a onClick={() => deleteItem(item.id)}>Remove</a>
					{options(item.access, item.id)}
				</li>
			))}
		</ul>
	);
};

export default Table;
