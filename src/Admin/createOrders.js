import HttpService from "../Api/api";

const ordersList = () => {
  const ORDER_LIST_WRAPPER = document.querySelector("#orders-table-body");
  const api = new HttpService("http://localhost:3000/");

  api.GetApiData("orders").then((data) => {
    console.log(data);

    let orderHTML = data
      ?.map((item) => {
        const itemsHTML = item.orderItem
          ?.map(
            (product) =>
              `<div class="text-sm text-gray-700">${product.name}</div>`
          )
          .join("");

        return ` <tr>
                    <td class="px-4 py-3 text-sm text-gray-900">#${
                      item?.id
                    }</td>
                    <td class="px-4 py-3 text-sm text-gray-900">
                      ${item?.name} ${item?.surname}
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-900">${itemsHTML}</td>
                    <td class="px-4 py-3 text-sm text-gray-900">${
                      item?.totalPrice
                    } ₼</td>
                    <td class="px-4 py-3">
                      <span
                        class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800"
                      >
                        ${item?.orderStatus}
                      </span>
                    </td>
                    <td class="px-4 py-3 text-sm text-gray-900">${
                      item?.date.split("T")[0]
                    }</td>
                  </tr>`;
      })
      .join("");

    ORDER_LIST_WRAPPER.innerHTML = orderHTML;
  });
};

export default ordersList;
