"use strict";

const input = document.querySelector(".first__input");
const panel = document.querySelector(".first__panel");
// const notification = document.querySelector(".notification");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

// практикую добавление html на лету
const modalImage = document.createElement("img");
modalImage.classList.add("modal__img");
modalImage.setAttribute("src", "src/assets/arrogant.png");
modal.appendChild(modalImage);

// изменения текста в панели и отображения уведомления
const changePush = () => {
  if (!input) {
    return;
  }
  if (input.value != "") {
    panel.innerText = input.value;
  }
  // сохраняю данные в local storage
  const data = {
    text: input.value,
  };
  localStorage.setItem("panelText", JSON.stringify(data));
  input.value = "";
  // **TO-DO** добавить автоматическое скрытие уведомления через 3 секунды
  // notification.classList.add("active");
};

// Изменение текста по нажатию энтера
const inputKeydownPush = (e) => {
  if (e.code == "Enter") {
    changePush();
  }
};

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
