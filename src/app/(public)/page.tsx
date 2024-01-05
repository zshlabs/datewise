// import Image from "next/image";
// import Link from "next/link";
// import { auth } from "@clerk/nextjs";
// import { env } from "@/lib/env";
import Input from "./components/Input";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  // const { userId } = auth();

  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {" "}
      <div className="max-w-2xl mx-auto p-4 md:p-8">
        <h1 className="relative z-10 text-2xl md:text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the Waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 md:my-8 text-sm md:text-xl text-center relative z-10">
          A better Google Calendar.
        </p>
        <Input />
      </div>
      {/* <div className="text-white z-10">
      need a demo? <IconX/>{" "} - <a href="https://x.com/theanuragdev">@theanuragdev</a>
      </div> */}
      <BackgroundBeams />
    </div>
  );
}
