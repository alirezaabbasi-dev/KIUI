// ? show More Component
const showMoreComponent = document.querySelector("#show-more");
const showMoreBtn = document.querySelector("#show-more__button");

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.textContent =
    showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";

  showMoreComponent.classList.toggle("active");
});
