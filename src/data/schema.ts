import { z } from "astro:content";

export const participationSchema = z.object({
  title: z.string(),
  event: z.string(),
  location: z.string(),
  year: z.number().int(),
  description: z.string(),
  credentialUrl: z.string().url().optional(),
  badgeLabel: z.string().optional(),
  tags: z.array(z.string()).default([])
});