const NavbarData = () => {
  const navbar = [
    "Kampaniyalar",
    "Korporativ satışlar",
    "Mağazalar",
    "Aylıq ödəniş",
    "Aktiv müqavilələr",
    "Digər",
  ];

  const Header = document.querySelector("#Nav_bar");

  const navItems =
    navbar &&
    navbar
      .map((item) => {
        return `<li class="font-bold opacity-[.5] dark:opacity-100 hover:opacity-100  dark:hover:text-white duration-300 cursor-pointer">
        ${item}${
          item === "Digər" ? ' <i class="ri-arrow-down-s-line"></i>' : ""
        }
      </li>`;
      })
      .join("");

  Header &&
    (Header.innerHTML = `
   <div
          class="more flex items-center justify-between gap-[20px] bg-[#f5f5f5] dark:bg-[#2B2B2B] duration-300 rounded-[25px] py-2.5 px-6 w-full"
        >
          <ul
            class="flex items-center gap-[35px] text-[#333] dark:text-[#959595] text-[14px] leading-[19px]"
          >
            ${navItems}
          </ul>
          <div
            id="themeBtn"
            class="relative w-[54px] h-[30px] bg-[#333] dark:bg-black duration-300 rounded-full flex items-center justify-between px-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="none"
              viewBox="0 0 16 15"
              class="ThemeSwitcher_SunIcon__tva8T text-white w-[15px]"
            >
              <path
                fill="currentColor"
                d="M14.31 6.9h-.736c-.415 0-.75.268-.75.6 0 .33.335.6.75.6h.735c.414 0 .75-.268.75-.6 0-.33-.337-.6-.75-.6ZM7.56 3.374A4.112 4.112 0 0 0 3.433 7.5a4.112 4.112 0 0 0 4.125 4.125A4.113 4.113 0 0 0 11.684 7.5 4.113 4.113 0 0 0 7.56 3.375Zm0 7.125a3 3 0 1 1-.003-5.998A3 3 0 0 1 7.56 10.5Zm-5.25-3c0-.33-.338-.6-.75-.6H.81c-.416 0-.75.268-.75.6 0 .33.334.6.75.6h.75c.412 0 .75-.27.75-.6Zm5.25-5.25c.33 0 .598-.335.598-.75V.75C8.158.335 7.89 0 7.56 0c-.331 0-.6.335-.6.75v.75c0 .415.269.75.6.75Zm0 10.5c-.332 0-.602.335-.602.75v.75c0 .415.27.75.601.75.33 0 .6-.335.6-.75v-.75c0-.415-.27-.75-.6-.75Zm5.523-9.925c.293-.294.34-.721.106-.955-.234-.234-.662-.186-.954.107l-.525.524c-.293.294-.34.721-.106.955.234.234.662.186.955-.107l.524-.525ZM2.56 11.65l-.525.525c-.294.294-.34.72-.107.954.234.234.662.187.954-.106l.525-.524c.293-.293.34-.721.107-.956-.234-.234-.663-.185-.954.107Zm.323-9.674c-.293-.293-.72-.341-.955-.107-.234.234-.186.662.106.956l.525.524c.293.293.72.341.954.107.234-.234.187-.662-.106-.955l-.524-.525ZM11.71 12.5l.525.525c.293.293.72.34.954.107.234-.234.186-.662-.107-.955l-.524-.524c-.293-.293-.72-.341-.956-.107-.234.234-.186.661.108.954Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="none"
              viewBox="0 0 14 14"
              class="ThemeSwitcher_MoonIcon__Qhm6i text-white w-[15px]"
            >
              <path
                fill="currentColor"
                d="M7.14 13.79A6.904 6.904 0 0 1 .245 6.893 6.875 6.875 0 0 1 3.972.772a.55.55 0 0 1 .796.595c-.072.366-.109.739-.11 1.112a5.8 5.8 0 0 0 5.794 5.794c.933 0 1.828-.219 2.66-.652a.552.552 0 0 1 .796.596 6.905 6.905 0 0 1-6.767 5.573ZM3.557 2.346a5.765 5.765 0 0 0-2.208 4.547 5.8 5.8 0 0 0 5.793 5.793 5.803 5.803 0 0 0 5.371-3.626 6.904 6.904 0 0 1-8.956-6.714Z"
              ></path>
            </svg>
            <div
              class="circle absolute w-[22px] h-[22px] bg-white rounded-full left-[4px] duration-300 top-[50%] translate-y-[-50%] z-20"
            ></div>
          </div>
        </div>
    `);

  const DARK_MODE_BTN = document.querySelector("#themeBtn");
  const circle = DARK_MODE_BTN && DARK_MODE_BTN.querySelector(".circle");
  const savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    localStorage.setItem("theme", "light");
  }

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    circle.classList.add("translate-x-[24px]");
  } else {
    document.documentElement.classList.remove("dark");
    circle.classList.remove("translate-x-[24px]");
  }

  DARK_MODE_BTN &&
    DARK_MODE_BTN.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      circle.classList.toggle("translate-x-[24px]");

      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
};

export default NavbarData;
