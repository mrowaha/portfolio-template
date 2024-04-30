import { type SchemaType as Education } from "@/lib/schema/education";
export interface EducationSectionProps {
  educations: Education[];
}

export interface EducationCardProps{
  data: Education;
  grow: boolean;
  growTimeout: number;
}