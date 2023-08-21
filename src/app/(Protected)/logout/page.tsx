"use client"
import React, { useEffect } from "react";
import appwriteService from "@/appwrite-service/config";
import { useRouter } from "next/navigation";

const logout = () => {
  const router = useRouter();
  useEffect(() => {
    appwriteService.logout().then((res) => {
        router.replace("/");
    });
  }, []);
  return <div>logout</div>;
};

export default logout;
