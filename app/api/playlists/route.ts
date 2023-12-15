import { LocalStoragePlaylist } from "@/types/index";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const playlist: LocalStoragePlaylist = await req.json();

  const createdPlaylist = await prisma.playlist.create({
    data: {
      name: playlist.name,
      description: playlist.description,
      movies: {
        connectOrCreate: playlist.movies.map((movie) => ({
          where: { id: movie.id },
          create: { id: movie.id },
        })),
      },
    },
  });

  return new Response(JSON.stringify(createdPlaylist), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
