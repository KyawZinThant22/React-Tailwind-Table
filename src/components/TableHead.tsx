import React from "react";
import FilterBth from "./FilterBth";

interface ITableHead {
  filter?: boolean;
  search?: boolean;
}

const TableHead = ({ filter, search }: ITableHead) => {
  return (
    <div className="h-[60px] border grid grid-cols-12">
      <div className={`col-span-3 bg-blue-400 h-full`}>
        {filter && <h1>Filter</h1>}
      </div>
      <div className="col-span-9 bg-red-400 h-full">
        {search && <h1>Search</h1>}
      </div>
    </div>
  );
};

export default TableHead;
