import { type SchemaType as Project } from "@/lib/schema/project";

export interface ProjectsSectionProps {
  projects: Project[];
}

export interface ProjectCardProps {
  data: Project;
  grow: boolean;
  growTimeout: number;
}