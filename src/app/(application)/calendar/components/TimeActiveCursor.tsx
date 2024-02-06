import React from "react";

function TimeActiveCursor() {
  return (
    <div className="absolute h-[10px] left-[80%] top-[50%] translate-y-[-50%] border-l-2 border-blue-300 flex items-center">
      <div className="h-[2px] w-[100vw] bg-blue-300"></div>
    </div>
  );
}

export default TimeActiveCursor;
