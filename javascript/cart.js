import {  listDataToCart, cart } from "./utils.js"
console.log("cart:", cart)

const outElement = document.getElementById("cart-container"); 

async function inCart(cart) {
    try {
        const api = `https://v2.api.noroff.dev/square-eyes/`;
        const response = await fetch(api);
        console.log(response);
        const data = await response.json();
        console.log("Data:", data);
        let filtered = data.data.filter((item)=>{
            let id = item.id;
            return cart.includes(id);
        });
        console.log("Filtered Collection", filtered)
        if (filtered.length > 0) {
            listDataToCart (filtered, outElement);
        } else {
            outElement.innerHTML = `There is nothing in your cart`;
        }

    }catch (error) {
        console.error(error.message);
        outElement.innerHTML = `Could not fetch data..`;
    }

}

inCart(cart); 

function deleteFromCart(ClickedId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.filter(item => item !== ClickedId);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    //alert("Item is deleted");

    location.reload();
}

document.addEventListener('click', function(event){
    if (event.target.classList.contains('deleteBtn')) {
        deleteFromCart(event.target.id);
    }
});


