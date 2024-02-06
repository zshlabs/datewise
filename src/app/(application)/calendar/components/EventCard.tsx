import { IconDots } from "@tabler/icons-react";
import React from "react";

interface Props {
  variant: "green" | "red" | "gray" | "orange" | "yellow" | "blue";
  title: string;
  time: "all-day" | { from: Date; to: Date };
}

function EventCard({ variant, title, time }: Props) {
  const startTime =
    time != "all-day" &&
    time.from.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const endTime =
    time != "all-day" &&
    time.to.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  return (
    <div
      className={`w-[100%] h-[100%] border border-${variant}-500 rounded-xl p-[2px] bg-${variant}-100/50`}
    >
      {/* This div is to preload tailwind colors classes because it won't support dynamic variables */}
      <div className="hidden">
        <div className="border-green-500 bg-green-100/50 text-green-700 text-green-800 bg-green-800/20 bg-green-800/10"></div>
        <div className="border-blue-500 bg-blue-100/50 text-blue-700 text-blue-800 bg-blue-800/20 bg-blue-800/10"></div>
        <div className="border-red-500 bg-red-100/50 text-red-700 text-red-800 bg-red-800/20 bg-red-800/10"></div>
        <div className="border-orange-500 bg-orange-100/50 text-orange-700 text-orange-800 bg-orange-800/20 bg-orange-800/10"></div>
        <div className="border-yellow-500 bg-yellow-100/50 text-yellow-700 text-yellow-800 bg-yellow-800/20 bg-yellow-800/10"></div>
        <div className="border-gray-500 bg-gray-100/50 text-gray-700 text-gray-800 bg-gray-800/20 bg-gray-800/10"></div>
      </div>

      <div
        className={`w-[100%] h-[100%] border border-${variant}-500 rounded-[10px] p-2 flex flex-col`}
      >
        <div className="flex-1">
          <h4 className={`font-bold text-${variant}-700`}>{title}</h4>
          <p className={`text-${variant}-800 text-sm font-semibold`}>
            {time == "all-day" ? "All day" : `${startTime} - ${endTime}`}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="shadow-md w-[30px] h-[30px] rounded-full border-2 border-white"
              style={{
                background: "url(https://picsum.photos/id/267/200/200)",
              }}
            ></div>
            <div
              className="shadow-md w-[30px] h-[30px] rounded-full border-2 border-white ml-[-8px]"
              style={{
                background: "url(https://picsum.photos/id/135/200/200)",
              }}
            ></div>
            <div
              className={`shadow-md h-[30px] rounded-full border-2 border-white bg-white text-xs text-${variant}-800 font-semibold ml-[-8px] overflow-hidden`}
            >
              <div
                className={`px-2 flex items-center justify-center w-[100%] h-[100%] bg-${variant}-800/20`}
              >
                12+
              </div>
            </div>
          </div>

          <div
            className={`w-[30px] h-[30px] bg-${variant}-800/10 rounded-lg flex items-center justify-center text-${variant}-800 cursor-pointer`}
          >
            <IconDots size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
