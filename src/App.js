/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import P_Index from "./pages/index.js";
import P_Places_New from "./pages/places/new.js";
import P_Error from "./pages/error.js";
import "./assets/styles.css";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <P_Index />
      </Route>
      <Route path="/places/new" exact>
        <P_Places_New />
      </Route>
      <Route path="/error" exact>
        <P_Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  </Router>
);

export default App;
