/* eslint-disable react/jsx-pascal-case */
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navigation_MainNavigation from "./components/navigation/main-navigation";
import Shared_LoadingSpinner from "./components/shared/loading-spinner";
import { AuthProvider } from "./context/auth";
import { useAuth } from "./hooks/auth";
import "./assets/styles.css";

const P_Index = lazy(() => import("./pages"));
const P_Auth_Login = lazy(() => import("./pages/auth/login"));
const P_Auth_Signup = lazy(() => import("./pages/auth/signup"));
const P_Users_UserId_Places = lazy(() =>
  import("./pages/users/_user_id/places"),
);
const P_Places_PlaceId_Edit = lazy(() =>
  import("./pages/places/_place_id/edit"),
);
const P_Places_New = lazy(() => import("./pages/places/new"));
const P_Error = lazy(() => import("./pages/error"));

const App = () => {
  const [token, login, logout, userId] = useAuth();
  return (
    <AuthProvider
      value={{ isLoggedIn: Boolean(token), token, userId, login, logout }}
    >
      <Router>
        <Navigation_MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <Shared_LoadingSpinner />
              </div>
            }
          >
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
          </Suspense>
        </main>
      </Router>
    </AuthProvider>
  );
};

export default App;
