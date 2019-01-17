import React from "react";

const Table = ({ list }) => {
	return <li>{list.map(item => <span key={item.id}>{item.name}</span>)}</li>;
};

export default Table;
