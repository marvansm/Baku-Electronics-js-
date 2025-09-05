import AOS from "aos";
import "aos/dist/aos.css";

const aosPlugin = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
};

export default aosPlugin;


