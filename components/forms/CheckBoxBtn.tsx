import { ErrorMessage, Field } from "formik";
import React from "react";
import { IFormikProps, IOptionsProps } from "../../types/formik.interface";
import TextError from "./TextError";

interface IRadioBtnProps extends IFormikProps {
  options?: IOptionsProps[];
}

const CheckBoxBtn = (props: IRadioBtnProps) => {
  const { name, label, options, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="flex-1 font-poppins dark:text-white text-black font-semibold text-xl"
      >
        {label}
      </label>

      <Field
        className="font-poppins"
        id={name}
        name={name}
      >
        {({ field }: any) => {
          return (
            options &&
            options.map((option) => {
              return (
                <div key={option.key} className="flex flex-row space-x-2 dark:text-white text-black sm:text-sm text-base">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            })
          );
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckBoxBtn;
