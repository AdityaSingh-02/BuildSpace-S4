"use client";
import type { Metadata } from "next";
import { AuthContextProvider } from "@/Context";
import { useEffect, useState } from "react";
import appwriteService from "@/appwrite-service/config";

export const metadata: Metadata = {
  title: "Get Started",
  description: "User Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(true));
  }, []);

  return (
    <AuthContextProvider value={{ authStatus, setAuthStatus }}>
      {loader && <main>{children}</main>}
    </AuthContextProvider>
  );
}
