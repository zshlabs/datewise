// import Header from "../components/[header]/Header";
import { getEvents } from "@/app/(public)/actions";
import Calendar from "./components/Calendar";
import { auth } from "@clerk/nextjs";

export default async function CalendarPage() {
  // const { userId } = auth();
  // if (!userId) return null;

  const userId = "10";
  const { events } = await getEvents(userId);
  console.log("event:" ,events);

  return (
    <main>
      <Calendar events={events} />
    </main>
  );
}
