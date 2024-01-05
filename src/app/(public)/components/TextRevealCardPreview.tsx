"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[100vh]  w-full">
      <TextRevealCard
        text="We are Live!"
        revealText="On Product Hunt"
        className="text-center"
      >
        <TextRevealCardTitle>
          Amazing Update from{" "}
          <span className="font-bold text-[#FF6154]">Crackeddevs</span>
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
