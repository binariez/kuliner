const containerEl = document.querySelector(".container");

const btnRendang = document.querySelector("#makanan1");

const btnSate = document.querySelector("#makanan2");

const btnSoto = document.querySelector("#makanan3");

const a1 = document.querySelector("#artikel1");
const a2 = document.querySelector("#artikel2");
const a3 = document.querySelector("#artikel3");

const popupContainerEl = document.querySelector(".popup-container");

const btnClose = document.querySelector(".close-icon");

//Rendang
btnRendang.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
  a1.style.display = "block";
  a2.style.display = "none";
  a3.style.display = "none";
});

//Sate
btnSate.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
  a1.style.display = "none";
  a2.style.display = "block";
  a3.style.display = "none";
});

//Soto
btnSoto.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
  a1.style.display = "none";
  a2.style.display = "none";
  a3.style.display = "block";
});

btnClose.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
