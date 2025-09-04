import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Provider/CartProvider";
import { updateUI } from "../utils/updateUI";

const BASKET_WRAPPER = document.querySelector("#basketWrapper");

const basketList = () => {
  let data = JSON.parse(localStorage.getItem("cart")) || [];

  if (data.length === 0) {
    BASKET_WRAPPER &&
      (BASKET_WRAPPER.innerHTML =
        "<div class='flex items-center justify-center w-full h-[400px] overflow-hidden'><img src='https://assets-v2.lottiefiles.com/a/2defe0b8-1170-11ee-b6e4-ff7e86f4c114/cgpsmCHz8w.gif' /></div>");
    return;
  }

  let renderBasket = data
    .map(
      (item) => `
    <div class="cart-item bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100" data-id="${item.id}">
      <div class="flex items-center gap-6">
        <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
          <div class="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
            <img src="${item.image}" alt="${item.name}" />
          </div>
        </div>

        <div class="flex-1">
          <h3 class="font-medium text-gray-900 mb-2">${item.name}</h3>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500 line-through">${item.price}₼</span>
            <span class="text-xl font-semibold text-gray-900">${item.discountPrice}₼</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button class="decrease-btn w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-lg font-medium">-</button>
          <span class="w-8 text-center font-medium">${item.quantity}</span>
          <button class="increase-btn w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-lg font-medium">+</button>
          <button class="remove-btn ml-4 p-2 text-gray-400 hover:text-red-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>`
    )
    .join("");

  BASKET_WRAPPER && (BASKET_WRAPPER.innerHTML = renderBasket);
  BASKET_WRAPPER &&
    BASKET_WRAPPER.querySelectorAll(".increase-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".cart-item").dataset.id;
        increaseQuantity(id);
        updateUI();
      });
    });

  BASKET_WRAPPER &&
    BASKET_WRAPPER.querySelectorAll(".decrease-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".cart-item").dataset.id;
        decreaseQuantity(id);
        basketList();
        updateUI();
      });
    });

  BASKET_WRAPPER &&
    BASKET_WRAPPER.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".cart-item").dataset.id;
        removeFromCart(id);
        basketList();
        updateUI();
      });
    });
};

export default basketList;
