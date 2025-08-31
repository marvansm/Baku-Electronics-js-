const swiperVariants = (name, perView, spaceBetween, autoplayDelay) => {
  var swiper = new Swiper(`.${name}`, {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: spaceBetween,
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false,
    },

    slidesPerView: perView,
  });
};

export default swiperVariants;
