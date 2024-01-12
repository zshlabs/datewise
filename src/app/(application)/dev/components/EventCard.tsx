import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

import React from "react";

type cardProps = {
  title: string;
  description: string;
  // have to add a time type , also have to get link of event to open it.
  //   time: string;
};

const colorStyle = [
  "bg-pink-200",
  "bg-orange-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-gray-200",
];

export default function EventCard(props: cardProps) {
  const randomColor = colorStyle[Math.floor(Math.random() * colorStyle.length)];
  // this makes the card colors random ,
  // but also the color changes in every render , is it a good UX ??
  return (
    <Card className={cn(randomColor)}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
