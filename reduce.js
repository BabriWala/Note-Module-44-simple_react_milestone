const numbers = [100,50,60,70,80,90];

// For Loop
let totalNumbers = 0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    // console.log(element)
    // totalNumbers += element;
    totalNumbers = totalNumbers + element;
}
// console.log(totalNumbers);


// Do While Loop
let newTotalNumbers = 0;
let j = 0;
do {
    newTotalNumbers += numbers[j];
    j++;
} while (j<numbers.length);
// console.log(newTotalNumbers);

// For Of
let forNewTotalNumbers = 0;
for(let element of numbers){
    // console.log(element);
    // console.log(numbers);
    forNewTotalNumbers += element;
}
// console.log(forNewTotalNumbers);


// reduce
const reduceTotalNumbers = numbers.reduce((accumulator, currentValue) =>{
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
},0);
console.log(reduceTotalNumbers);