import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import AddTransaction from "./components/Transaction/AddTransaction";
import ViewTransaction from "./components/Transaction/ViewTransaction";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/addTransaction" component={AddTransaction} />
            <Route path="/ViewTransaction/:id" component={ViewTransaction} />
            <Route exact path="/" component={Dashboard} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
