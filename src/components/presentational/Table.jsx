import React from "react";

const Table = props => {

	const deleteItem = id => {
		props.deleteItem(id);
	};

	return (
		<ul>
			{props.list.map(item => (
				<li key={item.id}>
					<span>{item.name}</span>
					<a onClick={() => deleteItem(item.id)}>Remove</a>
				</li>
			))}
		</ul>
	);
};

export default Table;
