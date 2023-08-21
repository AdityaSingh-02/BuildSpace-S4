"use client";
import React from "react";
import { LoginComponent, SignupComponent } from "@/Components";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context";

const Create = () => {
  const [Action, setAction] = useState(true);

  const { authStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      router.replace("/dashboard");
    }
  }, []);

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen ">
        <nav className="flex justify-center space-x-48 pt-5 pb-4 text-2xl border-b-2 border-cyan-500 shadow-[0_35px_60px_-15px_rgba(0,0,255,0.3)]  w-[80%]">
          <button onClick={() => setAction(true)}>Log in</button>
          <button onClick={() => setAction(false)}>Sign Up</button>
        </nav>
        <div className="flex justify-center rounded-lg mt-16 w-[60%] h-[70%] bg-gradient-to-b from-cyan-950 to-gray-950">
          {Action ? <LoginComponent /> : <SignupComponent />}
        </div>
      </main>
    </>
  );
};

export default Create;