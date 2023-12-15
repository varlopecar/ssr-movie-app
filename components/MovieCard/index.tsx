// import { getMovieImageUrl } from "@/services/api/tmdb";
import { Card, CardContent, Box, Rating, Typography } from "@mui/material";
import classes from "./index.module.css";
// import Image from "next/image";
import { Movie } from "@/types";
import Image from "next/image";
import { retrieveMovieImageUrl } from "@/services/api/tmbd";

type Props = {
    movie: Movie;
};

const MovieCard = async ({ movie }: Props) => {
    const image = retrieveMovieImageUrl(movie.poster_path);

    return (
        <Card>
            <CardContent className={classes.root}>
                <Box className={classes.imageWrapper}>
                    <Image
                        priority
                        src={image}
                        alt={`poster ${movie.title}`}
                        width={267}
                        height={400}
                    />
                </Box>
                <Box className={classes.content}>
                    <Rating
                        defaultValue={movie.vote_average}
                        precision={0.25}
                        max={10}
                        size="large"
                        readOnly
                    />
                    <Typography gutterBottom variant="h5" component="div" mt={3}>
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={3}>
                        Date de sortie : {movie.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Titre original : {movie.original_title} - VO :{" "}
                        {movie.original_language}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Popularité : {movie.popularity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Évaluation : {movie.vote_average}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Votes : {movie.vote_count}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
export default MovieCard;