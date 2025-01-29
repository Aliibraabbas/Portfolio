import { NextResponse } from "next/server";
import db from "@/frameworks/db";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await db.contact.create({ data: { name, email, message } });

  return NextResponse.json({ success: true });
}
