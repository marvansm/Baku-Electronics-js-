import { getCart, getTotalDiscountPrice } from "../Provider/CartProvider";

const TOTAL_WRAPPER = document.querySelector("#totalSummary");

const totalSummary = () => {
  const cart = getCart();
  if (!TOTAL_WRAPPER) return;

  if (cart.length === 0) {
    TOTAL_WRAPPER.innerHTML =
      "<div class='flex items-center justify-center w-full h-[200px] shadow-md'> <p class='text-gray-500'>Səbətinizdə heç bir məhsul yoxdur</p> </div>";
    return;
  }

  const itemsHTML = cart
    .map(
      (item) => `
    <div class="flex justify-between items-center text-sm mb-2">
      <span class="text-gray-600">${item.name}</span>
      <span class="font-medium">${
        (item.discountPrice || item.price) * item.quantity
      }₼</span>
    </div>
    <div class="text-xs text-gray-500">${item.quantity} ədəd</div>
  `
    )
    .join("");

  const totalDiscountPrice = getTotalDiscountPrice();

  TOTAL_WRAPPER.innerHTML = `
    <div class="bg-white border border-gray-100 sticky top-6 shadow-md rounded-2xl p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Ümumi baxış</h2>
      <div class="space-y-2 mb-4">${itemsHTML}</div>
      <div class="border-t border-gray-100 pt-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-900 font-medium">Cəmi məbləğ:</span>
        </div>
        <div class="text-3xl font-bold text-gray-900">${totalDiscountPrice}₼</div>
      </div>
    </div>
  `;
};

export default totalSummary;
