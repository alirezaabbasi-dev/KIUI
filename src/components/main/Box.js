class BoxCard1 extends HTMLElement {
  async connectedCallback() {
    const { img, title, description, price, buttonTitle, buttonLink } =
      this.dataset;
    this.render(img, title, description, price, buttonTitle, buttonLink);
  }

  render(img, title, description, price, buttonTitle, buttonLink) {
    this.innerHTML = `
      <!-- Product Card -->
      <div class="card w-full bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img class="w-full h-60 object-cover" src="${
          img || "./kiui.png"
        }" alt="${title || "default alt"}" />

        <div class="h-42 p-5 flex flex-col justify-between space-y-3">
          ${
            title
              ? `<h2 class="card-title text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">${title}</h2>`
              : ""
          }
          ${
            description
              ? `<p class="card-description text-sm text-gray-600 dark:text-gray-400">${description}</p>`
              : ""
          }

          ${
            price || buttonLink
              ? `<div class="flex items-center justify-between mt-4">
                  ${
                    price
                      ? `<span class="card-price text-lg font-bold text-gray-600 dark:text-indigo-400">$${price}</span>`
                      : "<div></div>"
                  }
                  ${
                    buttonTitle
                      ? `<a href="${buttonLink}" target="_blank" rel="noopener noreferrer" class="card-btn px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 cursor-pointer transition">${buttonTitle}</a>`
                      : ""
                  }
                </div>`
              : ""
          }
        </div>
      </div>
      <!-- Product Card -->
    `;
  }
}

customElements.define("box-card-1", BoxCard1);
