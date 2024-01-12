import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

import EventCard from "./components/EventCard";

export default function Component() {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">April, 2023</h2>
        <Button className="bg-blue-500 text-white">+ Add event</Button>
      </div>
      <Select>
        <SelectTrigger id="timezone">
          <SelectValue>PST</SelectValue>
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="pst">PST</SelectItem>
          <SelectItem value="est">EST</SelectItem>
          <SelectItem value="cst">CST</SelectItem>
          <SelectItem value="mst">MST</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-7 gap-4 mt-4">
        <div className="text-center">SUN 9</div>
        <div className="text-center">MON 10</div>
        <div className="text-center">TUE 11</div>
        <div className="text-center">WED 12</div>
        <div className="text-center">THU 13</div>
        <div className="text-center">FRI 14</div>
        <div className="text-center">SAT 15</div>
      </div>
      <div className="grid grid-cols-7 gap-4 mt-4">
        <div className="space-y-2">
          <EventCard title="Carsls birthday" description="All day" />
          <EventCard title="Carsls birthday" description="9 AM - 10 AM" />

          <EventCard title="Meeting with team" description="10 AM - 11 AM" />
          <EventCard title="Lunch break" description="1 PM - 2 PM" />
          <EventCard title="Project discussion" description="3 PM - 4 PM" />
          <EventCard title="End of day wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
        <div className="space-y-2">
          <EventCard title="Running" description="6 AM - 7 AM" />
          <EventCard title="Team Standup" description="7 AM - 8 AM" />
          <EventCard title="Client Meeting" description="9 AM - 10 AM" />
          <EventCard title="Project Review" description="11 AM - 12 PM" />
          <EventCard title="Lunch Break" description="1 PM - 2 PM" />
          <EventCard title="Design Discussion" description="3 PM - 4 PM" />
          <EventCard title="End of Day Wrap-up" description="5 PM - 6 PM" />
        </div>
      </div>
    </div>
  );
}
