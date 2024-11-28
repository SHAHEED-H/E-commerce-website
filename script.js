let cartCount = 0;

function addToCart(product, price) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${cartCount} has been added to your cart.`);
}
