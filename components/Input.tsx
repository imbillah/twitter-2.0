import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className="
   p-4 w-full text-lg bg-black border-neutral-800 rounded-md outline:none 
   text-white border-2 transition focus:border-2 disabled:bg-neutral-900 disabled:opacity-75  focus:border-sky-500 disabled:cursor-not-allowed
   "
    />
  );
};

export default Input;
