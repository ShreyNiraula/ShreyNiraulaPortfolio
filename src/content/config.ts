import { defineCollection } from "astro:content";
import { experienceSchema, participationSchema } from "../data/schema";

const participations = defineCollection({
  type: "content",
  schema: participationSchema
});

const experience = defineCollection({
  type: "content",
  schema: experienceSchema
});

export const collections = {
  participations,
  experience
};