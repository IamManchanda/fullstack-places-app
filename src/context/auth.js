import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
  displayName: authDisplayName,
} = AuthContext;
export default AuthContext;
