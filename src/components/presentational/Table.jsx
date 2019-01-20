import React from "react";

const Table = props => {

	const deleteItem = id => {
		props.deleteItem(id);
	};

	const options = accesses => {
		console.log(props.options);
		if(props.options){
			return props.options.map(option => (
				<input type="checkbox" onChange={() => toggleCheck(accesses, option.id)} checked={accesses.includes(option.id)} key={option.id} />
				)
			);
		}
	}

	const toggleCheck = (accesses, id) => {
		if(accesses.includes(id)){
			let newAccesses = accesses.filter(access => {
				access != id;
			});
			props.updateUser(accesses, id);
		} else {
			accesses.push(id);
			props.updateUser(accesses, id);
		}
	}

	return (
		<ul>
			{props.list.map(item => (
				<li key={item.id}>
					<span>{item.name}</span>
					<a onClick={() => deleteItem(item.id)}>Remove</a>
					{options(item.access)}
				</li>
				)
			)}
		</ul>
	);
};

export default Table;
