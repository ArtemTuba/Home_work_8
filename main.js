console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let countNum = '';

for(let i = 10; i <= 20; i++) {
    if(i === 20) {
        countNum += i;
    } else {
        countNum += `${i},`;
    }  
}
console.log(countNum);
console.groupEnd();

console.group('Вивести квадрати чисел від 10 до 20');
let sum = 10;

while(sum < 21){
    console.log(`Квадрат ${sum} = ${sum * sum}`);
    sum++;
}
console.groupEnd();


console.group('Вивести таблицю множення на 7.');
let mult = 1;
let factor = 7;

while(mult <= 10){
    console.log(`${factor} * ${mult} = ${factor * mult}`); 
    mult++;
}

console.groupEnd();


console.group('Знайти добуток усіх цілих чисел від 15 до 35.');
let num = 15;

for(let i = 16; i <= 35; i++) {
    num = num * i;
    console.log(num);
}

console.groupEnd();


console.group('Знайти середнє арифметичне всіх цілих чисел від 1 до 500.');
let number = 0;


for(let i = 1; i <= 500; i++) {
    number = number + i;
}

let average = number / 500;
console.log(average);
console.groupEnd();


console.group('Вивести суму лише парних чисел в діапазоні від 30 до 80.');
let count = 30;
let result = 0;

while(count <= 80){
    if(count % 2 === 0){
        result += count;
    }
    count++;
}
console.log(result);
console.groupEnd();
