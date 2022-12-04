import React from "react";

interface IfilterBth {
  name: string;
  className?: string;
}

const FilterBth = ({ name, className }: IfilterBth) => {
  return (
    <div className={`rounded-full w-20 bg-white text-center text-gray-500`}>
      <button>{name}</button>
    </div>
  );
};

export default FilterBth;
