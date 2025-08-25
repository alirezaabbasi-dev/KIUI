export default function initHeader(headerData) {
  const $ = document;

  /**
   * Toggles mobile menu and icon state with fade effect
   * @param {HTMLElement} menuElement
   * @param {HTMLElement} iconWrapper
   */
  function toggleMobileMenu(menuElement, iconWrapper) {
    const isOpen = menuElement.classList.contains("open");

    // Toggle menu visibility
    if (menuElement.classList.contains("translate-x-full")) {
      menuElement.classList.toggle("translate-x-0");
      menuElement.classList.toggle("translate-x-full");
    } else {
      menuElement.classList.toggle("hidden");
    }

    // Toggle icons (fade effect)
    const [hamburgerIcon, closeIcon] = iconWrapper.children;
    if (isOpen) {
      hamburgerIcon.classList.remove("opacity-0");
      hamburgerIcon.classList.add("opacity-100");
      closeIcon.classList.remove("opacity-100");
      closeIcon.classList.add("opacity-0");
      menuElement.classList.remove("open");
    } else {
      hamburgerIcon.classList.remove("opacity-100");
      hamburgerIcon.classList.add("opacity-0");
      closeIcon.classList.remove("opacity-0");
      closeIcon.classList.add("opacity-100");
      menuElement.classList.add("open");
    }
  }

  class HeaderType1 extends HTMLElement {
    async connectedCallback() {
      const data = await headerData;
      if (!data) return;
      const menuHTML = data.menu.items
        .map(
          (item) =>
            `<li class="menu-item"><a class="transition-colors">${item}</a></li>`
        )
        .join("");
      const menuMobileHTML = data.menu.items
        .map(
          (item) =>
            `<li class="menu-mobile-item"><a class="transition-colors">${item}</a></li>`
        )
        .join("");

      this.render(data.menu.title, menuHTML, menuMobileHTML);
      this.setDesktopLinks(data.menu.links);
      this.setMobileLinks(data.menu.links);
      this.setupMobileToggle();
    }

    render(title, menuHTML, menuMobileHTML) {
      this.innerHTML = `
      <nav class="menu-background bg-slate-100 dark:bg-slate-600 shadow-md fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          <!-- Logo -->
          <h1 class="menu-main-title text-xl font-bold text-black dark:text-slate-100 transition-colors">
            <a href="./index.html">${title}</a>
          </h1>

          <!-- Hamburger Button (Mobile) -->
          <div class="md:hidden">
            <button id="hamburger-btn" class="relative w-6 h-6">
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 hamburger-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 close-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <ul class="menuItemsWrapper hidden md:flex gap-6 text-slate-700 dark:text-slate-100  font-medium *:transition-all">
            ${menuHTML}
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden fixed top-16 right-0 w-2/3 h-full bg-white shadow-lg px-6 py-4 flex-col gap-4 m-auto text-center">
          <ul class="flex flex-col gap-4 text-gray-800 font-semibold">
            ${menuMobileHTML}
          </ul>
        </div>
      </nav>
    `;
    }

    setDesktopLinks(links) {
      const allLinks = this.querySelectorAll(".menu-item a");
      allLinks.forEach((a, index) => {
        a.setAttribute("href", links[index] || "#");
      });
    }
    setMobileLinks(links) {
      const allLinks = this.querySelectorAll(".menu-mobile-item a");
      allLinks.forEach((a, index) => {
        a.setAttribute("href", links[index] || "#");
      });
    }

    setupMobileToggle() {
      const hamburgerBtn = this.querySelector("#hamburger-btn");
      const mobileMenu = this.querySelector("#mobile-menu");
      const iconWrapper = hamburgerBtn;

      if (hamburgerBtn && mobileMenu && iconWrapper) {
        // Init state
        iconWrapper.children[0].classList.add("opacity-100");
        iconWrapper.children[1].classList.add("opacity-0");

        hamburgerBtn.addEventListener("click", () =>
          toggleMobileMenu(mobileMenu, iconWrapper)
        );
      }
    }
  }
  class HeaderType2 extends HTMLElement {
    async connectedCallback() {
      const data = await headerData;
      if (!data) return;
      const menuHTML = data.menu.items
        .map(
          (item) =>
            `<li class="menu-item"><a class="transition-colors">${item}</a></li>`
        )
        .join("");
      const menuMobileHTML = data.menu.items
        .map(
          (item) =>
            `<li class="menu-mobile-item"><a class="transition-colors">${item}</a></li>`
        )
        .join("");

      this.render(data.menu.title, menuHTML, menuMobileHTML);
      this.setLinks(data.menu.links);
      this.setMobileLinks(data.menu.links);
      this.setupMobileToggle();
    }
    render(title, menuHTML, menuMobileHTML) {
      this.innerHTML = `
      <nav class="menu-background bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100 fixed top-0 left-0 w-full z-50 shadow">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <!-- Left: Hamburger + Logo -->
          <div class="flex items-center gap-4">
            <button id="hamburger-btn" class="relative w-6 h-6 md:hidden">
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-100 hamburger-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="absolute inset-0 w-6 h-6 transition-opacity duration-300 opacity-0 close-icon" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <a href="./index.html" class="menu-main-title transition-colors text-xl font-bold">${title}</a>
          </div>

          <!-- Center Menu (Desktop) -->
          <ul class="menuItemsWrapper hidden md:flex gap-8 text-sm font-medium">
            ${menuHTML}
          </ul>

          <!-- Right Icons -->
          <div class="hidden md:flex items-center gap-4">
            <button title="Search">
              <svg class="w-5 h-5 text-white hover:text-indigo-400 transition" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Sidebar Menu (Mobile) -->
        <div id="mobile-menu" class="fixed top-0 right-0 w-64 h-full bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 shadow-lg px-6 py-8 transform translate-x-full transition-transform duration-300 ease-in md:hidden z-50">
          <ul class="flex flex-col gap-6 font-semibold text-base">
            ${menuMobileHTML}
          </ul>
        </div>
      </nav>
    `;
    }

    setLinks(links) {
      const allLinks = this.querySelectorAll(".menu-item a");
      allLinks.forEach((a, index) => {
        a.setAttribute("href", links[index] || "#");
      });
    }
    setMobileLinks(links) {
      const allLinks = this.querySelectorAll(".menu-mobile-item a");
      allLinks.forEach((a, index) => {
        a.setAttribute("href", links[index] || "#");
      });
    }

    setupMobileToggle() {
      const hamburgerBtn = this.querySelector("#hamburger-btn");
      const mobileMenu = this.querySelector("#mobile-menu");
      const iconWrapper = hamburgerBtn;

      if (hamburgerBtn && mobileMenu && iconWrapper) {
        iconWrapper.children[0].classList.add("opacity-100");
        iconWrapper.children[1].classList.add("opacity-0");

        hamburgerBtn.addEventListener("click", () =>
          toggleMobileMenu(mobileMenu, iconWrapper)
        );
      }
    }
  }
  customElements.define("header-type-1", HeaderType1);
  customElements.define("header-type-2", HeaderType2);
}
