"use client";

import { IconArrowRight } from "@tabler/icons-react";

export default function Input() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="walter@breakingbad.com"
        className="rounded-l-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10  py-3 md:py-5 px-4 md:px-10 text-secondary bg-neutral-950 placeholder:text-neutral-700"
      />
      <button className="text-4xl rounded-r-lg bg-primary py-2 px-5 bg-white text-black z-10">
        <IconArrowRight />
      </button>
    </div>
  );
}
