import type { User } from "@/types/Users";
import { createContext, useContext, useState } from "react";

interface IUser {
  userData: User;
  setUserData: (user: User) => void;
}

export const UserDataContext = createContext(<IUser>{
  userData: { email: "", password: "" },
  setUserData(user) {},
});

export const useUserData = () => useContext(UserDataContext);
