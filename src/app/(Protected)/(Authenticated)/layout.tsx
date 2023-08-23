import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DashBoard",
  description: "User dashboard",
};

export default function dashboard({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <main>{children}</main>
    )
}
