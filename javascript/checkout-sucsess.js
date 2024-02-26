import { listDataToConfirm, cart } from "./utils.js";

const outElement = document.getElementById("sucsess-container");

async function cartConfirm(cart) {
  try {
    const api = `https://v2.api.noroff.dev/square-eyes/`;
    const response = await fetch(api);
    //console.log(response);
    const data = await response.json();
    //console.log("Data:", data);
    let filtered = data.data.filter((item) => {
      let id = item.id;
      return cart.includes(id);
    });
    //console.log("Filtered Collection", filtered);
    if (filtered.length > 0) {
      listDataToConfirm(filtered, outElement);
      localStorage.clear();
    } else {
      outElement.innerHTML = `<p class="cart-message">something went wrong</p>`;
    }
  } catch (error) {
    console.error(error.message);
    outElement.innerHTML = `<p>Could not fetch data..</p>`;
  }
}

cartConfirm(cart);
