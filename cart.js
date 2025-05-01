function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product.name + ' added to your cart!');
  }
}