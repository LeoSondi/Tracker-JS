"use strict";

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

// Открытие и закрытие модалки
const openModal = () => {
  modalContainer.classList.add("active");
};

const closeModal = () => {
  modalContainer.classList.remove("active");
};

// Закрытие модалки по нажатию эскейпа
const closeKeydownModal = (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
};
