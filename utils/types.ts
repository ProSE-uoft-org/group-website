import { z } from "zod";

export const PersonSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  avatar: z.string().optional(),
  website: z.string().optional(),
  year: z.number().optional(),
});

export type PersonSchema = z.infer<typeof PersonSchema>;

export const AlumniSchema = PersonSchema.extend({ year: z.number() });
