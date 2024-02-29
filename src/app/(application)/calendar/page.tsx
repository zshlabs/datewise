// import Header from "../components/[header]/Header";
import { getEvents } from "@/app/(public)/actions";
import Calendar from "./components/Calendar";
import { auth } from "@clerk/nextjs";

export default async function CalendarPage() {
  const { userId } = auth();
  if (!userId) return null;
  const { events } = await getEvents(userId);

  return (
    <main>
      <h1>Calendar page</h1>
      <Calendar events={events} />
    </main>
  );
}
