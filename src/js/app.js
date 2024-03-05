"use strict";

const input = document.querySelector(".first__input");
const panel = document.querySelector(".first__panel");
const notification = document.querySelector(".notification");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

const changePush = () => {
  if (!input) {
    return;
  }
  if (input.value != "") {
    panel.innerText = input.value;
  }
  input.value = "";
  // notification.classList.add("active");
};

const inputKeydownPush = (e) => {
  if (e.code == "Enter") {
    changePush();
  }
};

// практикую добавление html на лету
// добавляю контент в модалку
const modalImage = document.createElement("img");
const modalCloseBtn = document.createElement("button");

modalImage.classList.add("modal__img");
modalCloseBtn.classList.add("close-button");

modalImage.setAttribute("src", "src/assets/arrogant.png");
modalCloseBtn.innerHTML = `<img src="src/assets/close.svg" width="24px" height="24px"/>`;
modalCloseBtn.setAttribute("onclick", "closeModal()");

modal.appendChild(modalImage);
modal.appendChild(modalCloseBtn);

const openModal = () => {
  modalContainer.classList.add("active");
};

const closeModal = () => {
  modalContainer.classList.remove("active");
};

const closeKeydownModal = (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
};
