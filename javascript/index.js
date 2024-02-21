import { listData } from "./utils.js"


let collection = [];
const outElement = document.getElementById("movieTop");

async function collectMovies() {
    try {
        const api = `https://v2.api.noroff.dev/square-eyes`;
        const response = await fetch(api);
        const data = await response.json();

        collection = data.data;

        const movieIdsToDisplay = ["04fd79ad-2612-4dab-b2ee-1320c4e5ccd1", "352ba432-5b5d-4ccc-9aba-f2704c500cf3", "4696b9e6-ec6e-4672-a08d-3e3212a215c8", "581f13b2-3ca4-494e-be7c-bb51fbc320f4"];

        const selectedMovies = collection.filter(movie => movieIdsToDisplay.includes(movie.id));

        listData(selectedMovies, outElement);
    } catch(error) {
        console.error(`Could not fetch data...`, error);
        outElement.innerHTML = `Could not fetch data...`;
    }
}

collectMovies();