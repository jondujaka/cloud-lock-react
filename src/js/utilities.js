const uniqueId = () => {
	return Math.floor(Math.random() * 10000);
};

const timeStamp = () => {
	let now = new Date();
	const offsetMs = now.getTimezoneOffset() * 60 * 1000;
	const dateLocal = new Date(now.getTime() - offsetMs);
	let str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");

	return str;
};

export {
	uniqueId,
	timeStamp
};