const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const modalExit = document.querySelector("#modalExit");

function activateModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}