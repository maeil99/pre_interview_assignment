import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Image from "next/image";

import images from "../../../assets";
import FormikControl from "../../forms/FormikControl";
import Button from "../../Button";
import { IOptionsProps, FieldType } from "../../../types/formik.interface";
import BareButton from "../../BareButton";
import { useRouter } from "next/router";

interface ISignInProps {
  email: string;
  password: string;
  checkboxBtnRememberMe: string[];
}

const SignInForm = () => {
  const router = useRouter();
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
    if (!values) return;
    const { checkboxBtnRememberMe, email, password } = values;
    if (checkboxBtnRememberMe[0] === "rememberMe") {
      //do something
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      console.log("remember me: ", values.checkboxBtnRememberMe);
      router.push("/");
    } else {
      console.log(values);
      router.push("/");
    }
  };

  const checkboxOption: IOptionsProps[] = [
    {
      key: "Remember Me",
      value: "rememberMe",
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <div className="flex flex-col w-full">
            <FormikControl
              control="textField"
              type={FieldType.TEXT}
              label=""
              name="email"
              placeholder="example@gmail.com"
            />
            <FormikControl
              control="textField"
              type={FieldType.PASSWORD}
              label=""
              name="password"
              placeholder="your password"
            />
            <div className="flex flex-row justify-between pt-2 text-black dark:text-gray-200">
              <FormikControl
                control="checkBoxBtn"
                label=""
                name="checkboxBtnRememberMe"
                options={checkboxOption}
              />
              <BareButton btnName="Forgot Your Password?" />
            </div>
            <div className="mt-14 w-full flex justify-start">
              <Button
                btnName="Log In"
                classStyles="rounded-xl"
                btnType="submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
