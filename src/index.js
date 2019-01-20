import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App.jsx";
import { addDoor, toggleAlert } from "./js/actions/index";

window.store = store;
window.addDoor = addDoor;
window.toggleAlert = toggleAlert;

render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("app")
);
