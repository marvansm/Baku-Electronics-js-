import HttpService from "../Api/api";
const postUserData = () => {
  const api = new HttpService("https://dummyjson.com/auth");
  const LOGIN_FORM = document.querySelector("#login-form");
  const USERNAME_INPUT = document.querySelector("#username");
  const PASSWORD_INPUT = document.querySelector("#password");

  LOGIN_FORM &&
    LOGIN_FORM.addEventListener("submit", (e) => {
      e.preventDefault();

      const loginPayload = {
        username: USERNAME_INPUT.value,
        password: PASSWORD_INPUT.value,
      };
      api.PostNewData("/login", loginPayload).then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            title: "Done!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            title: "Ooops!",
            icon: "error",
            draggable: true,
          });
        }

        localStorage.setItem("token", data.accessToken);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      });
      console.log(loginPayload);
    });
};

export default postUserData;
