import bannerFactory from "./Components/banner";
import swiperVariants from "./common/swiper";
import NavbarData from "./Layout/header";
import postUserData from "./Auth/login";
import loader from "./Common/loader";
document.addEventListener("DOMContentLoaded", () => {
  postUserData();
  bannerFactory();
  NavbarData();
  loader();

  swiperVariants("mySwiper", 1, 0, 3000);
});
