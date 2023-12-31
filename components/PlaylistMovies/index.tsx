import { Movie } from '@/types'
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Image from 'next/image'

type Props = {
    playlist: Movie[] | null | undefined,
    onMovieDeletion: (movie: Movie) => void
}

const PlaylistMovies = ({ playlist, onMovieDeletion }: Props) => {
    return (
        playlist && (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Poster</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>Overview</TableCell>
                            <TableCell>Vote Average</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playlist.map((movie) => (
                            <TableRow key={movie.id}>
                                <TableCell>{movie.title}</TableCell>
                                <TableCell>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        width={100}
                                        height={150}
                                    />
                                </TableCell>
                                <TableCell>{movie.release_date}</TableCell>
                                <TableCell>{movie.overview}</TableCell>
                                <TableCell>{movie.vote_average}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => onMovieDeletion(movie)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    )
}
export default PlaylistMovies