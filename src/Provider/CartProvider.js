const CART_KEY = "cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  let cart = getCart();
  const existProduct = cart.find((item) => item.id === product.id);

  if (existProduct) {
    cart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function increaseQuantity(id) {
  let cart = getCart();
  cart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  saveCart(cart);
}

export function decreaseQuantity(id) {
  let cart = getCart();
  cart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
  saveCart(cart);
}

export function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function getTotalDiscountPrice() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  return cart
    .reduce((total, item) => {
      return total + (item.discountPrice || item.price) * item.quantity;
    }, 0)
    .toFixed(2);
}

export function getTotalItems() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  return cart.length;
}
