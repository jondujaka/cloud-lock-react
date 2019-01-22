import React from "react";
import People from "./container/People";
import Doors from "./container/Doors";
import Landing from "./container/Landing";
import Settings from "./presentational/Settings";
import Alert from "./presentational/Alert";

import "./App.scss";

const App = () => (
	<div className="main-wrapper">
		<Alert />
		<h1>Cloud Lock</h1>
		<Landing />
	</div>
);

export default App;
