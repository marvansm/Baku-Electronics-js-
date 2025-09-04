import HttpService from "../Api/api";

const ADMIN_FORM = document.querySelector("#product-form");
const PRODUCT_NAME_INPUT =
  ADMIN_FORM && ADMIN_FORM.querySelector("#product-name");
const PRODUCT_PRICE_INPUT =
  ADMIN_FORM && ADMIN_FORM.querySelector("#product-price");
const PRODUCT_DISCOUNT_PRICE =
  ADMIN_FORM && ADMIN_FORM.querySelector("#discount-price");
const PRODUCT_CATEGORY_INPUT =
  ADMIN_FORM && ADMIN_FORM.querySelector("#product-category");
const PRODUCT_IMAGE_INPUT =
  ADMIN_FORM && ADMIN_FORM.querySelector("#product-image");
const PRODUCT_LIST_BODY = document.querySelector("#products-table-body");
const api = new HttpService("http://localhost:3000/");
const adminProductsPage = () => {
  ADMIN_FORM &&
    ADMIN_FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        id: crypto.randomUUID(),
        name: PRODUCT_NAME_INPUT.value,
        price: PRODUCT_PRICE_INPUT.value,
        discountPrice: PRODUCT_DISCOUNT_PRICE.value,
        category: PRODUCT_CATEGORY_INPUT.value,
        image: PRODUCT_IMAGE_INPUT.value,
      };
      console.log(payload);
      api.PostNewData("products", payload);
      window.location.reload();
    });
  api.GetApiData("products").then((data) => {
    let renderAdminList =
      data &&
      data
        .map(
          (item) => `<tr class="fade-in hover:bg-gray-50">
                    <td class="px-4 py-3 text-sm text-gray-900 font-medium">${item?.name}</td>
                    <td class="px-4 py-3 text-sm text-gray-900">${item?.price} ₼</td>
                    <td class="px-4 py-3 text-sm text-gray-900">${item?.discountPrice} ₼</td>
                    <td class="px-4 py-3 text-sm text-gray-900">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                            ${item?.category}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-900 max-w-xs truncate"><img src=${item?.image} alt=${item?.name} class="w-[70px] h-[70px] object-contain"/></td>
                    <td class="px-4 py-3 text-sm">
                        <button  class="text-indigo-600 hover:text-indigo-900 mr-3 transition-colors duration-200">
                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            Redaktə
                        </button>
                        <button  class="text-red-600 hover:text-red-900 transition-colors duration-200">
                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            Sil
                        </button>
                    </td>
                </tr>`
        )
        .join("");
    PRODUCT_LIST_BODY && (PRODUCT_LIST_BODY.innerHTML = renderAdminList);
  });
};

export default adminProductsPage;
