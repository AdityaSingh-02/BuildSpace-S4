import React, { Dispatch, useState } from "react";
import appwriteService from "@/appwrite-service/config";
import { useAuth } from "@/Context";
import { useRouter } from "next/navigation";

interface Props {
  setAction: Dispatch<React.SetStateAction<boolean>>;
}

const SignupComponent: React.FC<Props> = (props: Props) => {
  const [signUpData, setsignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setAuthStatus } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (
      signUpData.password.length < 8 ||
      signUpData.email.length < 6 ||
      signUpData.name.length < 2
    ) {
      alert(
        "Please fill the appropirate details, password should be atleast 8 char long"
      );
      return;
    }
    appwriteService.createAccount(signUpData).then((res) => {
      setAuthStatus(true);
      router.replace("/dashboard");
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 text-black w-full">
        <h1 className="text-gray-400 pb-16 -mt-16 text-xl md:text-3xl">
          Hassel free Account creation
        </h1>
        <input
          type="text"
          placeholder="Name"
          value={signUpData.name}
          onChange={(e) =>
            setsignUpData({ ...signUpData, name: e.target.value })
          }
          className="md:w-[60%] px-4 py-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email"
          value={signUpData.email}
          onChange={(e) =>
            setsignUpData({ ...signUpData, email: e.target.value })
          }
          className="md:w-[60%] px-4 py-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={(e) =>
            setsignUpData({ ...signUpData, password: e.target.value })
          }
          className="md:w-[60%] px-4 py-2 rounded-lg"
        />

        <button
          onClick={handleClick}
          className="bg-gray-500 text-gray-100 rounded-lg px-4 py-2">
          Sign Up
        </button>
        <p className="text-gray-400">
          Already Have an Account? <button onClick={()=> props.setAction(true)} className="text-gray-100" >Login</button>
        </p>
      </div>
    </>
  );
};

export default SignupComponent;
