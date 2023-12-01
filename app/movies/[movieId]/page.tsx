import MovieSection from "@/components/MovieSection";
import { Typography } from "@mui/material";
import { notFound } from "next/navigation";
import classes from "./page.module.css";
import { fetchMovie } from "@/services/api/tmb";
import { Metadata } from "next";

type Props = {
    params: {
        movieId: string;
    };
};

const handleParams = ({ params }: Props) => {
    const movieId = Number(params.movieId);
    const isMovieIdValid = Number.isInteger(movieId) && (movieId) > 0;
    return { movieId, isMovieIdValid };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { movieId, isMovieIdValid } = handleParams({ params });

    if (!isMovieIdValid) {
        return notFound();
    }

    try {
        const movie = await fetchMovie(movieId);
        return {
            title: `${movie.title} - My movies`,
            description: `Page details of movie: ${movie.title}`,
        };
    } catch (error) {
        return notFound();
    }
}

const MoviePage = async ({ params }: Props) => {
    const { movieId, isMovieIdValid } = handleParams({ params });
    if (!isMovieIdValid) {
        return notFound();
    }
    return (
        <div className={classes.root}>
            <Typography>Movie ID: {movieId}</Typography>
            <MovieSection movieId={movieId} />
        </div>
    );
};

export default MoviePage;