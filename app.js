// Задача №1, Урок 16
// const priceInHourUSD = 80;
// const taskTimeHour = 40;
// const myTimeHour = (11 - 2) * 5;

// let answerFirst = taskTimeHour < myTimeHour;
// if (answerFirst == true) {
//   answerFirst = 'Я успею выполнить заказ!';
// } else {
//   answerFirst = 'Я неуспею :С';
// }
// let answerSecond = 'Прайс: ' + priceInHourUSD * taskTimeHour + '$';

// console.log(answerFirst, answerSecond);

// Задача №2, Урок 21
// const deposit = 12000;
// const housePrice = 13500;
// const percent = 0.07;
// const depositLenghtMonth = 24;

// const totalAmount = Math.round(
//   (percent / 12 + 1) ** depositLenghtMonth * deposit
// );

// if (totalAmount >= housePrice) {
//   console.log(
//     `Возможность купить дом есть!
//     Остаток средтв после покупки составит: ${totalAmount - housePrice}$`
//   );
// } else {
//   console.log(`Возможности купить дом нет :(
//     Не хватает: ${-(totalAmount - housePrice)}$`);
// }

// Задача №3, Урок 25
// let answer = prompt('Сколько будет 7 + или - 15?');
// let message;

// if (Number(answer) === -8 || Number(answer) === 22 || answer === 'Я не робот') {
//   message = 'Успех';
// } else {
//   message = 'Вы робот!';
// }

// alert(message);

// Задача №4, Урок 30
const balance = 900;
const bonusBalance = 120;
const isBanned = false;
const isSelling = true;
const isExist = false;

const canIBuy =
  (balance >= 1000 || bonusBalance >= 100) &&
  !isBanned &&
  isSelling &&
  !isExist;

console.log(`Я могу купить игру? ${canIBuy ? 'Да' : 'Нет'}`);
