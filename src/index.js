/* eslint-disable */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App.jsx";
import { addDoor, toggleAlert } from "./js/actions/index";
import "normalize-css";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
