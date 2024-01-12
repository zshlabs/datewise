import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// import { env } from "@/lib/env";

export const db = new PrismaClient().$extends(withAccelerate());
