import {z} from "zod";

export const schema = z.object({
  name: z.string(),
  links: z.array(z.object({
    name: z.string(),
    href: z.string().url()
  })).optional(),
  description: z.string(),
  stack: z.array(z.string()),
  img: z.string(),
  order: z.number()
})


export type SchemaType = z.infer<typeof schema>;