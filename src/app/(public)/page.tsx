// import Image from "next/image";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { env } from "@/lib/env";

export default function Home() {
  const { userId } = auth();

  if (env.NODE_ENV === "production") {
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <div>Datewise - A better calendar</div>
        <div className="font-semibold">coming soon</div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>Datewise - A better calendar</div>
      {userId ? (
        <Link
          href="/calendar"
          className="bg-primary text-secondary py-5 px-8 my-24 font-bold border-md rounded-xl"
        >
          {" "}
          Go to Calendar{" "}
        </Link>
      ) : (
        <Link
          href="/auth/register"
          className="bg-primary text-secondary py-5 px-8 my-24 font-bold border-md rounded-xl"
        >
          {" "}
          Login{" "}
        </Link>
      )}
    </main>
  );
}
