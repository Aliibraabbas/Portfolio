import { NextResponse } from "next/server";
import db from "@/frameworks/db";

export async function GET() {
  const projects = await db.project.findMany();
  return NextResponse.json(projects);
}
