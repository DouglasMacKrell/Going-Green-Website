import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import FourZeroFour from "./Components/FourZeroFour/FourZeroFour";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
