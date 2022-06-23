const containerEl = document.querySelector(".container");

const btnRendang = document.querySelector("#makanan1");

const popupContainerEl = document.querySelector(".popup-container");

const btnClose = document.querySelector(".close-icon");

btnRendang.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

btnClose.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
