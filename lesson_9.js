let numbers = [1, 2, 3, 4, 5, 6];

let addSelf = numbers.map(function(element, index, arr){
    console.log(element);
    console.log(index);
    console.log(arr);
});
console.log(addSelf);

let addSelf = numbers.map(function(element, index, arr){
    return [element, index, arr];
});
console.log(addSelf);

let addSelf = numbers.map(function(element){
    return element + element;
});
console.log(addSelf);

let addSelf = numbers.map((element) => element + element);
console.log(addSelf);

function addition(num) {
    return num + num;
}

console.log(numbers.map(addition));

let swappingCases = "elZERo";
let swapped = swappingCases.split("").map(function(element){
    return element.toUpperCase() === element ? element.toLowerCase():element.toUpperCase();
}).join("");
console.log(swapped);

let invertedNumbers = [1, -29, 14, -33, 100, 99];

console.log(invertedNumbers.map((element) => -element));

let friends = ["Ali", "Fahad", "Ahmed", "Abdulaziz", "Faisal"];
console.log(friends.filter(function(element) {
    return element.startsWith("A");
}));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

console.log(numbers.filter((ele) => ele % 2 === 0));

let num = [1, 2, 3, 4, 5];

console.log(num.reduce(function(acc, curr) {
    return acc + curr;
}));

let theBiggest = ["ble", "propaganda", "other", "AAA"];
console.log(theBiggest.reduce(function(acc, curr){
    return acc.length > curr.length ? acc:curr;
}));

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(mix.map(function(ele){
    return typeof ele === "string" ? ele: "";
}).reduce(function(acc, curr){
    return acc + curr;
}));


let myString = "EElllzzzzzzzeroo";
let letters = [];
console.log(myString.split("").filter(function(ele){
    if (!letters.includes(ele)) {
        letters.push(ele);
        return ele;
    }
}).join(""));


let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(myArray.flat());


let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(myArray.reduce(function(acc, curr){
    if (Array.isArray(curr)){
        return acc + curr.join("");
    }
    return acc + curr;
}));



let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
console.log(numsAndStrings.filter(function(ele){
    return typeof ele === "number";
}).map((ele) => -ele));
[-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];
console.log(nums.reduce(function(acc, curr){
    if (curr % 2 == 0) {
        return acc * curr;
    }
    else {
        return acc + curr;
    }
}, 1))
