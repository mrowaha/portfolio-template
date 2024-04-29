/**
 * Experience Section Server Component responsible for fetching experience data
 * @author Muhammad Rowaha
 */
import {z} from "zod"
import {schema as experience, type SchemaType as Experience} from "@/lib/schema/experience";
import {env} from "@/utils/env";
import ExperienceSection from "@/components/sections/experience";

export const dynamic = 'force-dynamic';


const experiencesSchema = z.array(experience); 
export default async function Experience() {

  const response = await fetch(env.FIREBASE_URL + "/experience.json");
  const data = await response.json();

  // validate data from schema;
  let experiences : Experience[]  = Object.values(data);
  experiencesSchema.parse(experiences);

  experiences.sort((a, b) => (a.order < b.order) ? -1 : 1);
  return (
    <ExperienceSection 
      experiences={experiences}
    />
  )
}