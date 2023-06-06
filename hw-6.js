/* Task 1

let str = "js";
let strInUpperCase = str.toUpperCase();
console.log(strInUpperCase);
*/




/* Task 2

function searchStart(arr, str) {
    const lowerStr = str.toLowerCase(); 
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr)); 
}
  
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
*/




/* Task 3

const num = 32.58884;
const roundedNumFloor = Math.floor(num); 
const roundedNumCeil = Math.ceil(num);
const roundedNumRound = Math.round(num);
console.log(roundedNumFloor);
console.log(roundedNumCeil);
console.log(roundedNumRound);
*/



/* Task 4

const nums = [52, 53, 49, 77, 21, 32];
const minNum = Math.min(...nums); 
const maxNum = Math.max(...nums); 
console.log(`Наименьшее число: ${minNum}, наибольшее число: ${maxNum}`);
*/




/* Task 5

function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * 9) + 1;
    console.log(randomNumber);
}
getRandomNumber();
*/




/* Task 6

function getRandomArrNumbers(num) {
    const arr = [];
    const length = Math.floor(num / 2);
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
    }
    return arr;
}
console.log(getRandomArrNumbers(7)); 
console.log(getRandomArrNumbers(12));
*/




/* Task 7

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(-5, 5));
*/




/* Task 8

let currentDate = new Date();
let dateString = currentDate.toLocaleDateString(); 
console.log(dateString);
*/




/* Task 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
*/





/* Task 10

function formatDate(date) {
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const dayOfWeek = weekdays[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `Дата: ${dayOfMonth} ${month} ${year} - это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
const date = new Date();
console.log(formatDate(date));
*/