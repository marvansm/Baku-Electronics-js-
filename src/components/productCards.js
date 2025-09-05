import HttpService from "../Api/api";
import { addToCart } from "../Provider/CartProvider";
import { updateBasketCounter } from "../utils/updateBasketCounter";

const PRODUCT_CARDS_WRAPPER = document.querySelector("#productCards");

const BASKET_COUNTER = document.querySelector("#basketCounter");

const api = new HttpService("http://localhost:3000/");

window.addToCart = (product) => {
  addToCart(product);
  updateBasketCounter();
};

const productCards = () => {
  api.GetApiData("products").then((data) => {
    let renderProducts = data
      ?.map(
        (item) => `    <div
            class="cards mt-20 relative flex flex-col gap-5 bg-[#F5F5F5] dark:bg-[#2B2B2B] duration-300 rounded-[24px] pt-[22px] pr-[22px] pb-[32px] pl-[23px] overflow-visible"
          >
            <div
              class="relative -mt-18 rounded-[24px] border border-gray-200 bg-[#FFFFFF] shadow-xl h-[240px]"
            >
              <span
                class="absolute left-4 top-4 z-10 inline-flex items-center rounded-[10px] bg-[#ea2427] text-white px-2 py-1 text-[12px] font-medium"
              >
                - 80 ₼
              </span>
              <button
                class="absolute right-4 top-4 z-10 w-10 h-[30px] rounded-[32px] bg-white grid place-items-center shadow hover:shadow-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M6.45443 16.25C4.62109 16.25 3.12109 14.6429 3.12109 12.6786C3.12109 11.0714 5.28776 5.44643 5.70443 4.28571C5.78776 3.92857 6.12109 3.75 6.45443 3.75C6.78776 3.75 7.12109 3.92857 7.20443 4.28571C7.62109 5.44643 9.78776 11.0714 9.78776 12.6786C9.78776 14.6429 8.28776 16.25 6.45443 16.25ZM6.45443 7.05357C5.62109 9.46429 4.78776 11.9643 4.78776 12.6786C4.78776 13.6607 5.53776 14.4643 6.45443 14.4643C7.37109 14.4643 8.12109 13.6607 8.12109 12.6786C8.12109 11.9643 7.28776 9.46429 6.45443 7.05357ZM19.7878 16.25C17.9544 16.25 16.4544 14.6429 16.4544 12.6786C16.4544 11.0714 18.6211 5.44643 19.0378 4.28571C19.1211 3.92857 19.4544 3.75 19.7878 3.75C20.1211 3.75 20.4544 3.92857 20.5378 4.28571C20.9544 5.44643 23.1211 11.0714 23.1211 12.6786C23.1211 14.6429 21.6211 16.25 19.7878 16.25ZM19.7878 7.05357C18.9544 9.375 18.1211 11.9643 18.1211 12.6786C18.1211 13.6607 18.8711 14.4643 19.7878 14.4643C20.7044 14.4643 21.4544 13.6607 21.4544 12.6786C21.4544 11.9643 20.6211 9.46429 19.7878 7.05357Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.7878 5.875H6.45443C5.95443 5.875 5.62109 5.45 5.62109 4.8125C5.62109 4.175 5.95443 3.75 6.45443 3.75H19.7878C20.2878 3.75 20.6211 4.175 20.6211 4.8125C20.6211 5.45 20.2878 5.875 19.7878 5.875Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.9336 21.25C12.2961 21.25 11.8711 20.9 11.8711 20.375V4.625C11.8711 4.1 12.2961 3.75 12.9336 3.75C13.5711 3.75 13.9961 4.1 13.9961 4.625V20.375C13.9961 20.9 13.5711 21.25 12.9336 21.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.1211 21.25H8.12109C7.62109 21.25 7.28776 20.8864 7.28776 20.3409C7.28776 19.7955 7.62109 19.4318 8.12109 19.4318H18.1211C18.6211 19.4318 18.9544 19.7955 18.9544 20.3409C18.9544 20.8864 18.6211 21.25 18.1211 21.25ZM8.95443 13.0682H3.95443C3.45443 13.0682 3.12109 12.7046 3.12109 12.1591C3.12109 11.6137 3.45443 11.25 3.95443 11.25H8.95443C9.45443 11.25 9.78776 11.6137 9.78776 12.1591C9.78776 12.7046 9.45443 13.0682 8.95443 13.0682ZM22.2878 13.0682H17.2878C16.7878 13.0682 16.4544 12.7046 16.4544 12.1591C16.4544 11.6137 16.7878 11.25 17.2878 11.25H22.2878C22.7878 11.25 23.1211 11.6137 23.1211 12.1591C23.1211 12.7046 22.7878 13.0682 22.2878 13.0682Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div class="absolute inset-0 flex items-center justify-center ">
                <img
                  class="w-full h-[210px] object-contain "
                  src=${item?.image}
                  alt=${item?.name}
                />
              </div>
            </div>
            <div class="flex items-center gap-2 text-[13px] text-[#6B7280] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.09067 1.57886L8.21887 3.83274C8.32944 4.05401 8.54286 4.20744 8.79036 4.24294L11.3142 4.60623C11.9377 4.69626 12.1859 5.45199 11.7346 5.88502L9.90956 7.63867C9.7302 7.81112 9.64856 8.05902 9.69099 8.30247L10.1217 10.7783C10.2278 11.3907 9.57592 11.858 9.01857 11.5682L6.76281 10.3985C6.54167 10.2837 6.27682 10.2837 6.05504 10.3985L3.79928 11.5682C3.24193 11.858 2.59008 11.3907 2.69679 10.7783L3.12686 8.30247C3.16929 8.05902 3.08764 7.81112 2.90829 7.63867L1.08324 5.88502C0.63196 5.45199 0.8801 4.69626 1.50366 4.60623L4.02749 4.24294C4.27499 4.20744 4.48906 4.05401 4.59963 3.83274L5.72718 1.57886C6.00618 1.02157 6.81167 1.02157 7.09067 1.57886Z"
                  fill="red"
                  stroke="red"
                  stroke-width="1.3891"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="dark:text-white">0</span>
              <span
                class="w-1 h-1 rounded-full bg-[#E5E7EB] inline-block"
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3119 11.7734C9.42512 13.6604 6.63122 14.0681 4.34486 13.0107C4.00733 12.8748 3.73061 12.765 3.46754 12.765C2.73478 12.7693 1.82272 13.4798 1.34869 13.0064C0.87467 12.5323 1.58571 11.6195 1.58571 10.8823C1.58571 10.6192 1.48023 10.3474 1.34435 10.0093C0.286481 7.72326 0.694739 4.92843 2.58153 3.04205C4.99013 0.632571 8.90332 0.632571 11.3119 3.04143C13.7248 5.45463 13.7205 9.36453 11.3119 11.7734Z"
                  fill="#ea2427"
                  stroke="#ea2427"
                  stroke-width="1.3891"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.37818 7.66367H9.38373"
                  stroke="white"
                  stroke-width="1.85213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.90357 7.66367H6.90912"
                  stroke="white"
                  stroke-width="1.85213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4.42798 7.66367H4.43354"
                  stroke="white"
                  stroke-width="1.85213"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="dark:text-white">0 rəy</span>
            </div>
            <div class="text-[14px] leading-5 font-normal text-[#333333] dark:text-white duration-300 min-h-[50px]">
              ${item?.name}
            </div>
            <div class="grid grid-cols-12 items-center gap-0">
              <div class="col-span-5">
                <div
                  class="text-[14px] text-[#9CA3AF] font-bold leading-5 line-through"
                >
                  ${item?.price} ₼
                </div>
                <div class="text-[20px] font-bold text-[#333333] dark:text-white leading-8">
                  ${item?.discountPrice} ₼
                </div>
              </div>
<div class="w-[1px] h-full bg-gray-200 col-span-2"></div>
              <div class="col-span-5">
                <div class="text-[13px] text-[#9CA3AF] font-bold">6 ay</div>
                <div class="text-[20px] font-extrabold text-[#1A1A1A] dark:text-white">
                  48.33 ₼
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <button
         onclick='addToCart(${JSON.stringify(item)})'
                class="add-to-cart flex-1 h-[48px] rounded-[14px] bg-[#E1E1E1] dark:bg-[#3F3F3F] dark:text-white hover:bg-[#ea2427] duration-300 cursor-pointer hover:text-white transition grid place-items-center text-[15px] font-semibold text-[#111827]"
              >
                <span class="inline-flex items-center gap-2 text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m1.292 3.708 1.733.3.803 9.56a1.5 1.5 0 0 0 1.5 1.378h9.09a1.5 1.5 0 0 0 1.488-1.288l.79-5.465a1.118 1.118 0 0 0-.945-1.266c-.053-.007-12.448-.011-12.448-.011M9.46 4.333V1M8.166 3.033l1.294 1.3 1.294-1.3"
                    ></path>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4.962 17.835a.453.453 0 1 1 0 .906.453.453 0 0 1 0-.906ZM14.362 17.835a.454.454 0 1 1 0 .908.454.454 0 0 1 0-.908Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Səbətə əlavə et
                </span>
              </button>
              <button
                class="wishList cursor-pointer w-[48px] h-[48px] rounded-[14px] bg-[#E1E1E1] dark:bg-[#3F3F3F] dark:text-white hover:bg-[#ea2427] hover:text-white grid place-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.8942 12.0816C2.77649 8.59201 4.08274 4.60347 7.74628 3.42326C9.67336 2.80138 11.8004 3.16805 13.4025 4.37326C14.9182 3.20138 17.1234 2.80555 19.0484 3.42326C22.7119 4.60347 24.0265 8.59201 22.9098 12.0816C21.1702 17.6128 13.4025 21.8733 13.4025 21.8733C13.4025 21.8733 5.69211 17.6774 3.8942 12.0816Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17.5688 6.97917C18.6834 7.33959 19.4709 8.33438 19.5657 9.50209"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>`
      )
      .join("");

    PRODUCT_CARDS_WRAPPER && (PRODUCT_CARDS_WRAPPER.innerHTML = renderProducts);
    BASKET_COUNTER && updateBasketCounter();
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.style.backgroundColor = "#EA2427";
        btn.style.color = "#fff";
        setTimeout(() => {
          btn.innerHTML = ` <a href="./basket.html">
  <span class="flex items-center  gap-3 text-[14px]">
<i class="ri-loader-4-line inline-block animate-spin"></i>
  Səbətə əlavə et
  </span>
</a> `;
          setTimeout(() => {
            btn.innerHTML = ` <a href="./basket.html" class="h-full w-full flex items-center justify-center">
  <span class="flex items-center  gap-3 text-[14px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m1.292 3.708 1.733.3.803 9.56a1.5 1.5 0 0 0 1.5 1.378h9.09a1.5 1.5 0 0 0 1.488-1.288l.79-5.465a1.118 1.118 0 0 0-.945-1.266c-.053-.007-12.448-.011-12.448-.011M9.46 4.333V1M8.166 3.033l1.294 1.3 1.294-1.3"
      ></path>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4.962 17.835a.453.453 0 1 1 0 .906.453.453 0 0 1 0-.906ZM14.362 17.835a.454.454 0 1 1 0 .908.454.454 0 0 1 0-.908Z"
        clip-rule="evenodd"
      ></path>
    </svg>
    Səbətə keç 
  </span>
</a> `;
          }, 1000);
        }, 0);
      });
    });
    document.querySelectorAll(".wishList").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.style.backgroundColor = "#EA2427";
        btn.style.color = "#fff";
      });
    });
  });
};

export default productCards;
