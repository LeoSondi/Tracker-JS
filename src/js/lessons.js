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
  [230, 270],
];

const increasedPrices = prices
  .map((product) => product[1] - product[0])
  .filter((delta) => delta > 0);

// console.log(increasedPrices); // лучше сначала map, потом filter, чтобы не брать элементы по индексу дважды

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

/*--------------- Tasks 15, strings ---------------*/
const userData = 'Вася Терминатор Пердинатор Пупкин';

const getFullName = (data) => {
  const name = `${data.slice(0, data.indexOf(' '))}${data.slice(
    data.lastIndexOf(' '),
    data.length
  )}`;

  return name;
};

// console.log(getFullName(userData));

/*--------------- Tasks 16, Num check ---------------*/

const num1 = '85845454455';
const num2 = '+75845454455';
const num3 = '+7(584)5454455';
const num4 = '+7(584) 451-44-55';
const num5 = '  +7(584) 451-44-55    ';

const erNum1 = '85844455';
const erNum2 = '+7(ds584)5454455';
const erNum3 = '9+7585454455';
const erNum4 = '85845h54455';

const isNum = (num) => {
  let res = num.trim();
  res = res.replaceAll('-', '');
  res = res.replaceAll('(', '');
  res = res.replaceAll(')', '');
  res = res.replaceAll(' ', '');
  res = res.replaceAll('+7', '8');

  if (res.length === 11 && !isNaN(Number(res)) && res.startsWith('8')) {
    return res;
  }

  return 'Номер не валидный';
};

// console.log(isNum(num1));
// console.log(isNum(num2));
// console.log(isNum(num3));
// console.log(isNum(num4));
// console.log(isNum(num5));
// console.log(isNum(erNum1));
// console.log(isNum(erNum2));
// console.log(isNum(erNum3));
// console.log(isNum(erNum4));

/*--------------- Tasks 17, Card save ---------------*/
const cardNum = '2343554411995659';

const saveCard = (card) => {
  return card.substr(-4).padStart(8, '*');
};

// console.log(saveCard(cardNum));

/*--------------- Tasks 18, Users sort ---------------*/
const users = [
  {
    name: 'Аня',
    surname: 'Озерская',
    age: 36,
    skills: ['Готовка', 'Обучение нейросетей', 'Милота'],
  },
  {
    name: 'Даниил',
    surname: 'Варнавский',
    age: 25,
    skills: ['Программирование', 'Футбол', 'Анлгийский'],
  },
  {
    name: 'Женя',
    surname: 'Фалалеев',
    age: 13,
    skills: ['ПДД', 'Хоккей'],
  },
  {
    name: 'Алиса',
    surname: 'Вольхина',
    age: 23,
    skills: ['Логистика', 'Психология'],
  },
];

// Сортировака по возрастанию возраста
users.sort((a, b) => a.age - b.age);

// console.log(users);

/*--------------- Tasks 19, Object converting ---------------*/
const newUsers = users.map((user) => {
  const fullName = user.name + ' ' + user.surname;
  const skillsCount = user.skills.length;
  return { fullName, skillsCount };
});

// console.log(newUsers);

/*--------------- Tasks 20, Object methods ---------------*/

const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance = this.balance + sum;
    this.operations.push({
      reason,
      sum: `+${sum}$`,
    });
    return true;
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      this.operations.push({
        reason: `Операция отклонена! ${reason}`,
        sum: `-${sum}$`,
      });
      return false;
    }
    this.balance = this.balance - sum;
    this.operations.push({
      reason,
      sum: `-${sum}$`,
    });
    return true;
  },
  operationsCount: function () {
    return this.operations.length;
  },
};

wallet.increase(3243, 'Зарплата');
wallet.decrease(956, 'Покупка Wildberries');
wallet.decrease(2355, 'Покупка Apple, MacBook Pro');

// console.log(wallet.operations);
// console.log(wallet.balance);

// Задание про склад товаров

const phone = {
  id: 1,
  name: 'phone',
  weight: {
    kg: 0.25,
  },
  brand: 'Apple',
};

const laptop = {
  id: 2,
  name: 'laptop',
  weight: {
    kg: 1.6,
  },
  brand: 'Apple',
};

const chair = {
  id: 3,
  name: 'chair',
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 4,
  name: 'paper',
  color: 'white',
};

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((g) => g.id === id);
  },
  addGood: function (good) {
    if (this.findGoodById(good.id)) {
      return 'Товар уже на складе';
    }
    this.goods.push({ ...good });
  },
  getAllWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
      0
    );
  },
};

warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(phone);
warehouse.addGood(laptop);

console.log(warehouse.goods);
console.log(warehouse.findGoodById(1));
console.log(warehouse.getAllWeightKg());
