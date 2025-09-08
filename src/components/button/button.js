// Button effect
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ripple").forEach((button) => {
    button.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${
        e.clientX - this.getBoundingClientRect().left - radius
      }px`;
      circle.style.top = `${
        e.clientY - this.getBoundingClientRect().top - radius
      }px`;
      circle.classList.add("ripple-effect");

      const ripple = this.querySelector(".ripple-effect");
      if (ripple) {
        ripple.remove();
      }

      this.appendChild(circle);
    });
  });
});

/**
 * Renders the button's HTML structure and applies styling.
 * It reads configuration from the element's dataset properties:
 *
 * @param {string} dataset.bg - The background color for the button.
 * @param {string} dataset.color - The text color for the button.
 * @param {string} [dataset.content] - The text content to display on the button. Defaults to "Click" if not provided.
 */
class ButtonPrimary extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  render() {
    const { content, bg, color } = this.dataset;

    this.innerHTML = `
    <button class="cursor-pointer m-1 relative overflow-hidden px-4 py-2 rounded-md ripple bg-slate-900 text-white" style="background-color: ${bg} !important; color: ${color} !important;">
    ${content || "Click"}
    </button>`;
  }
}

customElements.define("button-primary", ButtonPrimary);
