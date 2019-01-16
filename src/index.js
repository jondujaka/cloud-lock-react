import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };

  }
  render() {
    return (
        <h1>Main App</h1>
    );
  }
}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
	
export default App; 
