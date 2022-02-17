console.log(typeof console.log); // function

function sayHello() {
    console.log("Hello World");
}

sayHello();
sayHello();
sayHello();

function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello("Ali");
sayHello("Fahad");


function sayHello(name) {
    return `Hello ${name}`;
}

console.log(sayHello("Ali"));
console.log(sayHello("Fahad"));

function add(x, y) {
    return x + y;
}

let result = add(3, 3);

console.log(add(3, 3));
console.log(result);

function sayHello(name, age) {
    if (age < 18) {
        console.log("App is not suitable for you");
    }
    else {
        console.log(`Hello ${name}, your age is ${age}`);
    }
}

sayHello("Ali", 12);
sayHello("Fahad", 30);


function generateYears(start, end, exclude) {
    let first = start;
    while (first != end) {
        if (first === exclude) {
            first++;
            continue;
        }
        console.log(first);
        first++;
    }
    console.log(first);
}

generateYears(2020, 2040, 2030);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++){
        if (i === exclude){continue;}
        console.log(i);
    }
}

generateYears(2020, 2040, 2030);

function numberCounter(start, end) {
    while(true) {
        if (start == end){
            console.log(start);
            return;
        }
        console.log(start);
        start++;
    }
}

numberCounter(1, 100);

function sayHello(name, age){
    if (age === undefined) {
        age = 'UnKnown';
    }
    return `Name ${name}, Age: ${age}`;
}

console.log(sayHello("Ali", 12));

function sayHello(name, age=0){
    if (age) {
        return `Name ${name}, Age: ${age}`;
    }
    else {
        return `Name ${name}, Age: Unknown`;
    }
}

console.log(sayHello("Ali", 12));
console.log(sayHello("Omar"));

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

let add = function (num1, num2) {
    return num1 + num2;
}
let message = function(name) {
    console.log(`Hello ${name}`);
}
console.log(add(4, 4));
message("Abdulaziz");

setTimeout(function(){
    console.log("Hello World");
}, 2000);


function sayMessage(fName, Lname){
    let message = "Hello";
    function concatMsg(){
        message = `${message} ${fName} ${Lname}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Ali", "Alsharji"));

function sayHello(theName, theGender="unknown") {
    if (theGender === "unknown") {
        console.log(`Hello ${theName}`);
    }
    else {
        if (theGender === "Male"){
            console.log(`Hello Mr. ${theName}`);
        }
        else {
            console.log(`Hello Miss. ${theName}`);
        }
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined){
        console.log("Second Number Not Found");
    }
    else {
        if (operation === undefined) {
            console.log(firstNum + secondNum);
        }
        else {
            if (operation === "add"){
                console.log(firstNum + secondNum);
            }
            else if(operation == "subtract") {
                console.log(firstNum - secondNum);
            }  
            else {
                console.log(firstNum * secondNum);
            }
        }
    }
}
  
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
    if (theAge > 10 && theAge < 100) {
        console.log(`Months: ${12 * theAge}`);
        console.log(`Weeks: ${(12 * theAge) * 4}`);
        console.log(`Days: ${((12 * theAge) * 4) * 7}`);
        console.log(`Hours: ${(((12 * theAge) * 4) * 7) * 24}`);
    }
    else {
        console.log("Age Out Of Range");
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months


function checkStatus(a, b, c) {
    let data = [a, b, c];
    let name = "";
    let age = 0;
    let state = false;
    for (let i = 0; i < data.length; i++){
        if ((typeof data[i]) === "string"){
            name = data[i];
        }
        else if ((typeof data[i]) === "number"){
            age = data[i];
        }
        else {
            state = data[i];
        }
    }
    if (state){
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    }
    else {
        console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }
}
  
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write("</select>")
}

createSelectBox(2000, 2021);

function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        if (typeof numbers[i] === "string"){
            continue;
        }
        else {
            result *= Math.trunc(numbers[i]);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

let add = (n1, n2) => {
    let result = n1 + n2;
    return result;
};

console.log(add(4, 4));

let add = (n1, n2) => n1 + n2;
let print = _ => console.log(add(4, 4));
print();

let add_ = (n1, n2) => {
    let result = n1 + n2;
    console.log(result);
};

add_(4, 4);

var a = 1;
let b = 2;

function test() {
    var a = 11;
    let b = 12;
    console.log(`Function- From Global ${a}`);
    console.log(`Function- From Global ${b}`);
}

console.log(a);
console.log(b);
test();

var x = 10;

if (true) {
    let x = 20;
}

console.log(x);

let x = 19;
function parent() {
    let x = 20;
    function child() {
        let x = 21;
        console.log(x);
    }
    child();
}

parent();

function isOk(status) {
    switch (status) {
        case 200:
            console.log("Ok");
            break;
        case 404:
        case 300:
        case 400:
            console.log("Not found!");
            break;
        default:
            console.log("Error!");
    }
}

isOk(300);


function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let newName = zName.split(" ");
        return `${newName[0]} ${newName[1][0].toUpperCase()}`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let age = parseInt(zAge);
        return `Your Age Is ${age}`
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        let letters = zCountry.slice(0, 2);
        return `You Live In ${letters.toUpperCase()}`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
      return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}
  
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
  
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

let itsMe = _ => `Iam A Normal Function`;

  
console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


function specialMix(...data) {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        if ((typeof data[i]) === "number") {
            total += data[i];
        }
        else if (typeof data[i] === "string") {
            let num = parseInt(data[i]);
            if (! Number.isNaN(num)) {
                total += num;
            }
        }
    }
    if (! total) {
        return "All Is Strings"
    }
    return total;
}
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
}
let checker = (zName) => {
    return (status) => {
        return (salary) => {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
};
  console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
