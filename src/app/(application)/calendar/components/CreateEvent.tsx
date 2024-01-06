"use client";

import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

export default function CreateEvent() {
  return (
    <div>
      <Button variant={"outline"}>
        {" "}
        <IconPlus /> Add event
      </Button>
    </div>
  );
}
