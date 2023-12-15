import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = new PrismaClient();

const routeContextSchema = {
  params: z.object({
    id: z.coerce.number().positive().int(),
  }),
};

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = routeContextSchema.params.parse(params);

  if (!id) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  try {
    const playlist = await prisma.playlist.findUnique({
      where: {
        id,
      },
      include: {
        movies: true,
      },
    });

    if (!playlist) {
      return NextResponse.json(
        { error: "Playlist not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(playlist);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
