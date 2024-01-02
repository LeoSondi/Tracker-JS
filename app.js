// Задача №1, урок 16
const priceInHourUSD = 80;
const taskTimeHour = 40;
const myTimeHour = (11 - 2) * 5;

let answerFirst = taskTimeHour < myTimeHour;
if (answerFirst == true) {
  answerFirst = 'Я успею выполнить заказ!';
} else {
  answerFirst = 'Я неуспею :С';
}
let answerSecond = 'Прайс: ' + priceInHourUSD * taskTimeHour + '$';

console.log(answerFirst, answerSecond);

