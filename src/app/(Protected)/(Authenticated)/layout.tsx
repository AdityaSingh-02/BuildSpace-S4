"use client";
import { Metadata } from "next";
import React, { useEffect } from "react";
import UserDataProvider from "@/Context";
import { useUserData } from "@/Context";
import appwriteService from "@/appwrite-service/config";

export const metadata: Metadata = {
  title: "DashBoard",
  description: "User dashboard",
};

export default function dashboard({ children }: { children: React.ReactNode }) {
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    appwriteService.getUserData().then((res) => {
      setUserData({ name: res?.name!, email: res?.email! });
    });
  }, []);

  return (
    <main>
      <UserDataProvider>{children}</UserDataProvider>
    </main>
  );
}
