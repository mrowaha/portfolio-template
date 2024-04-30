import {z} from "zod";

export const schema = z.object({
  degree: z.string(),
  school: z.string(),
  from: z.string(),
  to: z.string(),
  img: z.string(),
  coursework: z.array(z.string()),
  highlights: z.array(z.string()),
  order: z.number()
});

export type SchemaType = z.infer<typeof schema>;