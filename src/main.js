import bannerFactory from "./Components/banner";
import swiperVariants from "./common/swiper";
import NavbarData from "./Layout/header";
import postUserData from "./Auth/login";
import loading from "./Common/loader";
import adminProductsPage from "./Admin/createProduct";
import productCards from "./Components/productCards";

document.addEventListener("DOMContentLoaded", () => {
  postUserData();
  bannerFactory();
  NavbarData();
  loading();
  adminProductsPage();
  productCards();

  swiperVariants("mySwiper", 1.2, 30, 3000);
});
