import { Movie, SearchMoviesResult } from "../../../types";
const rootUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.TMDB_API_KEY;

export async function fetchMovies(search: string): Promise<SearchMoviesResult> {
  return fetch(
    `${rootUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
  ).then(async (res) => {
    if (res.status >= 400) throw new Error();
    return await res.json();
  }) as Promise<SearchMoviesResult>;
}

export async function fetchMovie(id: number): Promise<Movie> {
  return fetch(`${rootUrl}/movie/${id}?api_key=${apiKey}&language=en-US`).then(
    async (res) => {
      if (res.status >= 400) throw new Error();
      return await res.json();
    }
  ) as Promise<Movie>;
}
