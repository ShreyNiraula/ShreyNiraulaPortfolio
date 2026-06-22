import { defineCollection } from "astro:content";
import { participationSchema } from "../data/schema";

const participations = defineCollection({
  type: "content",
  schema: participationSchema
});

export const collections = {
  participations
};