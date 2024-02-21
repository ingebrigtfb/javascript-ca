let productDetailPage = document.querySelector(".main-productdetail");
let idForMovie = [];

let argum = new URL (document.location).searchParams;

let id = argum.get("id"); 

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


function movieDetailsPage(api, output) {
    let product = api; 

    output.innerHTML = `<div class="product-style">
    <img src="${product.image.url}" alt="${product.name} Poster">
    <h2>${product.title}</h2>
    <p>Genre: ${product.genre}</p>
    <p>Description: ${product.description}</p>
    </div>`;
}


