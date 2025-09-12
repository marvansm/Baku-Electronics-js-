import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase.js";
import Swal from "sweetalert2";

const postUserData = () => {
  const LOGIN_FORM = document.querySelector("#login-form");
  const EMAIL_INPUT = document.querySelector("#email-input");
  const PASSWORD_INPUT = document.querySelector("#password");

  LOGIN_FORM &&
    LOGIN_FORM.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginPayload = {
        email: EMAIL_INPUT.value,
        password: PASSWORD_INPUT.value,
      };
      signInWithEmailAndPassword(
        auth,
        loginPayload.email,
        loginPayload.password
      ).then((res) => {
        console.log(res);
        localStorage.setItem("token", res?.user?.accessToken);
        localStorage.setItem("userEmail", res?.user?.email);

        if (res) {
          Swal.fire({
            title: "Logged in!",
            icon: "success",
            draggable: true,
          });
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

export default postUserData;
