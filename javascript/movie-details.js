import {  movieDetailsPage } from "./utils.js";

let productDetailPage = document.querySelector("main.main-productdetail");
let idForMovie = [];

let argum = new URL (document.location).searchParams;

let id = argum.get("id"); 
console.log(id)

async function getMoviebyId() {
    try {
        const api = `https://v2.api.noroff.dev/square-eyes/${id}`;
        const response = await fetch (api);
        const data = await response.json();
    

        idForMovie = data.data;
        //console.log(idForMovie)

        document.title = idForMovie.title;

        movieDetailsPage(idForMovie, productDetailPage); 
    }catch (error) {
        productDetailPage.innerHTML = '<p>Norwegian: ITJ MY Å SJÅ HER!</p>'
    }
}


getMoviebyId();






