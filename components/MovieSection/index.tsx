import { fetchMovie } from "@/services/api/tmb";
import MovieCard from "../MovieCard";
import AddToPlaylistButton from "../AddToPlaylistButton";

type Props = {
    movieId: number;
};

const MovieSection = async ({ movieId }: Props) => {
    const movie = await fetchMovie(movieId);

    return (
        <section>
            <AddToPlaylistButton movie={movie} />
            <MovieCard movie={movie} />
        </section>
    );
};
export default MovieSection;