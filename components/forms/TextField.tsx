import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { IFormikProps } from "../../types/formik.interface";

interface ITextFieldProps extends IFormikProps {
  placeholder?: string;
}

const TextField = (props: ITextFieldProps) => {
  const { label, name, type = "text", ...rest } = props;
  return (
    <div className="w-full pt-2">
      <label
        htmlFor={name}
        className="flex-1 font-poppins dark:text-white text-black font-semibold text-xl"
      >
        {label}
      </label>

      <Field
        className="dark:bg-black bg-white border dark:border-white border-gray-200 rounded-lg min-w-full outline-none font-poppins dark:text-white text-black text-base mt-4 px-4 py-3"
        id={name}
        name={name}
        type={type}
        {...rest}
      />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextField;
