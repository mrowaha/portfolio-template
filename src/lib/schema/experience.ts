import {z} from "zod";

export const schema = z.object({
  company: z.string(),
  position: z.string(),
  from: z.string(),
  to: z.string(),
  img: z.string(),
  roles: z.array(z.string()),
  order: z.number(),
})

export type SchemaType = z.infer<typeof schema>;