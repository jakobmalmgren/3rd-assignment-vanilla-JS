document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {
  document.getElementById("dropdown").classList.toggle("active");
}

let btn = document.querySelector(".btn");
let modalFormWrapper = document.querySelector(".modal-form-wrapper");
let modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", function () {
  modalFormWrapper.classList.remove("modal-form-wrapper-active");
});

btn.addEventListener("click", function () {
  modalFormWrapper.classList.add("modal-form-wrapper-active");
});
