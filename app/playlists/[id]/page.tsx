import PlaylistDetailSection from "@/components/PlaylistDetailSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageHead from "./PageHead";

type Props = {
    params: {
        id: string
    }
}

function handleParams(params: Props["params"]): number {
    const playlistId = parseInt(params.id)

    const isPlaylistIdValid = !isNaN(playlistId)

    if (!isPlaylistIdValid) {
        return notFound()
    }

    return playlistId
}

export function generateMetadata({ params }: Props): Metadata {
    const playlistId = handleParams(params);

    return {
        title: `${playlistId} - My movies`,
        description: `Page details of playlist: ${playlistId}`,

    };
}

export default function PlaylistPage({ params }: Props) {
    const playlistId = handleParams(params);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <PageHead id={playlistId} />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <PlaylistDetailSection id={playlistId} />
            </Suspense>
        </>
    );
}