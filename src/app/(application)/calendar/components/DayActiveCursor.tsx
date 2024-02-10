import React from "react";

interface Props {
  minutes: number;
}

function DayActiveCursor({ minutes }: Props) {
  return (
    <div
      className={`h-[23px] w-[100%] left-0 border-x-2 border-blue-600 absolute flex items-center`}
      style={{
        top: `${Math.round((minutes / 60) * 100)}%`,
      }}
    >
      <div className="h-[3px] w-[100%] bg-blue-600"></div>
    </div>
  );
}

export default DayActiveCursor;
