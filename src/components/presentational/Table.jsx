import React from "react";

const Table = props => {
	const deleteItem = id => {
		props.deleteItem(id);
	};

	return (
		<React.Fragment>
			{props.list.map(item => (
				<li key={item.id}>
					<span>{item.name}</span>
					<a onClick={() => deleteItem(item.id)}>Remove</a>
				</li>
			))}
		</React.Fragment>
	);
	// <li>)}</li>;
};

export default Table;
