"use server";

import { db } from "@/lib/db/client";


// Events actions

export async function createEvent(title: string, startDate: string,endDate: string, userId:string,  startTime:string,endTime:string, location?: string ) {
    // console.log(`Start Date: ${startDate}T${startTime}`);
    // console.log(`End Date: ${endDate}T${endTime}`);
    try {
      const start = new Date(`${startDate}T${startTime}`).toISOString();
      const end = new Date(`${endDate}T${endTime}`).toISOString();
      // userId is hardcoded
      const event = await db.event.create({
        data: {
          title,
          start,
          end,
          location,
          userId,
        },
      });
      // console.log(event)
      return {
        status: 200,
        event,
      };
    } catch (error) {
      return {
        status:500,
        message: `Error: ${error} `
      }
    }
  }
  
  export async function getEvents(userId: string) {
    const events = await db.event.findFirst({
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
   
  export async function createReminder(message: string, time: Date, eventId: string) {
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
  
  export async function getReminders(eventId: string) {
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
  