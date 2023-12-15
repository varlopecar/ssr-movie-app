
import ApplicationApi from ".";
import { LocalStoragePlaylist, Playlist } from "@/types";
async function create(playlist: LocalStoragePlaylist) {
  return fetch(`${ApplicationApi.apiUrl}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlist),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error saving playlist");
    }

    return response.json();
  });
}

async function get(id: number) {
  return fetch(`${ApplicationApi.apiUrl}/playlists/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  }).then((response) => {
      if (!response.ok) {
          throw new Error("Error getting playlist");
      }

      return response.json();
  });
}

const playlistApi = {
  create,
  get,
};

export default playlistApi;
