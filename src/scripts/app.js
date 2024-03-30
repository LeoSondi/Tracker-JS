"use strict";

let habbits = [];
const HABBIT_KEY = "HABBIT_KEY";
let ACTIVE_HABBIT_ID;

/* page */

const page = {
  menu: document.querySelector(".navigation"),
  header: {
    h1: document.querySelector(".main__title"),
    h2: document.querySelector(".main__subtitle"),
    progressPercent: document.querySelector(".progress__percent"),
    progressBar: document.querySelector(".progress__cover-bar"),
  },
  content: {
    days: document.querySelector(".habbits"),
    nextDay: document.querySelector(".habbit__day"),
  },
};

/* utils */

const loadData = () => {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
};

const saveData = () => {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
};

/* render */

const rerenderMenu = (activeHabbit) => {
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
    if (!existed) {
      // Создаю новую привычку, если такой ещё нет
      const element = document.createElement("button");
      element.setAttribute("menu-habbit-id", habbit.id);
      element.classList.add("navigation__link");
      element.addEventListener("click", () => rerender(habbit.id));
      element.innerHTML = `<img src="/src/assets/${habbit.icon}.svg" alt="${habbit.name}" class="btn-icon"/>`;
      // Сразу делаю активной
      if (activeHabbit.id === habbit.id) {
        element.classList.add("navigation__link_active");
      }
      page.menu.appendChild(element);
      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add("navigation__link_active");
    } else {
      existed.classList.remove("navigation__link_active");
    }
  }
};

const rerenderHead = (activeHabbit) => {
  page.header.h1.innerText = activeHabbit.name;
  page.header.h2.innerHTML = `<img src="src/assets/bullseye-arrow.svg" alt="Goal Icon" /> Цель — ${activeHabbit.target} дней`;
  let progress =
    activeHabbit.days.length / activeHabbit.target > 1
      ? 100
      : Math.round((activeHabbit.days.length / activeHabbit.target) * 100);
  page.header.progressBar.setAttribute("style", `width: ${progress}%`);
  page.header.progressPercent.innerText = `${progress}%`;
};

const rerenderContent = (activeHabbit) => {
  page.content.days.innerHTML = "";
  for (const index in activeHabbit.days) {
    const element = document.createElement("div");
    element.classList.add("habbit");
    element.innerHTML = `
      <div class="habbit__day">День ${index * 1 + 1}</div>
      <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
      <button class="habbit__delete">
        <img src="src/assets/trash.svg" alt="Delete Icon" />
      </button>`;
    page.content.days.appendChild(element);
  }
  page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
};

const rerender = (activeHabbitId) => {
  ACTIVE_HABBIT_ID = activeHabbitId;
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  if (!activeHabbit) {
    return;
  }
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
};

/* add days function */

const addDays = (event) => {
  const form = event.target;
  event.preventDefault();
  const data = new FormData(form);
  const comment = data.get("comment");

  if (!comment) {
    form["comment"].classList.add("error");
  } else {
    form["comment"].classList.remove("error");
  }
  habbits = habbits.map((habbit) => {
    if (habbit.id === ACTIVE_HABBIT_ID) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment }]),
      };
    }
    return habbit;
  });
  form["comment"].value = "";
  rerender(ACTIVE_HABBIT_ID);
  saveData();
};

/* init */

loadData();
rerender(habbits[0].id);
