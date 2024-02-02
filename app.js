//------------------- Tasks 5-6, Functions -----------------*/
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

/*-------------------- Tasks 7-8, Arrays -----------------*/
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

/*------------------- Tasks 9-10, Cycles -----------------*/
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

/*------------------- Tasks 11, () => {} -----------------*/
const f = (pow) => (num) => num ** pow;
// console.log(f(10)(2));

/*--------------- Tasks 12, Array methods ---------------*/
const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
  [300, 280],
  [230, 250],
];

const increasedPrices = prices
  .map((product) => product[1] - product[0])
  .filter((delta) => delta > 0);

// console.log(increasedPrices); // лучше сначала map, потом filter, чтобы не брать элементы по индексу дважды + забыл сократить запись

/*--------------- Tasks 13, Reduce ---------------*/

const pricesOfMacUSD = [172, 205, 384, 105];

const avgPriceOfMacUSD = pricesOfMacUSD.reduce((acc, price, i) => {
  if (i != pricesOfMacUSD.length - 1) {
    return acc + price;
  } else {
    return (acc + price) / pricesOfMacUSD.length;
  }
}, 0);

// console.log(avgPriceOfMacUSD);
// 216.5

/*--------------- Tasks 14, Some ---------------*/
const arrayForSome = [2, 3, [5, 6], [6, 8], 7, 12, 35];

const someFunction = (el, arr) => {
  let result = arr.find((e) => el === e);
  return result != undefined ? true : false;
};

// console.log(someFunction(6, arrayForSome))

/*--------------- Tasks 15,  ---------------*/
