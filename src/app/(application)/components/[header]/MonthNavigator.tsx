"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MonthNavigator() {
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
