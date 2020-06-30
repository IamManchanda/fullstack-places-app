/* eslint-disable react/jsx-pascal-case */
import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation_MainNavigation from "./components/navigation/main-navigation";
import P_Index from "./pages";
import P_Auth_Login from "./pages/auth/login";
import P_Auth_Signup from "./pages/auth/signup";
import P_Users_UserId_Places from "./pages/users/_user_id/places";
import P_Places_PlaceId_Edit from "./pages/places/_place_id/edit";
import P_Places_New from "./pages/places/new";
import P_Error from "./pages/error";
import { AuthProvider } from "./context/auth";
import "./assets/styles.css";

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token,
        expirationDate: tokenExpirationDate.toISOString(),
      }),
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationDate) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expirationDate),
      );
    }
  }, [login]);

  return (
    <AuthProvider
      value={{ isLoggedIn: Boolean(token), token, userId, login, logout }}
    >
      <Router>
        <Navigation_MainNavigation />
        <main>
          {token ? (
            <Switch>
              <Route path="/" exact>
                <P_Index />
              </Route>
              <Route path="/users/:userId/places" exact>
                <P_Users_UserId_Places />
              </Route>
              <Route path="/places/:placeId/edit" exact>
                <P_Places_PlaceId_Edit />
              </Route>
              <Route path="/places/new" exact>
                <P_Places_New />
              </Route>
              <Route path="/error" exact>
                <P_Error />
              </Route>
              <Redirect to="/error" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact>
                <P_Index />
              </Route>
              <Route path="/users/:userId/places" exact>
                <P_Users_UserId_Places />
              </Route>
              <Route path="/auth/login" exact>
                <P_Auth_Login />
              </Route>
              <Route path="/auth/signup" exact>
                <P_Auth_Signup />
              </Route>
              <Route path="/error" exact>
                <P_Error />
              </Route>
              <Redirect to="/error" />
            </Switch>
          )}
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;
