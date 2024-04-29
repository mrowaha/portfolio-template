import {z} from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_IMAGE_KIT_ID: z.string()
  },
  server: {
    FIREBASE_URL: z.string()
  },
  runtimeEnv: {
    FIREBASE_URL: process.env.FIREBASE_URL,
    NEXT_PUBLIC_IMAGE_KIT_ID: process.env.NEXT_PUBLIC_IMAGE_KIT_ID
  }
});