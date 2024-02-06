"use client";

import { IconPlus } from "@tabler/icons-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createEvent } from "@/app/(public)/actions";
import { DatePickerWithRange } from "./DatePickerWithRange";
// import { currentUser } from "@clerk/nextjs";                  // this is fcking server side.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// type formSchema = {
//   title: string;
//   start: Date;
//   end: Date;
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate:z.string().optional(),
  startTime:z.string().optional(),
  endTime:z.string().optional(),
});

export default function CreateEvent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // title     String
    // start     DateTime
    // end       DateTime
    // location  String?
    defaultValues:{
    title:"",
    location:"",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    startTime: "00:00",
    endTime: "23:59",
    }
  });

function onSubmit(values: z.infer<typeof formSchema>) {  
    // console.log('Action started')
    const { title = "", location = "", startDate = "", endDate = "", startTime = "", endTime = "" } = values;
    const userId = "10"  // user Id is hardcoded
   createEvent(title, startDate, endDate,userId, startTime, endTime,location);
    // console.log(values);
    }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          {" "}
          <IconPlus /> Create Event
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a event</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of the event</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DatePickerWithRange
              onDateChange={(date) => {
                if (date?.from) {
                  // console.log(date?.from.toISOString().split("T")[0])
                  form.setValue(
                    "startDate",
                    date?.from.toISOString().split("T")[0]
                  );
                }
                if (date?.to) {
                  // console.log(date?.to.toISOString().split("T")[0])
                  form.setValue(
                    "endDate",
                    date?.to.toISOString().split("T")[0]
                  );
                }
                // if(date){
                //   console.log(date);                
                // }
              }}
              onStartTimeChange={(time) => {
                // console.log(time)
                form.setValue("startTime", time)}
              }
              onEndTimeChange={(time) => {
                // console.log(time)

                form.setValue("endTime", time)}}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>Location of the event.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
