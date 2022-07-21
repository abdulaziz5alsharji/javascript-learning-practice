var myVar = "name";
let user = {
    name: "Ali",
    age: 12,
    "country of": "OMAN", 
    sayHello: function() {
        return "Hello";
    },
};

console.log(`${user.sayHello()}, The Name: ${user.name}, And Age Is ${user["age"]}, The Country: ${user["country of"]}`);
console.log(user.myVar); // cannot do that
console.log(user[myVar]); // I can do that


let user = {
    name: "Ali",
    age: 12,
    country: "OMAN",
    skills: ["HTML", "CSS", "PYTHON", "JS"],
    available: true,
    address: {
        Kas: "Riyadh",
        egypt: {
            one: "Card",
            two: "Giza"
        }
    }, 
    sayHello: function() {
        return "Hello";
    },
    checkAV: function() {
       return (user.available ? "Free For Work": "Not Free");
    }
};

console.log(user.address["egypt"].one);
console.log(user.checkAV())


let user = new Object({
    name: "Ali",
    age: 12,
    country: "OMAN",
    skills: ["HTML", "CSS", "PYTHON", "JS"],
    available: true,
    checkAV: function() {
       return (this.available ? "Free For Work": "Not Free");
    },
    message: function() {
        return `-Name:${this.name}\n-Age:${this.age}\n-Skills:${this.skills}`;
    }
});

console.log(user.message());
console.log(user.checkAV());

let user = new Object({});

user.name = "Ali";
user["age"] = 12;

console.log(user.name, user["age"]);
var myVar = 10;
let myVar2 = 20;
console.log(this);
this.alert("Hello World");
console.log(this === window);

console.log(window.myVar, this.myVar);
console.log(window.myVar2); // undefine
function test() {
    console.log(this);
    return this;
}
console.log(window == test());

let user = Object.create({age: 12});
user.name = "Ali";
console.log(user.name);

let user = {
    name: "Ali",
    age: 12,
    country: "OMAN",
    skills: ["HTML", "CSS", "PYTHON", "JS"],
    doubleAge: function() {
        return this.age * 2;
    }
}

let copyObj = Object.create(user);
copyObj.age = 10; // 24 because it use user.age, but if use this will be 20
console.log(copyObj.doubleAge());

let obj1 = {
    prop1: 1,
    meth1: function(){
        return this.prop1;
    }
};
let obj2 = {
    prop2: 2,
    meth2: function() {
        return this.prop2;
    }
}

let targetObj = {
    prop1: 100,
    prop3: 3,
}

let finalObject = Object.assign(targetObj, obj1, obj2);
console.log(finalObject);

let newObject = Object.assign({}, obj2, {name:"Ali", age: 12});

console.log(newObject);

let user = {
    name: "Ali", 
    age: 12,
};


let ObjKeys = Object.keys(user);
let ObjValues = Object.values(user);

console.log(ObjKeys, "\n", ObjValues);

for(let i = 0; i < ObjKeys.length; i++) {
    console.log(`-${ObjKeys[i]}: ${ObjValues[i]}`);
}

for(let i = 0; i < ObjKeys.length; i++) {
    console.log(`-${ObjKeys[i]}: ${user[ObjKeys[i]]}`);
}


console.log(user.hasOwnProperty("name"));

function hasProperty(obj, property) {
    return (obj[property] === undefined ? false : true);
}

console.log(hasProperty(user, "name"));
console.log(hasProperty(user, "country"));

names = ["Ali", "Faisal", "Ahmed"];
numbers = [1, 2, 3];

console.log("Ahmed" in names);
console.log(1 in numbers);

console.log("name" in user); // true


//Create Your Object Here

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function(){
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


//Method One
Create Your Object Here
let objMethodOne = {
    property: "Method One", 
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "Method Two", 
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
    property: "Method Three", 
});
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({
    property: "Method Four", 
});
console.log(objMethodFour.property); // "Method Four"


let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a:a}, threeNums, twoNums);
console.log(finalObject);

// /*
//     a: 1
//     b: 2
//     c: 3
//     d: 4
//     e: 5
//     f: 6
// */


The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

// console.log(Object.keys(myFavGames))
// console.log(Object.values(myFavGames))
// console.log(Object.keys(myFavGames)[0])
// console.log(myFavGames.hasOwnProperty("YS"));
for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

// Check If Nested Object Has Property (bestThree)
    if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
        console.log("- Game Has Releases");
        console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree["one"]}`);
        console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree["two"]}`);
        console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree["three"]}`);
    }
    console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
