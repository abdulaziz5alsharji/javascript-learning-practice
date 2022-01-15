let fullName = "Ali";

console.log(fullName[0]);
console.log(fullName.charAt(0));

console.log(fullName[40]); // undefine
console.log(fullName.charAt(40)); // nothing

console.log(fullName.length);
console.log(fullName.trim()); // remove the space
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let fullName = "ali Fahad alsharji";
console.log(fullName.indexOf("A"));
console.log(fullName.indexOf("F", 4));
console.log(fullName.indexOf("Fahad")); // 4

console.log(fullName.lastIndexOf("a")); // 14

let firstName = fullName.slice(0, 3);
let secondName = fullName.slice(4, 9);
let lastName = fullName.slice(10);

console.log(`First Name Is ${firstName}, Second Name Is ${secondName}, And Last Name Is ${lastName}`);

console.log(fullName.slice(-8));
console.log(fullName.slice(-8, -6));

console.log(fullName.repeat(5));

console.log(fullName.split(""));
console.log(fullName.split(" "));
console.log(fullName.split(" ", 1));

let msg = "I love JavaScript";
console.log(msg.substring(-4));
console.log(msg.substring(-4, 7)); // 0 - 7
console.log(msg.substring(7, 0));

console.log(msg.substr(msg.length)); // nothing
console.log(msg.substr(-10));
console.log(msg.substr(2, 5)); // love

//includes(value, start)
console.log(msg.includes("love")); // true
console.log(msg.includes("love", 7)); // false

//startsWith(value, start)
console.log(msg.startsWith("I")); // true
console.log(msg.includes("love", 2)); // true

//endWith(value, length)
console.log(msg.endsWith("ipt")); // true
console.log(msg.endsWith(" ", 2)); // true
console.log(msg.endsWith("ve", 6)); // true

console.log(1e5); // 100000
console.log(100_000); // 100000
console.log(100000.0); // 100000
console.log(10 * 10000); // 100000
console.log(10 ** 5); // 100000
console.log(99999 + 1); // 100000
console.log(100001 - 1); // 100000
console.log(1000000 / 10); // 100000

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER.toString().slice(4,6) - "3");

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num) + true); // 2

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(flt - 0.4); // 10
console.log(parseInt(flt.toString())); // 10

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName[3]); // e
console.log(userName.split("")[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(-3, -2)); // e
console.log(userName.substring(0, 1).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
