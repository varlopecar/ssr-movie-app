import PlaylistSection from '@/components/PlaylistSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Playlist creation - My movies",
  description: "Playlist Creation Page",
};

const PlaylistCreationPage = () => {

  return (
    <PlaylistSection />
  )
}

export default PlaylistCreationPage