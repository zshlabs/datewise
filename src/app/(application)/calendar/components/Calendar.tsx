"use client";
import React from "react";
import CalendarHeader from "./CalendarHeader";
import EventCard from "./EventCard";
import DayActiveCursor from "./DayActiveCursor";
import TimeActiveCursor from "./TimeActiveCursor";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const hours = Array.from({ length: 24 }, (_, i) => i + 1);

const CalendarGrid = () => {
  return (
    <div className="grid grid-cols-8 overflow-hidden">
      {/* Hours column */}
      <div className="col-span-1">
        <div className="border-b border-r border-gray-100 flex items-center justify-center h-[60px] font-semibold text-sm">
          PST
        </div>
        <div className="border-b border-r border-gray-100 flex items-center justify-center h-[150px]">
          All day
        </div>
        {hours.map((hour) => (
          <div
            key={hour}
            className="border-r border-gray-100 flex items-start justify-center h-[150px] p-2 relative"
          >
            <div className="absolute flex items-center w-[100%] justify-center">
              {hour > 12 ? hour - 12 : hour} {hour > 12 ? "PM" : "AM"}
              <div className="absolute h-[10px] left-[80%] top-[50%] translate-y-[-50%] border-l-2 border-gray-200 flex items-center">
                <div className="h-[2px] w-[100vw] bg-gray-200"></div>
              </div>
            </div>
            {/* Active cursor for current time */}
            {hour == 2 && (
              <div className="absolute flex items-center w-[100%] justify-center top-[50px] text-blue-500">
                2:45 AM
                <TimeActiveCursor />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Week days column */}
      {days.map((day) => (
        <div
          key={day}
          className={`col-span-1 ${day == "Thursday" && "bg-blue-50"} ${(day == "Saturday" || day == "Sunday") && "bg-gray-100/20 pattern-lines-diagonal-right-gray-100/80 pattern-lines-diagonal-right-scale-[4]"}`}
        >
          {/* Day heading */}
          <div
            className={`bg-white border-b border-r border-gray-100 flex items-center justify-center h-[60px] font-semibold  ${day == "Thursday" && "border-b-4 border-b-blue-500"} text-sm`}
          >
            {day.slice(0, 3).toUpperCase()}
          </div>

          {/* All day row */}
          <div
            key={0}
            className="border-b border-r border-gray-100 h-[150px] p-2"
          >
            {/* Events */}
            {day == "Thursday" && (
              <EventCard variant="red" title="Carl's birthday" time="all-day" />
            )}
          </div>

          {/* Hour rows */}
          {hours.map((hour, i) => (
            <div
              key={hour}
              className="border-r border-gray-100 h-[150px] relative p-2"
            >
              {/* Active cursor for current time and day */}
              {i == 1 && day == "Thursday" && <DayActiveCursor />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Calendar() {
  return (
    <>
      <CalendarHeader />
      <CalendarGrid />
    </>
  );
}
