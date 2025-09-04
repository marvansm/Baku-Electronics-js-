const SCROLL_TO_TOP = document.querySelector("#toTopBtn");

const scrollToTop = () => {
  SCROLL_TO_TOP &&
    SCROLL_TO_TOP.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
};

export default scrollToTop;
