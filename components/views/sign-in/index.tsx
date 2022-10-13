import React from "react";

import SignInForm from "./SignInForm";
import Banner from "./Banner";

const SignIn = () => {
  return (
    <div className="flex sm:flex-col flex-row items-center sm:space-x-0 space-x-28 sm:pr-0 pr-60">
      <div className="sm:w-full w-8/12">
        <Banner />
      </div>
      <div className="sm:w-full sm:px-12 sm:py-40 sm:absolute sm:bg-white sm:dark:bg-black sm:top-72 w-4/12 sm:items-start items-center">
        <div className="flex  flex-col space-y-1 pb-10 text-black dark:text-white font-[650] text-3xl">
          <h1>Hello,</h1>
          <h1>Welcome Back</h1>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
