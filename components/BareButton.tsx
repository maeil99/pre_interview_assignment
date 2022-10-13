import React from "react";
interface IButtonProps {
  btnName: string;
  classStyles?: string;
  handleClick?: () => void;
}

const BareButton = ({ btnName, classStyles, handleClick }: IButtonProps) => (
  <button
    type={"button"}
    className={`${classStyles} dark:text-white text-black sm:text-sm text-base`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default BareButton;
