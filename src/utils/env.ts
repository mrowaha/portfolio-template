import {z} from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_IMAGE_KIT_ID: z.string()
  },
  server: {
    FIREBASE_URL: z.string(),
    FIREBASE_SERVICE_ACCOUNT: z.string(),
    APP_EMAIL: z.string().email(),
    APP_PASSWORD: z.string()
  },
  runtimeEnv: {
    FIREBASE_URL: process.env.FIREBASE_URL,
    FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_SERVICE_ACCOUNT,
    NEXT_PUBLIC_IMAGE_KIT_ID: process.env.NEXT_PUBLIC_IMAGE_KIT_ID,
    APP_EMAIL: process.env.APP_EMAIL,
    APP_PASSWORD: process.env.APP_PASSWORD
  }
});