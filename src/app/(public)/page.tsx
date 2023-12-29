// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>Datewise - A better calendar</div>
      <div className="bg-primary text-secondary py-5 px-8 my-24 font-bold border-md rounded-xl ">
        <Link href="/calendar"> Try Calendar </Link>
      </div>
    </main>
  );
}
