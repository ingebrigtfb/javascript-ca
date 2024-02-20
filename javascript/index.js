import { listData } from "./utils.js"


let collection = [];
const outElement = document.getElementById("movieList");

async function collectMovies() {
    try {
        const api = `https://v2.api.noroff.dev/square-eyes`;
        const response = await fetch(api);
        const data = await response.json ();

        collection = data.data;

        listData(collection, outElement);
    } catch(error) {
        console.error(`Could not fetch data...`, error)
        outElement.innerHTML = `Could not fetch data...`
    }
}

collectMovies();