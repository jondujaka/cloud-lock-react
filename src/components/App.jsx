import React from "react";
import People from "./container/People.jsx";
import Doors from "./container/Doors.jsx";
import Landing from "./container/Landing.jsx";

const App = () => (
	<div>
		<h1>Main App</h1>
		<Doors />
		{/*<Landing />*/}
		<People />
	</div>
);

export default App;
