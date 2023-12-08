'use client'

import { Movie } from '@/types'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import playlistService from '@/services/localStorage/playlist'

type AddToPlaylistButtonProps = {
    movie: Movie
}

const AddToPlaylistButton = ({ movie }: AddToPlaylistButtonProps) => {
    const handleClick = () => {
        playlistService.addMovie(movie)
    }

    return (
        <Button variant="outlined" color="primary" sx={{ my: 1 }} onClick={handleClick}>
            Add to playlist
            <Add sx={{ ml: 1 }} />
        </Button>
    )
}

export default AddToPlaylistButton