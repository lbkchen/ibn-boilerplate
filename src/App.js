import "./App.css";
import "./stylesheets/app.scss";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
// import YourComponent from "./components/YourComponent";
import logo from "./logo.svg";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/your_path" component={YourComponent} /> */}
    </div>
  </Router>
);

export default App;
