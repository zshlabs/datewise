import React from "react";
import MonthNavigator from "./MonthNavigator";
import CreateEvent from "./CreateEvent";

function CalendarHeader() {
  return (
    <div className="flex justify-between items-center py-2 px-5 border-slate-200 border-y">
      <MonthNavigator />
      <CreateEvent />
    </div>
  );
}

export default CalendarHeader;
