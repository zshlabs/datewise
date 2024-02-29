"use client";
import React from "react";
import CalendarHeader from "./CalendarHeader";
import EventCard from "./EventCard";
import DayActiveCursor from "./DayActiveCursor";
import TimeActiveCursor from "./TimeActiveCursor";
import { Event } from "@prisma/client";
import HourCursor from "./HourCursor";

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

interface Props {
  events: Event[];
}

const CalendarGrid = ({ events }: Props) => {
  const now = new Date();

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
            <HourCursor hour={hour} />
            {/* Active cursor for current time */}
            {hour == now.getHours() && <TimeActiveCursor now={now} />}
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
              style={{ marginTop: i == 0 ? "20px" : "0" }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="absolute h-full w-full"
                  style={{
                    width: "calc(100% - 15px)",
                    top: `${Math.round((new Date(event.start).getMinutes() / 60) * 100)}%`,
                  }}
                >
                  {days[new Date(event.start).getDay()] == day &&
                    hour == new Date(event.start).getHours() && (
                      <EventCard
                        variant="red"
                        title={event.title}
                        time={{
                          from: new Date(event.start),
                          to: new Date(event.end),
                        }}
                      />
                    )}
                </div>
              ))}
              {/* Active cursor for current time and day */}
              {hour == now.getHours() && day == days[now.getDay()] && (
                <DayActiveCursor minutes={now.getMinutes()} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Calendar({ events }: Props) {
  return (
    <>
      <CalendarHeader />
      <CalendarGrid events={events} />
    </>
  );
}
