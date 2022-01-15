console.log(10 == "10");
console.log(10 == "20");

console.log(10 != "10");
console.log(10 != "20");

console.log(10 === "10");
console.log(10 === 10);

console.log(10 !== "10");
console.log(10 !== 10);

console.log(10 > 20);
console.log(20 >= 15);

console.log(5 < 10);
console.log(5 <= 5);

console.log(!true);
console.log(!false);
console.log(! 10 === 10);

console.log(true && true) // true
console.log(false && true) // false
console.log(false && false) // false

console.log(true || true) // true
console.log(false || true) // true
console.log(false || false) // false

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Oman";
let isStudent = true;


if (discount && country == "USA") {
    price -= discountAmount;
}
else if (discount && country == "Oman") {
    if (isStudent) {
        price -= discountAmount + 20;
    }
    else {
        price -= discountAmount + 10;
    }
}
else if (discount && country == "KSA"){
    if (isStudent){
        price -= discountAmount + 10;
    }
    else {
        price -= discountAmount + 5;
    }
}

console.log(price);

let age = 80;
let theName = "Ali";
let theGender = "Male";

let result = age >= 18 ? true : false;
console.log(result);

let result = age >= 18 ? console.log("[++]Good..!") : console.log("[!!]Bad..!");

console.log(`Hello, ${theGender == "Male" ? "Mr.":"Ms."}${theName}`);

age < 20 
? console.log("20")
: age > 20 && age < 60 
? console.log("20 to 60")
: age > 60 && age < 80 
? console.log("Third")
: console.log("larger than 80");

let price = null; // null, undefined, zero, false

console.log(`The Price: ${price || 200}$`)

let price_ = undefined; // null, undefined

console.log(`The Price: ${price_ ?? 400}$`)

let status = 200;
switch(status) {
    case 200:
        console.log("[-]Ok");
        break
    case 404:
    case 400:
        console.log("[!!]Not Found!");
        break;
    default:
        console.log("[!!]Unknown!")
}

console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 == ! +"-40"); // true
console.log(! 10 == ! -"-40"); // true
console.log(! "10" == ! 10); // true
console.log(! 20 == false); // true

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(!(num1 === num2)); // true
console.log(!(num1 == num2)); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

if (num.toString().length == 1) {
    console.log(`00${num}`);
}
else if (num.toString().length == 2) {
    console.log(`0${num}`);
}
else {
    console.log(num);
}

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
}
if (num1 == str && ! (typeof num1 == typeof str)) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (!(str === str2)){
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (!(str === str2) && typeof str == typeof str2){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

let num1 = 10;
let num2 = 30;
let num3 = "30";

if (+num3 > num1 && typeof num3 != typeof num2) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
    if (+num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
        console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
        if (num3 != num1 && typeof num3 != typeof num1 && typeof num3 != typeof num2) {
            console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
        }   
    }
}


let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;



// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
