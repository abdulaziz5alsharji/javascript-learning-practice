let names = ["Ali", "Fahad", "Faisal"];
let words = new Array("Python", "Js", "C++");
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(names[0]);
console.log(words[0]);

console.log(`Hello, ${names[1]}`);
console.log(words[0][0]);
names[0] = "Ahmed";
console.log(names);

console.log(numbers[0][1]);

console.log(Array.isArray(names));


let names = ["Ali", "Fahad", "Faisal"];

console.log(`The Array Length: ${names.length}`);
names[6] = "Ahmed";
console.log(names);
console.log(names.length) // 7
names[names.length] = "Me";
names[names.length - 1] = "Abdulaziz";
console.log(names);


let names = ["Ali", "Fahad", "Faisal"];

names.unshift("Abdulaziz", "Ahmed", [1, 2, 3]); // Add First
console.log(names);

names.push("Abdulaziz", "Ahmed", [1, 2, 3]); // Add End
console.log(names);

let firstName = names.shift() // remove the first value
let lastName = names.pop() // remove the last value

console.log(`The First Name Is: ${firstName}, And The Last Name Is: ${lastName}`);
console.log(names);

let names = ["Ali", "Fahad", "Faisal", "Ali"];

console.log(names.indexOf("Ali"));
console.log(names.indexOf("Ali", 2));


console.log(names.lastIndexOf("Ali"));
console.log(names.lastIndexOf("Ali", -3));

console.log(names.includes("Ali", 2));

let names = ["Ali", "Fahad", "Faisal", "Abdulaziz"];

console.log(names.sort());
console.log(names);
console.log(names.reverse());
console.log(names.sort().reverse());

let names = ["Ali", "Fahad", "Faisal", "Abdulaziz"];

console.log(names.slice());
console.log(names.slice(1));
console.log(names.slice(1, 3));
console.log(names.slice(-3, -1));

names.splice(0, 3, "Ahmed", "TEST");
console.log(names);

let names = ["Ali", "Fahad", "Faisal", "Abdulaziz"];
let numbers = [1, 2, 3];
let letters =  ["A", "B", "C"];

let newArray = names.concat(numbers, letters);
console.log(newArray);

console.log(names.join());
console.log(names.join(""));
console.log(names.join(" "));
console.log(names.join("-")); 
console.log(typeof names.join("|")); // return string

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

Method 2
myFriends.reverse().shift();
console.log(myFriends.reverse()); // ["Ahmed", "Elham", "Osama"];

Method 3
console.log(myFriends.slice(myFriends.length - (num + +true), num)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let result = words[words.length - +true][0].slice(website.length).toUpperCase();
console.log(result); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
    console.log("Found.. !");
}
console.assert(haystack.indexOf(needle) > -1 ? true: false, "Not Found");
if (haystack.lastIndexOf(needle) > -1){
    console.log("Found..!");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

let second = arr1.pop(); 
let third = arr2.pop();
let first = arr2.pop();
allArrs = [first, second, third];
console.log(allArrs.join("").toLowerCase()); // fxy
