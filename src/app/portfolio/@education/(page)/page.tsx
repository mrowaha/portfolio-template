/**
 * Education Section Server Component responsible for fetching education data
 * @author Muhammad Rowaha
 */
import {z} from "zod";
import { schema as education, type SchemaType as Education } from "@/lib/schema/education";
import { env } from "@/utils/env";
import EducationSection from "@/components/sections/education";

export const dynamic = 'force-dynamic';

const educationsSchema = z.array(education);
export default async function Education() {

  const response = await fetch(env.FIREBASE_URL + "/education.json");
  const data = await response.json();

  let educations : Education[] = Object.values(data);
  educationsSchema.parse(educations);
  educations.sort((a, b) => (a.order < b.order) ? -1 : 1);

  return (
    <EducationSection 
      educations={educations}
    />
  )
}