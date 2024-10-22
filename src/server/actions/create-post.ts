"use server";

import { db } from "@/server";
import { posts } from "../schema";

export default async function createPost(formData: FormData) {
  const title = formData.get("title")?.toString();
  if (!title) {
    throw new Error("title is required");
  }

  await db.insert(posts).values({
    title,
  });
}
