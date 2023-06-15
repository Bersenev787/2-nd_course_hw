/* Task 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
*/





/* Task 2

function isPositive(num) {
    return num > 0;
}
  
function isMale(person) {
    return person.gender === 'male';
}
  
function filter(arr, ruleFunction) {
    return arr.map(function(item) {
        if (ruleFunction(item)) {
            return item;
        } else {
            return null;
        }
    }).filter(function(item) {
        return item !== null;
    });
}

const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter([3, -4, 1, 9], isPositive)); 
console.log(filter(people, isMale)); 
*/





/* Task 3

let count = 0;
const intervalID = setInterval(() => {
    console.log(new Date()); 
    count++; 
    if (count === 10) { 
        clearInterval(intervalID); 
        console.log('30 секунд прошло'); 
    }
}, 3000);
*/






/* Task 4

function delayForSecond(callback) {
    setTimeout(callback, 1000); 
}
  
delayForSecond(function () {
    console.log('Привет, Глеб!');
});
*/





/* Yask 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) { cb(); }
    }, 1000)
}
  
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});
*/
  