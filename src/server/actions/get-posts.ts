"use server";

import { db } from "@/server";

export default async function getPosts() {
  const data = await db.query.posts.findMany();

  if (!data) {
    return { error: "No posts found" };
  }
  console.log(data);

  return { success: data };
}
