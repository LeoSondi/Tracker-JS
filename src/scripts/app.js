"use strict";

let habits = [];
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
    days: document.querySelector(".habits"),
    nextDay: document.querySelector(".habbit__day"),
  },
  popup: {
    index: document.querySelector(".cover"),
    iconInput: document.querySelector(".popup__form input[name='icon']"),
  },
};

/* utils */

const loadData = () => {
  const habitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habitsString);

  if (Array.isArray(habbitArray)) {
    habits = habbitArray;
  }
};

const saveData = () => {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habits));
};

const validateForm = (form, fields) => {
  const formData = new FormData(form);
  const res = {};

  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove("error");
    if (!fieldValue) {
      form[field].classList.add("error");
    }
    res[field] = fieldValue;
  }

  let isValid = true;

  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
};

/* render */

const rerenderMenu = (activeHabbit) => {
  for (const habbit of habits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);

    if (!existed) {
      const element = document.createElement("button");
      element.setAttribute("menu-habbit-id", habbit.id);
      element.classList.add("navigation__link");
      element.addEventListener("click", () => rerender(habbit.id));
      element.innerHTML = `<img src="https://i.postimg.cc/${habbit.icon}.png" alt="${habbit.name}" class="btn-icon"/>`;

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
  page.header.h2.innerHTML = `<img src="https://i.postimg.cc/Y9CPFwNX/bullseye-arrow-1.png" width="28px" height="28px" alt="Goal Icon" /> Target — ${activeHabbit.target} days`;
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
      <div class="habbit__day">Day ${
        index * 1 + 1
      }<button class="habbit__delete habbit__delete-mobile" onclick="deleteDay(${index}, ${
      activeHabbit.id
    })">
          <img src="https://i.postimg.cc/CKmPSQyb/trash-1.png" alt="Delete Icon" />
        </button></div>
      <div class="habbit__comment input">${
        activeHabbit.days[index].comment
      }</div>
      <button class="habbit__delete habbit__delete-desktop" onclick="deleteDay(${index}, ${
      activeHabbit.id
    })">
        <img src="https://i.postimg.cc/CKmPSQyb/trash-1.png" alt="Delete Icon" />
      </button>`;
    page.content.days.appendChild(element);
  }
  page.content.nextDay.innerHTML = `Day ${activeHabbit.days.length + 1}`;
};

const rerender = (activeHabbitId) => {
  ACTIVE_HABBIT_ID = activeHabbitId;
  const activeHabbit = habits.find((habbit) => habbit.id === activeHabbitId);
  if (!activeHabbit) {
    return;
  }
  // сохранение хеша таба, чтобы при обновлении продолжить работу с приложением на том же табе
  document.location.replace(document.location.pathname + "#" + activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
};

/* days function */

const addDay = (event) => {
  event.preventDefault();
  const data = validateForm(event.target, ["comment"]);

  if (!data) return;

  habits = habits.map((habbit) => {
    if (habbit.id === ACTIVE_HABBIT_ID) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment: data.comment }]),
      };
    }
    return habbit;
  });
  event.target.reset();
  rerender(ACTIVE_HABBIT_ID);
  saveData();
};

const deleteDay = (currentDayId) => {
  habits = habits.map((habbit) => {
    if (habbit.id === ACTIVE_HABBIT_ID) {
      habbit.days.splice(currentDayId, 1);
      return {
        ...habbit,
        days: habbit.days,
      };
    }
    return habbit;
  });
  rerender(ACTIVE_HABBIT_ID);
  saveData();
};

/* popup, add habbit */

const openPopup = () => {
  page.popup.index.classList.remove("cover_hidden");
};

const closePopup = () => {
  page.popup.index.classList.add("cover_hidden");
};

function setIcon(context, icon) {
  page.popup.iconInput.value = icon;
  const activeIcon = document.querySelector(
    ".popup__icon-btn.popup__icon-btn_active"
  );
  activeIcon.classList.remove("popup__icon-btn_active");
  context.classList.add("popup__icon-btn_active");
}

const addHabbit = (event) => {
  event.preventDefault();

  const data = validateForm(event.target, ["icon", "name", "target"]);
  if (!data) return;
  habits.push({
    id: habits.length,
    icon: data.icon,
    name: data.name,
    target: data.target,
    days: [],
  });
  event.target.reset();
  closePopup();
  saveData();
  if (!ACTIVE_HABBIT_ID) {
    rerender(habits[0].id);
  } else {
    rerender(ACTIVE_HABBIT_ID);
  }
};

const deleteHabbit = () => {
  page.menu.innerHTML = "";
  habits.splice(ACTIVE_HABBIT_ID, 1);
  habits.forEach((habbit, index) => {
    habbit.id = index;
  });
  rerender(0);
  saveData();
};

/* init */

loadData();
const hashId = Number(document.location.hash.replace("#", ""));
const urlHabbit = habits.find((habbit) => habbit.id == hashId);
if (urlHabbit) {
  rerender(urlHabbit.id);
} else {
  rerender(habits[0].id);
}
