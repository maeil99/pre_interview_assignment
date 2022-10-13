import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Image from "next/image";

import images from "../../../assets";
import FormikControl from "../../forms/FormikControl";
import Button from "../../Button";
import { IOptionsProps, FieldType } from "../../../types/formik.interface";
import SignInForm from "./SignInForm";
import Banner from "./Banner";

interface ISignInProps {
  email: string;
  password: string;
  checkboxBtnRememberMe: string[];
}

const SignIn = () => {
  const initialValues: ISignInProps = {
    email: "",
    password: "",
    checkboxBtnRememberMe: [],
  };
  console.log(`url(${images.banner.src})`);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please insert your email")
      .min(11, "Minimum character is 11"),
    password: Yup.string()
      .required("Please insert your password")
      .min(5, "Minimum character is 5"),
  });

  const onSubmit = (values: ISignInProps) => {
    const { checkboxBtnRememberMe, email, password } = values;
    if (checkboxBtnRememberMe[0] === "rememberMe") {
      //do something
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      console.log("remember me: ", values.checkboxBtnRememberMe);
    } else {
      console.log(values);
    }
  };

  const checkboxOption: IOptionsProps[] = [
    {
      key: "Remember Me",
      value: "rememberMe",
    },
  ];

  return (
    <div className="flex sm:flex-col flex-row items-center space-x-28 sm:pr-0 pr-60">
      {/* <div className="object-contain w-8/12 sm:w-full bg-black/70">
        <Image src={images.banner} />
        <div className="absolute top-0 flex">
          <p className="text-2xl font-extrabold text-green-500">HAI</p>
        </div>
      </div> */}
      {/* <div className="sm:w-full w-[60%] border-8 border-blue-500">
        <Banner/>
      </div>
      <div className="flex items-center border-8 border-red-500">
        <SignInForm/>
      </div> */}
      <div className="w-8/12">
        <Banner />
      </div>
      <div className="w-4/12 items-center">
        <div className="flex  flex-col space-y-1 pb-10 text-black dark:text-white font-[650] text-3xl">
          <h1>Hello,</h1>
          <h1>Welcome Back</h1>
        </div>
        <SignInForm />
      </div>

      {/* <div
            style={{
              backgroundImage: `url(${images.banner.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className='w-full'
          >
            <p className="text-2xl font-extrabold text-green-500">HAI</p>
          </div> */}
    </div>
  );
};

export default SignIn;
