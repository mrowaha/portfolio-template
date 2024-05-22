import admin from "firebase-admin";
import { env } from "@/utils/env";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(env.FIREBASE_SERVICE_ACCOUNT)),
    databaseURL: env.FIREBASE_URL
  })
}

export const db = admin.database();