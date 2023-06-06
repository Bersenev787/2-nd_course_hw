/* Задание 1 
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10){
        break;
    }
}
*/



/* Задание 2 

const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));
*/



/* Задание 3 

const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.join(' '));
*/




/* Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) { 
        arr[i].push(1); 
    }
}
console.log(arr); 
*/




/* Задание 5 

const arr = [1, 1, 1];
console.log(arr);
arr.push(2, 2, 2);
console.log(arr);
*/



/* Задание 6

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);
*/



/* Задание 7

const arr = [9, 8, 7, 6, 5];
const numUser = Number(prompt('Введите число от 1 до 10')) 

if (arr.includes(numUser)) {
    console.log ('Yes');
} else {
    console.log ('No');
}
*/



/* Задание 8

let str = 'abcdef';
str = str.split('').reverse().join('');
console.log(str);
*/



/* Задание 9

const arr = [
    [1, 2, 3], [4, 5, 6]
];

const arrNew = [];

for (const arrIn of arr) {
    for (const elem of arrIn) {
        arrNew.push(elem);
    }
}

console.log(arrNew);
*/



/* Задание 10

const myArray = [5, 2, 9, 1, 10, 7]; 

for (let i = 0; i < myArray.length; i++) {
    if (i === myArray.length - 1) { 
        console.log(myArray[i]); 
    } else {
        console.log(myArray[i] + myArray[i+1]); 
    }
}
*/



/* Задание 11

function squareArray(arr) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] ** 2); 
    }
    return result; 
}
  
const myArray = [5, 22, 11, 30, 54];
const squaredArray = squareArray(myArray);
console.log(squaredArray);
*/




/* Задание 12

function getLengthWords(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const words = arr[i].split(' ');
        let length = 0;
        for (let j = 0; j < words.length; j++) {
            length += words[j].length;
        }
        result.push(length);
    }
    return result;
}

const input = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const lengths = getLengthWords(input);
console.log(lengths);
*/



/* Задание 13

function filterPositive(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) { 
            result.push(array[i]); 
        }
    }
    return result;
}
  
console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 
*/  



/* Задание 14

const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10)); 
}
console.log(arr); 

const evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr); 
*/

