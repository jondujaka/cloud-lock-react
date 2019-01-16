import React, { Component } from "react";
import ReactDOM from "react-dom";

import store from "./js/store";
import { addUser } from "./js/actions";

window.store = store;
window.addArticle = addUser;