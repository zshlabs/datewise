import { IconDots } from "@tabler/icons-react";
import React from "react";

interface Props {
  variant: "green" | "red" | "gray" | "orange" | "yellow" | "blue";
}

function EventCard({ variant }: Props) {
  return (
    <div
      className={`w-[100%] h-[100%] border border-${variant}-500 rounded-xl p-[2px] bg-${variant}-100/50`}
    >
      <div
        className={`w-[100%] h-[100%] border border-${variant}-500 rounded-[10px] p-2 flex flex-col`}
      >
        <div className="flex-1">
          <h4 className={`font-bold text-${variant}-700`}>Carl's birthday</h4>
          <p className={`text-${variant}-800 text-sm font-semibold`}>All day</p>
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
