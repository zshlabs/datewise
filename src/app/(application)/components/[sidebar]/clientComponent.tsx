"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  IconCalendarMonth,
  IconTableColumn,
  IconSettings,
  IconProgress,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const ClientComponent: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-slate-100 p-4 text-white min-h-screen">
      <h2 className="text-2xl text-primary font-semibold mb-4">
        {" "}
        <Link href={'/'}>
        <IconProgress className="inline-block mr-2" /> Datewise
        </Link>
      </h2>
      <ul className="space-y-4">
        <hr className="" />
        <li
          className={clsx("p-2 rounded-md", {
            "bg-primary text-white": pathname === "/overview",
          })}
        >
          <IconTableColumn
            className={clsx("inline-block mr-2", {
              "text-white": pathname === "/overview",
              "text-primary": pathname !== "/overview",
            })}
          />
          <Link
            href="/overview"
            className={clsx({
              "text-white": pathname === "/overview",
              "text-primary": pathname !== "/overview",
            })}
          >
            Overview
          </Link>
        </li>
        <li
          className={clsx("p-2 rounded-md", {
            "bg-primary text-white": pathname === "/calendar",
          })}
        >
          <IconCalendarMonth
            className={clsx("inline-block mr-2", {
              "text-white": pathname === "/calendar",
              "text-primary": pathname !== "/calendar",
            })}
          />
          <Link
            href="/calendar"
            className={clsx({
              "text-white": pathname === "/calendar",
              "text-primary": pathname !== "/calendar",
            })}
          >
            Calendar
          </Link>
        </li>
        <li
          className={clsx("p-2 rounded-md", {
            "bg-primary text-white": pathname === "/settings",
          })}
        >
          <IconSettings
            className={clsx("inline-block mr-2", {
              "text-white": pathname === "/settings",
              "text-primary": pathname !== "/settings",
            })}
          />
          <Link
            href="/settings"
            className={clsx({
              "text-white": pathname === "/settings",
              "text-primary": pathname !== "/settings",
            })}
          >
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default ClientComponent;
