import Swal from "sweetalert2";
import HttpService from "../Api/api";

const checkoutPage = () => {
  const CHECKOUT_FORM = document.querySelector("#checkout-form");
  const NAME_INPUT = document.querySelector("#first-name");
  const SURNAME_INPUT = document.querySelector("#last-name");
  const EMAIL_INPUT = document.querySelector("#email");
  const PHONE_INPUT = document.querySelector("#phone");
  const api = new HttpService("http://localhost:3000/");
  CHECKOUT_FORM &&
    CHECKOUT_FORM.addEventListener("submit", (e) => {
      e.preventDefault();

      const cartItem = JSON.parse(localStorage.getItem("cart")) || [];

      const checkoutPayload = {
        name: NAME_INPUT.value,
        surname: SURNAME_INPUT.value,
        email: EMAIL_INPUT.value,
        phone: PHONE_INPUT.value,
        orderStatus: "Gözləmədə",
        totalPrice: cartItem
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2),
        orderItem: cartItem,
        date: new Date().toLocaleDateString("az-AZ"),
      };
      console.log(checkoutPayload);
      api.PostNewData("orders", checkoutPayload).then((data) => {
        if (data) {
          Swal.fire({
            title: "Done!",
            icon: "success",
            draggable: true,
          });
          localStorage.removeItem("cart");
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          Swal.fire({
            title: "Ooops!",
            icon: "error",
            draggable: true,
          });
        }
      });
    });
};

export default checkoutPage;
