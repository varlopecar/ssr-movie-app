import { Movie } from '@/types'
import { Box, Table } from '@mui/material'
import React from 'react'
import Image from 'next/image'

type Props = {
    playlist: Movie[] | null | undefined,
    onMovieDeletion: (movie: Movie) => void
}

const PlaylistMovies = ({ playlist, onMovieDeletion }: Props) => {
    return (
        playlist && (
            <Box>
                <Table>
                    <thead>
                        <tr>
                            <th>Poster</th>
                            <th>Title</th>
                            <th>Release Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlist.map((movie) => (
                            <tr key={movie.id}>
                                <td>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        width={100}
                                        height={150}
                                    />
                                </td>
                                <td>{movie.title}</td>
                                <td>{movie.release_date}</td>
                                <td>
                                    <button onClick={() => onMovieDeletion(movie)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        )
    )
}
export default PlaylistMovies