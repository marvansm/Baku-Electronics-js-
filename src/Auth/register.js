import Swal from "sweetalert2";
import { auth } from "../lib/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const register = () => {
  const REGISTER_FORM = document.querySelector("#register-form");
  const REGISTER_EMAIL = document.querySelector("#register-email");
  const REGISTER_PASSWORD = document.querySelector("#register-password");

  REGISTER_FORM &&
    REGISTER_FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      const registerPayload = {
        email: REGISTER_EMAIL.value,
        password: REGISTER_PASSWORD.value,
      };
      createUserWithEmailAndPassword(
        auth,
        registerPayload.email,
        registerPayload.password
      ).then((res) => {
        console.log(res);
        if (res) {
          Swal.fire({
            title: "Registered!",
            icon: "success",
            draggable: true,
          });
        //   window.location.href = "/login.html";
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
export default register;
