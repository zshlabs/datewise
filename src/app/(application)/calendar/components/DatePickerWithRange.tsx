"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const timeOptions = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "23:59",
];

export function DatePickerWithRange({
  className,
  onDateChange,
  onStartTimeChange,
  onEndTimeChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  onDateChange?: (date: DateRange | undefined) => void;
  onStartTimeChange?: (time: string) => void;
  onEndTimeChange?: (time: string) => void;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [startTime, setStartTime] = React.useState("00:00");
  const [endTime, setEndTime] = React.useState("23:59");

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    onDateChange && onDateChange(newDate);
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStartTime(event.target.value);
    onStartTimeChange && onStartTimeChange(event.target.value);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndTime(event.target.value);
    onEndTimeChange && onEndTimeChange(event.target.value);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {""}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
          <div className="flex justify-evenly m-2 p-2">
            <div className="flex flex-col">
              <label className="text-black mb-1 text-sm font-semibold">
                Start Time
              </label>
              <select
                value={startTime}
                onChange={handleStartTimeChange}
                className="text-black bg-accent px-3 py-2 m-2 cursor-pointer rounded hover:bg-slate-200"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ml-2">
              <label className="text-black mb-1 text-sm font-semibold">
                End Time
              </label>
              <select
                value={endTime}
                onChange={handleEndTimeChange}
                className="text-black bg-accent px-3 py-2 m-2 cursor-pointer rounded hover:bg-slate-200"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
