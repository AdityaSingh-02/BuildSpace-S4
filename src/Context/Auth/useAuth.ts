import AuthContext from "./auth-context";
import { useContext } from "react";

export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
