import { fetchMovie } from "@/services/api/tmb";
import MovieCard from "../MovieCard";

type Props = {
    movieId: number;
};

const MovieSection = async ({ movieId }: Props) => {
    const movie = await fetchMovie(movieId);

    return (
        <section>
            <MovieCard movie={movie} />
        </section>
    );
};
export default MovieSection;