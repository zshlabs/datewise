"use client";
import React from "react";
import Link from "next/link";
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
        <IconProgress className="inline-block mr-2" /> Datewise
      </h2>
      <ul className="space-y-4">
        <hr className="" />
        <li
          className={`p-2 rounded-md ${
            pathname === "/" ? "bg-primary text-white" : ""
          }`}
        >
          <IconTableColumn
            className={`inline-block mr-2 ${
              pathname === "/" ? "text-white" : "text-primary"
            }`}
          />
          <Link
            href="/"
            className={`${pathname === "/" ? "text-white" : "text-primary"}`}
          >
            Overview
          </Link>
        </li>
        <li
          className={`p-2 rounded-md ${
            pathname === "/calendar" ? "bg-primary text-white" : ""
          }`}
        >
          <IconCalendarMonth
            className={`inline-block mr-2 ${
              pathname === "/calendar" ? "text-white" : "text-primary"
            }`}
          />
          <Link
            href="/calendar"
            className={`${
              pathname === "/calendar" ? "text-white" : "text-primary"
            }`}
          >
            Calendar
          </Link>
        </li>
        <li
          className={`p-2 rounded-md ${
            pathname === "/settings" ? "bg-primary text-white" : ""
          }`}
        >
          <IconSettings
            className={`inline-block mr-2 ${
              pathname === "/settings" ? "text-white" : "text-primary"
            }`}
          />
          <Link
            href="/settings"
            className={`${
              pathname === "/settings" ? "text-white" : "text-primary"
            }`}
          >
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default ClientComponent;
