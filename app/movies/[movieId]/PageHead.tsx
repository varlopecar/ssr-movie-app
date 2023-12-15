import ClientHead from "@/components/ClientHead";
import { fetchMovie } from "@/services/api/tmbd";
type Props = {
    movieId: number;
};
const PageHead = async ({ movieId }: Props) => {
    const movie = await fetchMovie(movieId);
    return (
        <ClientHead
            title={`${movie.title} - My movies
`}
            description={`Page details of movie: ${movie.title}`}
        />
    );
};
export default PageHead;