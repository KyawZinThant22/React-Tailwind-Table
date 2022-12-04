import React from "react";

interface Icontainer {
  children: React.ReactNode;
  className?: string;
}

const TableContainer = ({ children, className }: Icontainer) => {
  return (
    <div
      className={`container mx-auto my-12 border-2 border-gray-200 border-solid h-[40rem] ${className} `}
    >
      {children}
    </div>
  );
};

export default TableContainer;
