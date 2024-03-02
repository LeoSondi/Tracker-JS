"use strict";

const changeClick = () => {
  const input = document.querySelector(".first__input");
  if (!input) {
    return;
  }
  document.querySelector(".first__panel").innerText = input.value;
  input.value = "";
};
