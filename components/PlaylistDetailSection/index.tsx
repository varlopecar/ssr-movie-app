import ApplicationApi from '@/services/api/application'
import { fetchMovie } from '@/services/api/tmbd'
import { Playlist } from '@/types'
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Image from 'next/image'
import CopyToClipboard from '../CopyToClipboard'

type Props = {
    id: number
}

const PlaylistDetailSection = async (props: Props) => {
    const playlist = await ApplicationApi.playlist.get(props.id)

    console.log(playlist)

    const movies = await Promise.all(
        playlist.movies.map(({ id }: { id: number }) => fetchMovie(id))
    );

    const newPlaylist: Playlist = {
        ...playlist,
        movies,
    };

    console.log(newPlaylist)

    return (
        <Container>
            <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
                {newPlaylist.name}
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                {newPlaylist.description}
            </Typography>

            <CopyToClipboard value={`http://localhost:3000/playlists/${props.id}`} />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Poster</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>Overview</TableCell>
                            <TableCell>Vote Average</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => (
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default PlaylistDetailSection