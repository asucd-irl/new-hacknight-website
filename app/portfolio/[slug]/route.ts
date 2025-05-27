import { NextResponse } from "next/server";
import { projects } from "@/lib/projects";

type Params = { params: { slug: string } };

export async function GET(_: Request, { params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
