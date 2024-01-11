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

const myUrl = 'https://developers.sber.ru/portal/products/gigachat';

const getUrlPaths = (string) => {
  let [protocol, _, host, ...slug] = string.split('/');

  console.log(
    `Protocol: ${protocol.split(':')[0]}\nHost: ${host}\nSlug: /${slug.join(
      '/'
    )}`
  );
};

// getUrlPaths(myUrl);

// Tasks 9-10, Cycles
const array = ['!', 'JS', 'love', 'I'];
const newArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

// console.log(newArray.join(' '))

const userOperations = [1000, -700, 300, -500, 10000];
let userMoney = 100;

const getBalance = (operations, money) => {
  for (const element of operations) {
    money += element;
  }
  return money;
};

const checkNegativeBalance = (operations, money) => {
  for (const element of operations) {
    money += element;
    if (money < 0) {
      return false;
    }
  }
  return true;
};

const getAverage = (operations) => {
  let avgIncome = 0;
  let avgExpenses = 0;
  let countIncome = 0;
  let countExpenses = 0;
  for (const element of operations) {
    if (element > 0) {
      avgIncome += element;
      countIncome++;
    } else {
      avgExpenses += element;
      countExpenses++;
    }
  }
  return `Средний доход: ${avgIncome / countIncome}$.\nCредние расходы: ${
    -avgExpenses / countExpenses
  }$`;
};

// console.log(getBalance(userOperations, userMoney));
// console.log(checkNegativeBalance(userOperations, userMoney));
// console.log(getAverage(userOperations));
