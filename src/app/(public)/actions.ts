"use server";

import { db } from "@/lib/db/client";

// User actions

export async function joinWaitList(email: string) {
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
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

// Events actions

export async function createEvent(title: string, start: Date, end: Date, userId: number, location?: string) {
  const event = await db.event.create({
    data: {
      title,
      start,
      end,
      location,
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

export async function getEvents(userId: number) {
  const events = await db.event.findMany({
    where: {
      userId,
    },
  });

  return {
    status: 200,
    events,
  };
}

// Remainder actions
 
export async function createReminder(message: string, time: Date, eventId: number) {
  const reminder = await db.reminder.create({
    data: {
      message,
      time,
      event: {
        connect: {
          id: eventId,
        },
      },
    },
  });

  return {
    status: 200,
    reminder,
  };
}

export async function getReminders(eventId: number) {
  const reminders = await db.reminder.findMany({
    where: {
      eventId,
    },
  });

  return {
    status: 200,
    reminders,
  };
}
