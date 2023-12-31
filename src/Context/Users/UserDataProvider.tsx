"use client"
import React, { createContext, useState } from "react";
import type { User } from "@/types/Users";
import { UserDataContext } from "./UserData";

interface IProps {
  children: React.ReactNode;
}

const UserDataProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
  });

  const setUser = (data: User) => {
    setUserData(data);
  };

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;