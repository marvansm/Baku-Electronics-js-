const Header = () => {
  const navbar = [
    "Kampaniyalar",
    "Korporativ satışlar",
    "Mağazalar",
    "Aylıq ödəniş",
    "Aktiv müqavilələr",
    "Digər",
  ];

  const Header = document.querySelector("#Nav_bar");

  const navItems = navbar
    .map((item) => {
      return `<li class="font-bold opacity-[.5] hover:opacity-100 duration-300 cursor-pointer">
        ${item}${
        item === "Digər" ? ' <i class="ri-arrow-down-s-line"></i>' : ""
      }
      </li>`;
    })
    .join("");

  Header.innerHTML = `
      <div class="flex flex-col gap-[20px] w-full h-full ">
        <div class="more flex items-center justify-between gap-[20px] bg-[#f5f5f5] rounded-[25px] py-2.5 px-6 w-full">
          <ul class="flex items-center gap-[35px] text-[#333] text-[14px] leading-[19px]">
            ${navItems}
          </ul>
          <div id="themeBtn" class="relative w-[54px] h-[30px] bg-[#333] rounded-full flex items-center justify-between px-2 cursor-pointer">
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
            <div class="circle absolute w-[22px] h-[22px] bg-white rounded-full left-[4px] top-[50%] translate-y-[-50%] z-20"></div>
          </div>
        </div>

        <nav class="grid grid-cols-12 w-full items-center gap-[15px]">
          <div class="col-span-10 flex items-center gap-[15px]">
            <div class="logo w-[50px] h-[50px]">
              <img src="https://img.b-e.az/media/logo/baku-electronics-logo_QJeQcxF.svg" alt="Logo" class="rounded-full object-cover w-full h-full"/>
            </div>
               <div class="category">
              <button
                class="flex items-center justify-center gap-1.5 py-[14px] px-[21px] bg-[#333] text-white rounded-[36px] text-[16px] font-bold"
              >
                <svg
                  class="header_catalogBtn__open__Zs1Yd"
                  style="display: flex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 5.41667C2.5 3.22899 2.52342 2.5 5.41667 2.5C8.30991 2.5 8.33333 3.22899 8.33333 5.41667C8.33333 7.60434 8.34256 8.33333 5.41667 8.33333C2.49077 8.33333 2.5 7.60434 2.5 5.41667Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.667 5.41667C11.667 3.22899 11.6904 2.5 14.5837 2.5C17.4769 2.5 17.5003 3.22899 17.5003 5.41667C17.5003 7.60434 17.5096 8.33333 14.5837 8.33333C11.6578 8.33333 11.667 7.60434 11.667 5.41667Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 14.5833C2.5 12.3957 2.52342 11.6667 5.41667 11.6667C8.30991 11.6667 8.33333 12.3957 8.33333 14.5833C8.33333 16.771 8.34256 17.5 5.41667 17.5C2.49077 17.5 2.5 16.771 2.5 14.5833Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.667 14.5833C11.667 12.3957 11.6904 11.6667 14.5837 11.6667C17.4769 11.6667 17.5003 12.3957 17.5003 14.5833C17.5003 16.771 17.5096 17.5 14.5837 17.5C11.6578 17.5 11.667 16.771 11.667 14.5833Z"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Kataloq
              </button>
            </div>
            <div class="search flex items-center bg-[#f5f5f5] rounded-[12px] h-[50px] w-[80%] pr-[22px]">
              <input type="text" placeholder="Məhsul axtar..." class="text-[#333] w-full pl-[22px] text-[14px] outline-none border-none"/>
              <i class="ri-search-line"></i>
            </div>
          </div>
          <div class="col-span-2">
         <ul class="flex items-center justify-between gap-[8px]">
              <li
                class="w-[50px] h-[50px] bg-[#f5f5f5] text-[#333] leading-[50px] rounded-[12px] duration-200 cursor-pointer hover:bg-[#dadada] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M6.45443 16.25C4.62109 16.25 3.12109 14.6429 3.12109 12.6786C3.12109 11.0714 5.28776 5.44643 5.70443 4.28571C5.78776 3.92857 6.12109 3.75 6.45443 3.75C6.78776 3.75 7.12109 3.92857 7.20443 4.28571C7.62109 5.44643 9.78776 11.0714 9.78776 12.6786C9.78776 14.6429 8.28776 16.25 6.45443 16.25ZM6.45443 7.05357C5.62109 9.46429 4.78776 11.9643 4.78776 12.6786C4.78776 13.6607 5.53776 14.4643 6.45443 14.4643C7.37109 14.4643 8.12109 13.6607 8.12109 12.6786C8.12109 11.9643 7.28776 9.46429 6.45443 7.05357ZM19.7878 16.25C17.9544 16.25 16.4544 14.6429 16.4544 12.6786C16.4544 11.0714 18.6211 5.44643 19.0378 4.28571C19.1211 3.92857 19.4544 3.75 19.7878 3.75C20.1211 3.75 20.4544 3.92857 20.5378 4.28571C20.9544 5.44643 23.1211 11.0714 23.1211 12.6786C23.1211 14.6429 21.6211 16.25 19.7878 16.25ZM19.7878 7.05357C18.9544 9.375 18.1211 11.9643 18.1211 12.6786C18.1211 13.6607 18.8711 14.4643 19.7878 14.4643C20.7044 14.4643 21.4544 13.6607 21.4544 12.6786C21.4544 11.9643 20.6211 9.46429 19.7878 7.05357Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.7878 5.875H6.45443C5.95443 5.875 5.62109 5.45 5.62109 4.8125C5.62109 4.175 5.95443 3.75 6.45443 3.75H19.7878C20.2878 3.75 20.6211 4.175 20.6211 4.8125C20.6211 5.45 20.2878 5.875 19.7878 5.875Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.9336 21.25C12.2961 21.25 11.8711 20.9 11.8711 20.375V4.625C11.8711 4.1 12.2961 3.75 12.9336 3.75C13.5711 3.75 13.9961 4.1 13.9961 4.625V20.375C13.9961 20.9 13.5711 21.25 12.9336 21.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.1211 21.25H8.12109C7.62109 21.25 7.28776 20.8864 7.28776 20.3409C7.28776 19.7955 7.62109 19.4318 8.12109 19.4318H18.1211C18.6211 19.4318 18.9544 19.7955 18.9544 20.3409C18.9544 20.8864 18.6211 21.25 18.1211 21.25ZM8.95443 13.0682H3.95443C3.45443 13.0682 3.12109 12.7046 3.12109 12.1591C3.12109 11.6137 3.45443 11.25 3.95443 11.25H8.95443C9.45443 11.25 9.78776 11.6137 9.78776 12.1591C9.78776 12.7046 9.45443 13.0682 8.95443 13.0682ZM22.2878 13.0682H17.2878C16.7878 13.0682 16.4544 12.7046 16.4544 12.1591C16.4544 11.6137 16.7878 11.25 17.2878 11.25H22.2878C22.7878 11.25 23.1211 11.6137 23.1211 12.1591C23.1211 12.7046 22.7878 13.0682 22.2878 13.0682Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </li>
              <li
                class="w-[50px] h-[50px] bg-[#f5f5f5] text-[#333] leading-[50px] rounded-[12px] duration-200 cursor-pointer hover:bg-[#dadada] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M3.62061 3.38533L5.78727 3.76033L6.7904 15.7114C6.87061 16.6874 7.68623 17.4364 8.6654 17.4332H20.0289C20.9633 17.4353 21.756 16.7478 21.8883 15.8228L22.8769 8.99158C22.9873 8.22804 22.4571 7.51971 21.6946 7.40929C21.6279 7.39991 6.13519 7.39471 6.13519 7.39471"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15.4702 11.2446H18.3588"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.20924 21.0443C8.52279 21.0443 8.77591 21.2984 8.77591 21.6109C8.77591 21.9245 8.52279 22.1786 8.20924 22.1786C7.8957 22.1786 7.64258 21.9245 7.64258 21.6109C7.64258 21.2984 7.8957 21.0443 8.20924 21.0443Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.9602 21.0443C20.2738 21.0443 20.5279 21.2984 20.5279 21.6109C20.5279 21.9245 20.2738 22.1786 19.9602 22.1786C19.6467 22.1786 19.3936 21.9245 19.3936 21.6109C19.3936 21.2984 19.6467 21.0443 19.9602 21.0443Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li
                class="w-[50px] h-[50px] bg-[#f5f5f5] text-[#333] leading-[50px] rounded-[12px] duration-200 cursor-pointer hover:bg-[#dadada] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.8942 12.0816C2.77649 8.59201 4.08274 4.60347 7.74628 3.42326C9.67336 2.80138 11.8004 3.16805 13.4025 4.37326C14.9182 3.20138 17.1234 2.80555 19.0484 3.42326C22.7119 4.60347 24.0265 8.59201 22.9098 12.0816C21.1702 17.6128 13.4025 21.8733 13.4025 21.8733C13.4025 21.8733 5.69211 17.6774 3.8942 12.0816Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17.5688 6.97917C18.6834 7.33959 19.4709 8.33438 19.5657 9.50209"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li
                class="w-[50px] h-[50px] bg-[#f5f5f5] text-[#333] leading-[50px] rounded-[12px] duration-200 cursor-pointer hover:bg-[#dadada] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                >
                  <path
                    d="M1 16.9231C1 13.6519 3.65185 11 6.92308 11H8.07692C11.3481 11 14 13.6519 14 16.9231C14 18.0701 13.0701 19 11.9231 19H3.07692C1.92987 19 1 18.0701 1 16.9231Z"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                  <rect
                    x="4"
                    y="1"
                    width="7"
                    height="7"
                    rx="3.5"
                    stroke="currentColor"
                    stroke-width="2"
                  ></rect>
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    `;

  const DARK_MODE_BTN = document.querySelector("#themeBtn");
  const circle = DARK_MODE_BTN.querySelector(".circle");

  DARK_MODE_BTN.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    circle.classList.toggle("translate-x-[24px]");
  });
};

export default Header;
