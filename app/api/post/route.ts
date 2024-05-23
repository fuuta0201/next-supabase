import prisma from "@/lib/prismaClient"
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany(); // postの全てのデータ
  return NextResponse.json(allBBSPosts);
}