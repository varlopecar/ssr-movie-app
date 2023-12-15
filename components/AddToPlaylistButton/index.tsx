'use client'

import { Movie } from '@/types'
import { Add } from '@mui/icons-material'
import { Alert, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import playlistService from '@/services/localStorage/playlist'

type AddToPlaylistButtonProps = {
    movie: Movie
}

const AddToPlaylistButton = ({ movie }: AddToPlaylistButtonProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        try {
            playlistService.addMovie(movie)
            setOpen(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Button
                onClick={handleClick}
                variant="contained"
                startIcon={<Add />}
                sx={{ mb: 2 }}
            >
                Add to playlist
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={() => setOpen(false)}
                key="topright"
                autoHideDuration={3000}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Movie added to playlist
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddToPlaylistButton