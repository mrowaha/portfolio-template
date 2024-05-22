/**
 * Projects Section Server Component responsible for fetching experience data
 * @author Muhammad Rowaha
 */
import {z} from "zod"
import {schema as project, type SchemaType as Project} from "@/lib/schema/project";
import { db } from "@/lib/admin/db";
import ProjectSection from "@/components/sections/projects";

export const dynamic = 'force-dynamic';

const projectsSchema = z.array(project); 
export default async function Experience() {


  const ref = db.ref("projects");
  const snapshot = await ref.once("value");
  const data = snapshot.val();

  let projects : Project[] = Object.values(data);
  projectsSchema.parse(projects);
  projects.sort((a, b) => (a.order < b.order) ? -1 : 1);

  return (
    <ProjectSection
      projects={projects} 
    />
  )
}