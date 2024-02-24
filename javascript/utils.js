export function listData(list, out) {
    out.innerHTML = "";
    let newDivs = "";
    for (let product of list) {
        newDivs += `<a href=./product-detail.html?id=${product.id} class="product-style">
        <img src="${product.image.url}" alt="${product.name} Poster">
        <h2>${product.title}</h2>
        <p> ${product.price} NOK</p>
        <p>Genre: ${product.genre}</p>
        </a>`;
    }
    out.innerHTML = newDivs;
}


//Selector system

export function filterMoviesByGenre(movies, genre) {
    if (genre === 'none') {
        return movies;
    } else {
        return movies.filter(movie => movie.genre === genre);
    }
}

//Cart

export let cart;
const cartStorage = localStorage.getItem("cart");

if(!cartStorage) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(cartStorage);
}

console.log(cart);

export function switchCart() {
    if (cart.includes(parseInt(this.id))) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] === this.id) cart.splice(i, 1);
        }
        
    }else {
        cart.push(this.id);
        this.style.backgroundColor = "white";
        this.style.color = "black"

    }
    localStorage.setItem("cart", JSON.stringify(cart));

}

export function listDataToCart(list, out) {
    out.innerHTML = "";
    let newDivs = "";
    let totalCart = 0;
    for (let product of list) {
        newDivs += `<div class="cart-style">
        <img src="${product.image.url}" alt="${product.name} Poster">
        <h2>${product.title}</h2>
        <p> ${product.price} NOK</p>
        <div><button class="deleteBtn" id="${product.id}"">X</button></div>
        </div>`;
        totalCart += parseFloat(product.price);
    }
    newDivs +=
    `<div class="cart-price">
    <h2>Total Price:</h2>
    <p>${totalCart.toFixed(2)} NOK</p>
    </div>`;

    
    out.innerHTML = newDivs;
}

export function listDataToConfirm(list, out) {
    out.innerHTML = "";
    let newDivs = "";
    for (let product of list) {
        newDivs += `<div class="cart-style">
        <img src="${product.image.url}" alt="${product.name} Poster">
        <h2>${product.title}</h2>
        <p> ${product.price} NOK</p>
        </div>`;
    }

    
    out.innerHTML = newDivs;
}

export function movieDetailsPage(api, output) {
    let product = api; 

    output.innerHTML = `<div class="product-detail">
    <h2>${product.title}</h2>
    <img src="${product.image.url}" alt="${product.name} Poster">
    <p> ${product.price} NOK</p>
    <button class="cartButton" id="${product.id}">Add to &#x1F6D2</button> 
    <p>Genre: ${product.genre}</p>
    <p>Description: ${product.description}</p>
    </div>`; 
    

    const btns = document.querySelectorAll("button.cartButton");
    for (const btn of btns) {
        if (cart.includes(btn.id));
        btn.addEventListener("click", switchCart);

    }
}




