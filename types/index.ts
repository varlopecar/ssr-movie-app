export type SearchMoviesResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type LocalStoragePlaylist = {
  name: string;
  description: string;
  movies: Movie[];
};

export type Playlist = {
  name: string;
  description: string;
  movies: Pick<Movie, 'id'>[];
};
