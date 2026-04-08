let cart = [];
let totalItems = 0;

function addToCart(name, price) {
    cart.push({name, price});
    totalItems++;

    document.getElementById("cart-count").innerText = totalItems;

    alert(name + " added to cart!");
}
