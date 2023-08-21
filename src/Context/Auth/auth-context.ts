"use client"
import { createContext } from "react";

const AuthContext = createContext<{
  authStatus: boolean;
  setAuthStatus: (status: boolean) => void;
}>({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthContextProvider = AuthContext.Provider;
export default AuthContext;
