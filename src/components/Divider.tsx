import React from "react";

interface IDivider {
  className?: string;
}

const Divider = ({ className }: IDivider) => {
  return (
    <div
      className={`border-t-2 border-x-0 border-b-0 ${className} w-full`}
    ></div>
  );
};

export default Divider;
