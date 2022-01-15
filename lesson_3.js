// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``
// console.log("`I'm In \n\\\\\nLove \\\\ \"\"\" '''\n ++ With ++ \n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

let title = "Elzero";
let desc = "Helle, Every One...";

let markUp = `
    <div class="parent">
    <div class="child">
        <h1>${title}</h1>
        <p>${desc}</p>
    </div>
    </div>
`

document.write(markUp.repeat(4));

var name = "Ali";
var reName = name.repeat(5);
console.log(reName);

console.log(4 + 4);
console.log(4 - 4);
console.log(4 * 4);
console.log(4 / 4);
console.log(4 % 4);
console.log(2 ** 4);
console.log(10 + "Hello"); // 10Hello
console.log(10 + "10"); // 1010
console.log(10 - "hello World"); // NaN
console.log(10 - "50"); // -40
var a = 10;
a++;
++a;
--a;
console.log(a);

console.log(+"100"); // 100
console.log(+"-100"); // -100
console.log(+"Hello"); // NaN
console.log(+"44.4"); // 44.4
console.log(+0xff); // 255
console.log(+null); // 0
console.log(+false); // 0
console.log(+true); // 1

console.log(-"100"); // -100
console.log(-"-100"); // 100
console.log(-"Hello"); // NaN
console.log(-"44.4"); // -44.4
console.log(-0xff); // -255
console.log(-null); // -0
console.log(-false); // -0
console.log(-true); // -1

let a = "10";
let b = 20;
let c = true;
console.log(a + b); // 1020
console.log(+a + b); // 30
console.log(a - b); // -10
console.log("" - 2); // -2
console.log(+false - +true); // -1
console.log(true + b); // 21
console.log(a + b + c); // 1020true

let a = 10;
a = 20;
a += 10; // a = a + 10
a -= 5; // a = a - 5
a /= 5; // a = a / 5
console.log(a);

Replace ? With Arithmetic Operators
console.log((10 * 20) + (15 % 3) + (190 + 10) - 400); // 0


let num = 3;

// Solution One
console.log(num + true + true + true); // 6

// Solution Two
console.log("9" - num); // 6

// Solution Three
console.log(0x3 + num); // 6

// Solution Four
console.log(0x9 - num); // 6

// Solution Five
console.log(-"-9" - num); // 6

// Solution Six
console.log(num + +"3"); // 6

let num = "10";

// Solution One
console.log(+num + +"10"); // 20

// Solution Two
console.log(+num + true + true + true + true + true + true + true + true + true + true); // 20

// Solution Three
console.log(Number(num) + -"-10"); // 20

// Solution Four
console.log(+"" + +num + +"10"); // 20


console.log(1_000_000);
console.log(1e6);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log((100).toString());
console.log(typeof 100..toString());
console.log(100.5555.toFixed(2));
console.log(parseInt("100 Ali"));
console.log(parseInt("Ali 100 Ali"));
console.log(parseInt("100.5 Ali"));
console.log(parseFloat("100.5 Ali"));
console.log(Number.isInteger(100.4));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100));
console.log(Number.isNaN("Ali" / 5));

console.log(Math.round(9.5)); // 10
console.log(Math.round(9.2)); // 9

console.log(Math.ceil(9.2)); // 10
console.log(Math.floor(9.8)); // 9

console.log(Math.min(100, 82, -3, 200, -44));
console.log(Math.max(100, 82, -3, 200, -44));

console.log(Math.pow(2, 4));
console.log(Math.random())
console.log(Math.trunc(44.4));
