import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - My movies",
  description: "A website about building playlists of movies",
};

export default function Home() {
  return (
    <div>
      <Typography>
        Welcome to this site about building playlists of movies...
      </Typography>
    </div>
  );
}