import "./App.css";
import "./stylesheets/app.scss";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import LearnPage from "./components/LearnPage";
import FAQPage from "./components/FAQPage";
import GetInvolvedPage from "./components/GetInvolvedPage";
import DonatePage from "./components/DonatePage";
// import YourComponent from "./components/YourComponent";
import logo from "./logo.svg";

const App = props => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/learn" component={LearnPage} />
      <Route exact path="/faq" component={FAQPage} />
      <Route exact path="/getinvolved" component={GetInvolvedPage} />
      <Route exact path="/donate" component={DonatePage} />
      {/* <Route exact path="/your_path" component={YourComponent} /> */}
    </div>
  </Router>
);

export default App;
