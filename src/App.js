/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation_MainNavigation from "./components/navigation/main-navigation";
import P_Index from "./pages";
import P_Auth_Login from "./pages/auth/login";
import P_Users_UserId_Places from "./pages/users/_user_id/places";
import P_Places_PlaceId_Edit from "./pages/places/_place_id/edit";
import P_Places_New from "./pages/places/new";
import P_Error from "./pages/error";
import "./assets/styles.css";

const App = () => (
  <Router>
    <Navigation_MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <P_Index />
        </Route>
        <Route path="/users/:userId/places" exact>
          <P_Users_UserId_Places />
        </Route>
        <Route path="/places/new" exact>
          <P_Places_New />
        </Route>
        <Route path="/places/:placeId/edit" exact>
          <P_Places_PlaceId_Edit />
        </Route>
        <Route path="/auth/login" exact>
          <P_Auth_Login />
        </Route>
        <Route path="/error" exact>
          <P_Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </main>
  </Router>
);

export default App;
