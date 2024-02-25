import { listData, filterMoviesByGenre } from "./utils.js";

let collection = [];
const outElement = document.getElementById("movieList");
const selector = document.getElementById("movieSelector");

async function collectMovies() {

if (outElement !== "none") {
    outElement.innerHTML = `<div class="loading">Loading...</div>`;

  try {
    const api = `https://v2.api.noroff.dev/square-eyes`;
    const response = await fetch(api);
    const data = await response.json();

    collection = data.data;

    listData(collection, outElement);

    selector.addEventListener("change", () => {
      const selectedGenre = selector.value;
      const filteredMovies = filterMoviesByGenre(collection, selectedGenre);
      //console.log('Filtered movies', filteredMovies)
      listData(filteredMovies, outElement);
    });
  } catch (error) {
    console.error(`Could not fetch data...`, error);
    outElement.innerHTML = `Could not fetch data...`;
  }
}
}

collectMovies();
