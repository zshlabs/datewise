"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function MonthNavigator() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const decrementMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const incrementMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  const buttonStyle =
    "bg-white border-slate-200 border-2 rounded-full text-primary hover:border-primary hover:text-white px-3 py-1";

  return (
    <>
      <div className="text-primary text-xl">{year}</div>
      <div className="mt-5 flex items-center  space-x-4">
        <Button onClick={decrementMonth} className={buttonStyle}>
          {"<"}
        </Button>
        <span className="text-xl ml-0 ">{`${monthNames[month]} ,`}</span>
        <span className="text-xl ml-0 text-slate-400">{`${year}`}</span>
        <Button onClick={incrementMonth} className={buttonStyle}>
          {">"}
        </Button>
      </div>
    </>
  );
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const hours = Array.from({ length: 24 }, (_, i) => i);

const CalendarGrid = () => {
  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      <div className="col-span-1">
        {hours.map((hour) => (
          <div
            key={hour}
            className="h-12 border-b border-gray-200 flex items-center justify-center"
          >
            {hour}:00
          </div>
        ))}
      </div>
      {days.map((day) => (
        <div key={day} className="col-span-1">
          {hours.map((hour) => (
            <div key={hour} className="h-12 border-b border-gray-200"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Calendar() {
  return (
    <>
      <div>
        <MonthNavigator />
        <CalendarGrid />
      </div>
    </>
  );
}
