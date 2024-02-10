import React from "react";

interface Props {
  hour: number;
}

function HourCursor({ hour }: Props) {
  return (
    <div className="absolute flex items-center w-[100%] justify-center">
      {hour > 12 ? hour - 12 : hour} {hour > 12 ? "PM" : "AM"}
      <div className="absolute h-[10px] left-[80%] top-[50%] translate-y-[-50%] border-l-2 border-gray-200 flex items-center">
        <div className="h-[2px] w-[100vw] bg-gray-200"></div>
      </div>
    </div>
  );
}

export default HourCursor;
