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

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  current: z.boolean().default(false),
  employmentType: z.string().default("Full-time"),
  stack: z.array(z.string()).default([]),
  highlights: z.array(z.string()).default([])
});