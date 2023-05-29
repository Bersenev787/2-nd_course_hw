/* Задание 1

function returnNumber (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log (returnNumber (4, 8));
console.log (returnNumber (6, 6));
*/



/* Задание 2

function returnNumber (n) {
    if (n % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

returnNumber (6);
returnNumber (7);
*/




/* Задание 3

function square(a) {
    return a**2;
}

let numUser = 33;
let result = square(numUser);
console.log (`Квадрат числа ${numUser} равен ${result}`);
*/




/*Задание 4

let UserQues = Number(prompt('Сколько Вам лет?'));

switch (true) {
    case UserQues < 0:
        console.log ('Вы ввели неправильное значение');
        break;
    case UserQues >= 0 && UserQues <= 12:
        console.log ('Привет, друг!');
        break;
    case UserQues >= 13:
        console.log ('Добро пожаловать!');
        break;
    default:
        console.log ('Вы ввели неправильное значение');
        break;
}
*/



/* Задание 5

function multNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return a * b;
    }
}

console.log (multNumbers (4, 7));
console.log (multNumbers (4, 'f'));
console.log (multNumbers (-4, 7));
console.log (multNumbers ('da', 'net'));
*/




/* Задание 6

function cubeNumber() {
    let n = prompt("Введите число");
    if(isNaN(n)) {
        return "Переданный параметр не является числом";
    } else {
        let result = Math.pow(n, 3);
        return n + " в кубе равняется " + result;
    }
}

console.log(cubeNumber());
*/




/*Задание 7

let circle1 = {
    radius: 6,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
*/


