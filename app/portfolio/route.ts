import { NextResponse } from "next/server";
import { projects } from "@/lib/projects";

export async function GET() {
  const summary = projects.map(({ slug, title, description, thumbnail }) => ({
    slug,
    title,
    description,
    thumbnail,
  }));
  return NextResponse.json(summary);
}
