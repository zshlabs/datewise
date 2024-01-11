"use server";

import { db } from "@/lib/db/client";

export async function joinWaitList(email: string) {
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
    cacheStrategy: { ttl: 60 },
  });

  if (existingUser) {
    return {
      status: 400,
      message: "You're already on the waitlist!",
    };
  } else {
    const user = await db.user.create({
      data: {
        email,
      },
    });
    if (user) {
      return {
        status: 200,
        message: "You've been added to the waitlist!",
      };
    }
  }
}

export async function createEvent(name: string, date: Date, userId: number) {
  const event = await db.event.create({
    data: {
      name,
      date,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return {
    status: 200,
    event,
  };
}
