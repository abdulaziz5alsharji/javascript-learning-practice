let names = [1, 2, 3, "Ali", "Faisal", "Abdulaziz"];

for(let i = 0; i < names.length; i++){
    if (typeof names[i] == "string"){
        console.log(names[i]);
    }
}

let names = [1, 2, 3, "Ali", "Faisal", "Abdulaziz"];
let onlyNames = []
for(let i = 0; i < names.length; i++){
    if (typeof names[i] == "string"){
        onlyNames.push(names[i]);
    }
}
for(let j = 0; j < onlyNames.length; j++){
    console.log(onlyNames[j]);
}

let products = ["Pen", "Mouse", "Keyboard", "Iphone"];
let colors = ["Red", "Blue", "Green"];
let modes = [2020, 2021, 2022];
for (let i = 0; i < products.length; i++){
    console.log("#".repeat(15));
    console.log(`-${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ");
    for (let j = 0; j < colors.length; j++){
        console.log(`[+]${colors[j]}`);
    }

    console.log("Modes: ");
    for (let k = 0; k < modes.length; k++){
        console.log(`[+]${modes[k]}`);
    }
}


let products = ["Pen", "Mouse", "Keyboard", "Iphone"];

for (let i = 0; i < products.length; i++){
    if (products[i] == "Keyboard"){
        break;
    }
    console.log(products[i]);
}

let products = ["Pen", "Mouse", "Keyboard", "Iphone"];

for (let i = 0; i < products.length; i++){
    if (products[i] == "Keyboard"){
        continue;
    }
    console.log(products[i]);
}

let products = ["Pen", "Mouse", "Keyboard", "Iphone"];
let colors = ["Red", "Blue", "Green"];

mainLoop:for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for(let j = 0; j < colors.length; j++){
        if (colors[j] == "Blue") break nestedLoop;
        console.log(colors[j]);
    }
}

let products = ["Pen", "Mouse", "Keyboard", "Iphone"];
let colors = ["Red", "Blue", "Green"];

mainLoop:for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for(let j = 0; j < colors.length; j++){
        if (colors[j] == "Blue") break mainLoop;
        console.log(colors[j]);
    }
}


for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

let i = 0;

for(; i < 5; i++){
    console.log(i);
}

console.log(i);

let products = ["Pen", "Mouse", "Keyboard", "Iphone"];

let i = 0;

for(;;){
    if (i == products.length){
        break;
    }
    console.log(products[i]);
    i++;
}


let products = ["Pen", "Mouse", "Keyboard", "Iphone"];
let colors = ["Red", "Blue", "Green"];
let showCount = products.length;

document.write(`<h1>Show ${showCount} Products </h1>`);

for (let i = 0; i < showCount; i++){
    document.write("<div>");
    document.write(`<h3> [${i + 1}]${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++){
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join("|")}</p>`);
    document.write("</div>");
}

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

let i = 0;

do {
    console.log(i);
    i++;
}while(i < 5);


let i = 0;

do {
    console.log(i);
    i++;
}while(false);

while(true) {
    console.log("Hello World");
}

let start = 10;
let end = 100;
let exclude = 40;

for(let i = 10; i <= end; i += 10){
    if (i == exclude){
        continue;
    }
    console.log(i);
}

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > 0; i--) {
    if (i < 10){
        console.log(`0${i}`);
    }
    else {
        console.log(i);
    }
    if (i == stop) break;

}

let start = 1;
let end = 6;
let breaker = 2;

for (; start <= end; start++){
    console.log(start);
    for (let i = 0; i < breaker; i++){
        console.log("-- 2\n-- 4")
    }
}

let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  console.log(index);
  if (index == 4) {
      break;
  }
  index -= 2;
}

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let counter = 1;
for (let i = 0; i < friends.length; i++){
    if (friends[i][0] == "A") {
        continue;
    }
    console.log(`${counter} => ${friends[i]}`);
    counter++;
}

let swappedName = "elZerO";
let newName = "";
for (let i = 0; i < swappedName.length; i++){
    if (swappedName[i] == swappedName[i].toLowerCase()){
        newName += swappedName[i].toUpperCase();
    }
    else {
        newName += swappedName[i].toLowerCase();
    }
}
console.log(newName);

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = 1; i < mix.length; i ++){
    if (typeof mix[i] == "number") {
        console.log(mix[i]);
    }
}


let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (friends[index][0] == "A" || typeof friends[index] == "number") {
        index++;
        continue;     
    }
    console.log(`${counter + 1} => ${friends[index]}`);
    index++;
    counter++;
}
