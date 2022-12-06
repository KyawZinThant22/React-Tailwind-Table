import React from "react";
import { ISelectedData } from "../App";

interface IButton {
  value: {
    label: string;
    data: string;
  }[];
  onChange: any;
  selected: ISelectedData;
}

const Button = ({ value, onChange, selected }: IButton) => {
  return (
    <div className="h-[30px] px-[20px] bg-[#E8E8E8] rounded-[75.5px] flex items-center gap-3  ">
      {value.map((item, key: React.Key) => (
        <button
          key={key}
          onClick={() => onChange(item.data)}
          className={`${
            selected.data === item.data && "bg-white buttonShadow"
          }  text-[10px] rounded-[8.5px] flex items-center justify-center font-semibold  h-[20px] p-2`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Button;
