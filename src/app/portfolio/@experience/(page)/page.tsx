/**
 * Experience Section Server Component responsible for fetching experience data
 * @author Muhammad Rowaha
 */
import {z} from "zod"
import {schema as experience, type SchemaType as Experience} from "@/lib/schema/experience";
import { db } from "@/lib/admin/db";
import ExperienceSection from "@/components/sections/experience";

export const dynamic = 'force-dynamic';


const experiencesSchema = z.array(experience); 
export default async function Experience() {

  const ref = db.ref("experience");
  const snapshot = await ref.once("value");
  const data = snapshot.val();

  let experiences : Experience[]  = Object.values(data);
  experiencesSchema.parse(experiences);
  experiences.sort((a, b) => (a.order < b.order) ? -1 : 1);
  
  return (
    <ExperienceSection 
      experiences={experiences}
    />
  )
}