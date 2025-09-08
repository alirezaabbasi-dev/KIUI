import { fetchData } from "../fetchData.js";

class FooterType1 extends HTMLElement {
  async connectedCallback() {
    const data = await fetchData();
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
    const data = await fetchData();
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
            <a href="#" class="hover:text-blue-500">Telegram</a>
            <a href="#" class="hover:text-blue-400">Twitter</a>
            <a href="#" class="hover:text-pink-500">Instagram</a>
            <a href="#" class="hover:text-gray-400">Others</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

class FooterType3 extends HTMLElement {
  async connectedCallback() {
    const data = await fetchData();
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
