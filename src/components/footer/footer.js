export default function initFooter(footerData) {
  class FooterType1 extends HTMLElement {
    async connectedCallback() {
      const data = await footerData;
      if (!data) return;
      this.render(data.footer);
    }

    render(footer) {
      this.innerHTML = `
    <div class="footer bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top  -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-300 dark:border-gray-700">
        <!-- Logo + Description  -->
        <div>
          <h2 class="footer-title text-2xl font-bold text-gray-800 dark:text-white">${
            footer.title
          }</h2>
          <p class="footer-description mt-4 text-sm text-gray-600 dark:text-gray-400">${
            footer.description
          }</p>
        </div>

        <!-- Links  -->
        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${
            footer.footerItems.item1.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item1.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item1.links[index]}" class="footer-item hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${
            footer.footerItems.item2.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item2.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item2.links[index]}" class="footer-item hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 footer-item-title">${
            footer.footerItems.item3.title
          }</h3>
          <ul class="space-y-2 text-sm">
          ${footer.footerItems.item3.items
            .map(
              (item, index) =>
                `<li><a href="${footer.footerItems.item3.links[index]}" class="footer-item hover:underline">${item}</a></li>`
            )
            .join("")}
          </ul>
        </div>
      </div>

      <!-- Bottom  -->
      <div class="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <p class="text-sm copyright">&copy; ${new Date().getFullYear()} ${
        footer.title
      }. All rights reserved.</p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-500">
            Telegram
          </a>
          <a href="#" class="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" class="hover:text-pink-500">
            Instagram
          </a>
          <a href="#" class="hover:text-gray-500">
            others
          </a>
        </div>
      </div>
    </div>
</div>
    `;
    }
  }

  class FooterType2 extends HTMLElement {
    async connectedCallback() {
      const data = await footerData;
      if (!data) return;

      this.render(data.footer);
    }

    render(footer) {
      this.innerHTML = `
    <div class="footer bg-gray-900 text-gray-200 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="footer-title text-3xl font-extrabold text-white">${
            footer.title
          }</h2>
          <p class="footer-description mt-2 text-sm text-gray-400">${
            footer.description
          }</p>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="email"
            placeholder="Enter your email"
            class="input-email w-full sm:w-80 px-4 py-2 rounded-md text-slate-300 outline-1 focus:outline-blue-600"
          />
          <button
            class="footer-btn-subscribe bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
          >
            Subscribe
          </button>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-t border-gray-700 pt-10">
          ${Object.values(footer.footerItems)
            .map(
              (col) => `
            <div>
              <h3 class="text-lg font-semibold mb-4 footer-item-title">${
                col.title
              }</h3>
              <ul class="space-y-2 text-sm">
                ${col.items
                  .map(
                    (item, i) =>
                      `<li class="footer-item"><a href="${col.links[i]}" class="hover:underline">${item}</a></li>`
                  )
                  .join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- Bottom Social -->
        <div class="footer-bottom-social mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-700 pt-6 gap-4">
          <p class="copyright">&copy; ${new Date().getFullYear()} ${
        footer.title
      }. All rights reserved.</p>
          <div class="flex gap-4">
          // TODO
          ${
            footer.socials.socials_names
              ? console.log(footer.socials.socials_names)
              : ""
          }
            <a href="${footer.socials.socials_links[0]}">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
               <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            <a href="#">
             <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="footer-icon" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
    }
  }

  class FooterType3 extends HTMLElement {
    async connectedCallback() {
      const data = await footerData;
      if (!data) return;

      this.render(data.footer);
    }

    render({ title, description, footerItems }) {
      const { item1, item2, item3 } = footerItems;

      this.innerHTML = `
    <footer class="footer bg-[#0b1d26] text-white py-16 text-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between lg:flex-row flex-col space-y-4 lg:space-y-0">

        <div class="flex-2/4 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl footer-title">${title}</h2>
            <p class="w-full md:w-1/2 footer-description">${description}</p>
          </div>

          <p class="text-gray-400 copyright">Copyright ${new Date().getFullYear()} ${title}, Inc. Terms & Privacy</p>

        </div>

        <div class="flex-1/4 flex justify-between flex-col sm:flex-row gap-4">
          <div>
            <h3 class="footer-item-title text-lg footer-title text-amber-200 font-bold">More on The ${
              item1.title
            }</h3>
            <ul class="space-y-3 mt-4">
              ${item1.items
                .map(
                  (item, i) =>
                    `<li class="footer-item hover:underline"><a href=${item1.links[i]}>${item}</a></li>`
                )
                .join("")}
            </ul>
          </div>

          <div>
            <h3 class="footer-item-title text-lg footer-title text-amber-200 font-bold">More on The ${
              item2.title
            }</h3>
            <ul class="space-y-3 mt-4">
              ${item2.items
                .map(
                  (item, i) =>
                    `<li class="footer-item hover:underline"><a href=${item2.links[i]}>${item}</a></li>`
                )
                .join("")}
            </ul>
          </div>
          <div>
            <h3 class="footer-item-title text-lg footer-title text-amber-200 font-bold">More on The ${
              item3.title
            }</h3>
            <ul class="space-y-3 mt-4">
              ${item3.items
                .map(
                  (item, i) =>
                    `<li class="footer-item hover:underline"><a href=${item3.links[i]}>${item}</a></li>`
                )
                .join("")}
            </ul>
          </div>

        </div>
      </div>
    </footer>
    `;
    }
  }

  customElements.define("footer-type-1", FooterType1);
  customElements.define("footer-type-2", FooterType2);
  customElements.define("footer-type-3", FooterType3);
}
