import bannerFactory from "./components/banner";
import swiperVariants from "./common/swiper";
import Header from "./layout/header";

bannerFactory();
Header();
swiperVariants("mySwiper", 1, 0, 3000);
