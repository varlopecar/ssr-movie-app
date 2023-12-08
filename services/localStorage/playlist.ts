import { LocalStoragePlaylist, Movie } from "@/types";

const localStorageKey = "playlist";

const defaultPlaylist: LocalStoragePlaylist = {
  name: "",
  description: "",
  movies: [],
};

function get(): LocalStoragePlaylist {
  const stringifiedPlaylist = window.localStorage.getItem(localStorageKey);
  if (!stringifiedPlaylist) {
    return defaultPlaylist;
  }

  const playlist = JSON.parse(stringifiedPlaylist) as LocalStoragePlaylist;
  return playlist;
}

function set(playlist: LocalStoragePlaylist) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(playlist));
}

function addMovie(movie: Movie): LocalStoragePlaylist {
  const currentPlaylist = get();
  const updatedPlaylist = {
    ...currentPlaylist,
    movies: [...currentPlaylist.movies.filter((m : Movie) => m.id !== movie.id), movie],
  };
  set(updatedPlaylist);

  return updatedPlaylist;
}

function removeMovie(movie: Movie): LocalStoragePlaylist {
  const currentPlaylist = get();
  const updatedPlaylist = {
    ...currentPlaylist,
    movies: [...currentPlaylist.movies.filter((m : Movie) => m.id !== movie.id)],
  };
  set(updatedPlaylist);

  return updatedPlaylist;
}

function setMetadata({ name, description }: { name: string; description: string }): LocalStoragePlaylist {
  const currentPlaylist = get();
  const updatedPlaylist = {
    ...currentPlaylist,
    name,
    description,
  };
  set(updatedPlaylist);

  return updatedPlaylist;
}

const localStoragePlaylist = {
  addMovie,
  get,
  set,
  removeMovie,
  setMetadata,
};

export default localStoragePlaylist;