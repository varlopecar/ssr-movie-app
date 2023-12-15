"use client";

import localStoragePlaylist from "@/services/localStorage/playlist";
import { useEffect, useRef, useState } from "react";
import PlaylistMovies from "../PlaylistMovies";
import { Movie, LocalStoragePlaylist } from "@/types";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import ApplicationApi from "@/services/api/application";
import { useRouter } from "next/navigation";

const PlaylistSection = () => {
  const [playlist, setPlaylist] = useState<LocalStoragePlaylist | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const playlist = localStoragePlaylist.get();
    setPlaylist(playlist);
  }, []);

  const handleMovieDeletion = (movie: Movie) => {
    const updatedPlaylist = localStoragePlaylist.removeMovie(movie)
    setPlaylist(updatedPlaylist);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInputRef.current?.value ?? "";
    const description = descriptionInputRef.current?.value;

    if (!name || !description) {
      return;
    }

    const updatedPlaylist = localStoragePlaylist.setMetadata({
      name,
      description,
    });

    setPlaylist(updatedPlaylist);
    
    const result = await ApplicationApi.playlist.create(updatedPlaylist);

    console.log(result);

    if (result) {
      router.push(`/playlists/${result.id}`);
    }
  };

  if(!playlist) {
    return null;
  }

  return (
    <section>
      {playlist && (
        <>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap="20px"
            alignItems="center"
          >
            <TextField
              inputRef={nameInputRef}
              label="Playlist name"
              fullWidth
              defaultValue={playlist.name}
            />
            <TextField
              inputRef={descriptionInputRef}
              label="Playlist description"
              fullWidth
              defaultValue={playlist.description}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Save the playlist
            </Button>
          </Box>

          <PlaylistMovies
            playlist={playlist.movies}
            onMovieDeletion={handleMovieDeletion}
          />
        </>
      )}
    </section>
  );
};

export default PlaylistSection;