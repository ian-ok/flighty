import React from "react";

interface IProps {
  Type: string;
  PlaceHolder: string;
  classNames?: string;
  disabled?: boolean;
  Reference?: React.Ref<any>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(Props: IProps) {
  return (
    <>
      <input
        type={Props?.Type}
        disabled={Props?.disabled}
        onChange={Props?.onChange}
        className={`w-full ${Props?.classNames} border-2 bg-slate-800/3 w-full border-slate-800 rounded-md bg-slate-900 text-white px-4 py-2 text-sm text-left duration-300 hover:bg-slate-800/90 transition ease-in-out outline-none focus:bg-slate-800/90`}
        placeholder={Props?.PlaceHolder}
        ref={Props?.Reference}
      />
    </>
  );
}

export default Input;
