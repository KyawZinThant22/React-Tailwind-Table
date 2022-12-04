import React from "react";
import FilterBth from "./FilterBth";

const TableHead = () => {
  return (
    <div className="h-[60px] bg-red-400 p-4">
      <FilterBth name="active" />
    </div>
  );
};

export default TableHead;
