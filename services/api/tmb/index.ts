import { Movie, SearchMoviesResult } from "../../../types";
const rootUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY;
export const fallBackMovieImageUrl = "/images/movie-fallback.png";

export async function fetchMovies(search: string): Promise<SearchMoviesResult> {
  return fetch(
    `${rootUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
  ).then(async (res) => {
    await delay(500);
    if (res.status >= 400) throw new Error();
    return await res.json();
  }) as Promise<SearchMoviesResult>;
}

export async function fetchMovie(id: number): Promise<Movie> {
  return fetch(`${rootUrl}/movie/${id}?api_key=${apiKey}&language=en-US`).then(
    async (res) => {
      await delay(500);
      if (res.status >= 400) throw new Error();
      return await res.json();
    }
  ) as Promise<Movie>;
}

export function retrieveMovieImageUrl(path: string | null) {
  console.log(fallBackMovieImageUrl)
  if (!path) return fallBackMovieImageUrl;

  const isPathStartingWithSlash = path?.startsWith("/");
  const pathWithoutStartingSlash = isPathStartingWithSlash
    ? path.substring(1)
    : path;

  return `https://image.tmdb.org/t/p/w500/${pathWithoutStartingSlash}`;
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
