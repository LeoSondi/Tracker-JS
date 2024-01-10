// Tasks 5-6, Functions
const toPower = (num, power) => num ** power;

const credit = (age, hasJob = false) => {
  switch (true) {
    case age >= 24 && hasJob:
      return 500;
    case age >= 24:
      return 100;
    default:
      return 0;
  }
};

const canBuy = (age, hasJob = false, money, price) => {
  const creditSum = money < price ? credit(age, hasJob) : 0;
  money = money < price ? creditSum + money : money;

  if (money >= price) {
    return `Вы можете купить MacBook за ${price}$. У вас останется ${
      price - money
    }$, Кредит ${creditSum}$`;
  } else {
    return `Вы не сможете купить MacBook. Не хватает ${price - money}$`;
  }
};

// Tasks 7-8, Arrays
const tasks = ['Task 1', 'Task 2'];

const addTask = (task) => {
  tasks.push(task);
};

const deleteTask = (task) => {
  const index = tasks.indexOf(task);
  if (index < 0) {
    return;
  }
  return tasks.splice(index, 1);
};

const prioritizeTask = (task) => {
  const arrayItem = deleteTask(task);
  if (!arrayItem) return;
  tasks.unshift(arrayItem[0]);
};
