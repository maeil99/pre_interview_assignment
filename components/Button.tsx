interface IButtonProps {
  btnName: string;
  btnType: "button" | "submit" | "reset";
  disabled?: boolean;
  classStyles?: string;
  handleClick?: () => void;
}

const Button = ({
  btnName,
  classStyles = "",
  btnType = "button",
  disabled,
  handleClick,
}: IButtonProps) => (
  <button
    type={btnType}
    className={`${
      disabled ? "bg-gray-500" : "bg-black dark:bg-white"
    } text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins hover:bg-gray-400 font-semibold text-white dark:text-black border border-gray-300 ${classStyles}`}
    onClick={handleClick}
    disabled={disabled}
  >
    {btnName}
  </button>
);

export default Button;
