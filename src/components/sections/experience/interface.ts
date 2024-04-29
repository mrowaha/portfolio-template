import { type SchemaType as Experience } from "@/lib/schema/experience";

export interface ExperienceSectionProps {
  experiences: Experience[];
}

export interface ExperienceCardProps  {
  data: Experience;
  grow: boolean;
  growTimeout? : number;
}