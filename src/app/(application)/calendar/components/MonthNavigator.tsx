import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

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
    "bg-white border-slate-300 border rounded-full text-primary hover:border-primary hover:text-white w-[40px] h-[40px] p-0";

  return (
    <div className=" flex items-center space-x-4 py-1">
      <Button onClick={decrementMonth} className={buttonStyle}>
        <IconChevronLeft size={16} stroke={3} />
      </Button>
      <h3 className="text-lg font-semibold">
        <span>{`${monthNames[month]}`}</span>
        <span className="text-slate-500">, {`${year}`}</span>
      </h3>
      <Button onClick={incrementMonth} className={buttonStyle}>
        <IconChevronRight size={16} stroke={3} />
      </Button>
    </div>
  );
}

export default MonthNavigator;
