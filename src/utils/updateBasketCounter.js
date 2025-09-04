import { getTotalItems } from "../Provider/CartProvider";

const BASKET_COUNTER = document.querySelector("#basketCounter");

export const updateBasketCounter = () => {
  if (!BASKET_COUNTER) return;
  BASKET_COUNTER.innerHTML = getTotalItems();
};
