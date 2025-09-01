import bannerFactory from "./components/banner";
import swiperVariants from "./common/swiper";
import NavbarData from "./layout/header";
import postUserData from "./Auth/login";

document.addEventListener("DOMContentLoaded", () => {
  postUserData();
  bannerFactory();
  NavbarData();
  swiperVariants("mySwiper", 1, 0, 3000);
});
