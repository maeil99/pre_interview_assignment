import { IFormikProps, IOptionsProps } from "../../types/formik.interface";
import CheckBoxBtn from "./CheckBoxBtn";
import TextField from "./TextField";

interface IFormikControlProps extends IFormikProps {
  control: "textField" | "checkBoxBtn";
  options?: IOptionsProps[];
  placeholder?: string;
}

const FormikControl = (props: IFormikControlProps) => {
  const { control, ...rest } = props;
  switch (control) {
    case "textField":
      return <TextField {...rest} />;
    case "checkBoxBtn":
      return <CheckBoxBtn {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
