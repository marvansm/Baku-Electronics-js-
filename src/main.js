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
const USER = document.querySelector("#user");
const userName = localStorage.getItem("username");

document.addEventListener("DOMContentLoaded", () => {
  postUserData();
  bannerFactory();
  NavbarData();
  loading();
  adminProductsPage();
  productCards();
  scrollToTop();
  basketList();
  totalSummary();
  protectRouter();
  if (userName) {
    USER && (USER.textContent = userName.charAt(0).toUpperCase());
  }

  swiperVariants("mySwiper", 1.2, 30, 3000);
});
