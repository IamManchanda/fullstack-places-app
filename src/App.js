import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PagesIndex from "./pages/index.js";
import PagesPlacesNew from "./pages/places/new.js";
import PagesError from "./pages/error.js";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <PagesIndex />
      </Route>
      <Route path="/places/new" exact>
        <PagesPlacesNew />
      </Route>
      <Route path="/error" exact>
        <PagesError />
      </Route>
      <Redirect to="/error" />
    </Switch>
  </Router>
);

export default App;
