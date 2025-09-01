const loader = () => {
  const LOADER = document.querySelector("#Loading");
  setTimeout(() => {
    LOADER.classList.add("hidden");
    LOADER.classList.remove("flex");
  }, 2000);
};

export default loader;
