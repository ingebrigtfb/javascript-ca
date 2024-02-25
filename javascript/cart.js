import { listDataToCart, cart } from "./utils.js";
console.log("cart:", cart);

const outElement = document.getElementById("cart-container");
const purchaseButton = document.getElementById("purchase-btn");
const form = document.getElementById("checkout-form");

async function inCart(cart) {
  try {
    const api = `https://v2.api.noroff.dev/square-eyes/`;
    const response = await fetch(api);
    console.log(response);
    const data = await response.json();
    console.log("Data:", data);
    let filtered = data.data.filter((item) => {
      let id = item.id;
      return cart.includes(id);
    });
    console.log("Filtered Collection", filtered);
    if (filtered.length > 0) {
      listDataToCart(filtered, outElement);
      purchaseButton.disabled = false;
    } else {
      outElement.innerHTML = `<p class="cart-message">There is nothing in your cart</p> 
            <div class="all-movies-btn"><a href="./all-movies.html" id="allMoviesBtn">View all movies</a></div>`;
      purchaseButton.disabled = true;
    }
  } catch (error) {
    console.error(error.message);
    outElement.innerHTML = `<p>Could not fetch data..</p>`;
  }
}

inCart(cart);

purchaseButton.disabled = true;

function deleteFromCart(ClickedId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCart = cart.filter((item) => item !== ClickedId);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  //alert("Item is deleted");

  location.reload();
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    deleteFromCart(event.target.id);
  }

  if (event.target.id === "purchase-btn" && purchaseButton.disabled) {
    event.preventDefault();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Cart Length:", cart.length);
  if (cart.length > 0) {
    window.location.href = "./checkout-sucsess.html";
  }
});
