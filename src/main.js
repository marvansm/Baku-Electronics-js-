import bannerFactory from "./Components/banner";
import swiperVariants from "./common/swiper";
import NavbarData from "./Layout/header";
import postUserData from "./Auth/login";
import loading from "./Common/loader";
import adminProductsPage from "./Admin/createProduct";
import productCards from "./Components/productCards";
import scrollToTop from "./Common/toTOP";
import basketList from "./Components/basketList";
import totalSummary from "./Components/totalSummary";
import protectRouter from "./Routes/protectRoutes";
import checkoutPage from "./Components/checkout";
import ordersList from "./Admin/createOrders";
import register from "./Auth/register";

const USER = document.querySelector("#user");
const userEmail = localStorage.getItem("userEmail");

document.addEventListener("DOMContentLoaded", () => {
  postUserData();
  register();
  bannerFactory();
  NavbarData();
  loading();
  adminProductsPage();
  productCards();
  scrollToTop();
  basketList();
  totalSummary();
  protectRouter();
  checkoutPage();
  ordersList();
  if (userEmail) {
    USER && (USER.textContent = userEmail.charAt(0).toUpperCase());
  }
  USER &&
    USER.addEventListener("click", () => {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("token");
      location.reload();
    });

  swiperVariants("mySwiper", 1.2, 30, 3000);
});
