import React from "react";

interface Props {
  now: Date;
}

function TimeActiveCursor({ now }: Props) {
  return (
    <div
      className={`absolute flex items-center w-[100%] justify-center text-blue-500`}
      style={{
        top: `${Math.round((now.getMinutes() / 60) * 100)}%`,
      }}
    >
      {now.toLocaleTimeString("en", {
        hour: "numeric",
        minute: "numeric",
      })}
      <div className="absolute h-[10px] left-[80%] top-[50%] translate-y-[-50%] border-l-2 border-blue-300 flex items-center">
        <div className="h-[2px] w-[100vw] bg-blue-300"></div>
      </div>
    </div>
  );
}

export default TimeActiveCursor;
