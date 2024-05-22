/**
 * Education Section Server Component responsible for fetching education data
 * @author Muhammad Rowaha
 */
import {z} from "zod";
import { schema as education, type SchemaType as Education } from "@/lib/schema/education";
import { db } from "@/lib/admin/db";
import EducationSection from "@/components/sections/education";

export const dynamic = 'force-dynamic';

const educationsSchema = z.array(education);
export default async function Education() {

  const ref = db.ref("education");
  const snapshot = await ref.once("value");
  const data = snapshot.val();

  let educations : Education[] = Object.values(data);
  educationsSchema.parse(educations);
  educations.sort((a, b) => (a.order < b.order) ? -1 : 1);

  return (
    <EducationSection 
      educations={educations}
    />
  )
}