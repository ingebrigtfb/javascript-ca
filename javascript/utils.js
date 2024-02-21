export function listData(list, out) {
    out.innerHTML = "";
    let newDivs = "";
    for (let product of list) {
        newDivs += `<a href=./product-detail.html?id=${product.id} class="product-style">
        <img src="${product.image.url}" alt="${product.name} Poster">
        <h2>${product.title}</h2>
        <p>Genre: ${product.genre}</p>
        
        </a>`;
    }
    out.innerHTML = newDivs;
}

export function filterMoviesByGenre(movies, genre) {
    if (genre === 'none') {
        return movies;
    } else {
        return movies.filter(movie => movie.genre === genre);
    }
}


