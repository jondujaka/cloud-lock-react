const uniqueId = () => {
	return Math.floor(Math.random() * 10000);
};

const timeStamp = () => {
	let now = new Date();
	const offsetMs = now.getTimezoneOffset() * 60 * 1000;
	const dateLocal = new Date(now.getTime() - offsetMs);
	let str = dateLocal
		.toISOString()
		.slice(0, 19)
		.replace(/-/g, "/")
		.replace("T", " ");

	return str;
};

const loadState = () => {
	try {
		const saved = localStorage.getItem("state");
		if (saved === null) {
			return undefined;
		}
		return JSON.parse(saved);
	} catch (err) {
		return undefined;
	}
};

const saveState = state => {
	try {
		const saved = JSON.stringify(state);
		localStorage.setItem("state", saved);
	} catch {
		//eslint-disable-block
	}
};

export { uniqueId, timeStamp, loadState, saveState };
