let title = document.getElementById("title");
let paragraphs = document.getElementsByTagName("p");
let container = document.getElementsByClassName("container");
let query = document.querySelector(".container .header h1");
let queryAll = document.querySelectorAll("p");
let nameAttr = document.getElementsByName("two");

queryAll[0].title = "Hello World";
queryAll[1].className = "p2";
console.log(queryAll[1].className);
console.log(queryAll[0].title);
console.log(query);
console.log(nameAttr);
console.log(container[0]);
console.log(paragraphs);
console.log(title);
console.log(document.head);
console.log(document.scripts);

console.log(document.title);
console.log(document.body);
console.log(document.images);
console.log(document.links);
console.log(document.forms);

let main = document.getElementsByClassName("container")[0];
let title = document.getElementById("title");
title.textContent = `Hello <span>World</span>`
main.innerHTML = `
    <div>
        <h1>Hello World</h1>
    </div>
`
console.log(main.innerHTML)
console.log(main.textContent)
console.log(title.textContent)

let image = document.images[0];

image.setAttribute("class", "img-1");
image.title = "Hello Image One";
console.log(image.getAttribute("alt"));
console.log(image.className);
console.log(image.getAttribute("title"));

let lastParagraph = document.getElementById("p-1");
console.log(lastParagraph);
console.log(lastParagraph.attributes);
lastParagraph.removeAttribute("class")
console.log(lastParagraph.hasAttribute("class"));
console.log(lastParagraph.hasAttribute("title"));
console.log(lastParagraph.hasAttributes());
console.log(document.getElementsByTagName("span")[0].hasAttributes);


let product = document.createElement("div");
let attr = document.createAttribute("data-custom");
let text = document.createTextNode("Product One");
let comment = document.createComment("This Is Product One");

product.className = "product-1";
product.setAttributeNode(attr);
product.setAttribute("data-test", "testing");

product.appendChild(comment);
product.appendChild(text);

document.body.appendChild(product);

let main = document.getElementsByClassName("container")[0]
console.log(main.children);
console.log(main.childElementCount);
console.log(main.children[0].innerHTML)
console.log(main.childNodes);
console.log(main.firstChild);
console.log(main.lastChild);
console.log(main.firstElementChild);
console.log(main.lastElementChild);

let btn = document.getElementById("btn");
btn.onclick = function(){
    console.log("Hello From JS");
};

btn.oncontextmenu = function(){
    console.log("Hello From JS");
};

btn.onmouseenter = function(){
    console.log("Hello From JS");
};

btn.onmouseleave = function(){
    console.log("Hello From JS");
};

window.onscroll = function() {
    console.log("Hello World");
}
window.onresize = function() {
    console.log("What is your name ?? ");
}

btn.onclick = function() {
    window.close();
}

let meth1 = document.getElementById("elzero");
let meth2 = document.getElementsByClassName("element")[0];
let meth3 = document.getElementsByTagName("div");
let meth4 = document.getElementsByName("js")[0];
let meth5 = document.querySelector(".element");
let meth6 = document.querySelector("#elzero");
let meth7 = document.querySelector("div[name='js']");
let meth8 = document.querySelector("div");
let meth9 = document.querySelectorAll(".element")[0];
let meth10 = document.querySelectorAll("#elzero")[0];
let meth11 = document.querySelectorAll("div[name='js']")[0];
let meth12 = document.querySelectorAll("div")[0];
let meth13 = document.body.children[0];
let meth14 = document.body.firstElementChild;
let meth15 = elzero;

console.log(meth1);
console.log(meth2);
console.log(meth3[0]);
console.log(meth4);
console.log(meth5);
console.log(meth6);
console.log(meth7);
console.log(meth8);
console.log(meth9);
console.log(meth10);
console.log(meth11);
console.log(meth12);
console.log(meth13);
console.log(meth14);
console.log(meth15);


let images = document.images;

for(let i = 0; i < images.length; i++) {
    images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    images[i].alt = "Elzero Logo";
}

let div = `
<div>
  <img src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
</div>`

document.write(div.repeat(10));

let div = document.createElement("div");
let img = document.createElement("img");
img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
img.setAttribute("alt", "Elzero Logo");
for(let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img.setAttribute("alt", "Elzero Logo");
    div.appendChild(img);
    document.body.appendChild(div);
}

let input = document.querySelector("input[name='dollar']");
let btn = document.getElementsByClassName("click")[0];
let result = document.getElementsByClassName("result")[0];

input.onchange = function(){
    let value = Number(input.value);
    let result_ = value * 15.6;
    result.textContent = `{${value}} USD Dollar = {${result_.toFixed(2)}} Egyptian Pound`;
    // console.log(typeof +input.value);
}

btn.onclick = function(){
    let value = Number(input.value);
    let result_ = value * 15.6;
    result.textContent = `{${value}} USD Dollar = {${result_.toFixed(2)}} Egyptian Pound`;
    // console.log(typeof +input.value);
}

let div1 = document.getElementsByClassName("one")[0];
let div2 = document.getElementsByClassName("two")[0];

let div1Title = div1.title;
let div1Text = div1.textContent;

div1.title = div2.title;
div1.textContent = div2.textContent;

div2.title = div1Title;
div2.textContent = div1Text + " " + "2";

let images = document.images;

for(let i = 0; i < images.length; i++) {
    if(images[i].hasAttribute("alt")) {
        images[i].alt = "Old";
    }
    else {
        images[i].alt = "Elzero New";
    }
}

let number = document.getElementsByName("elements")[0];
let text = document.getElementsByName("texts")[0];
let type = document.getElementsByName("type")[0];
let create = document.getElementsByName("create")[0];



function createElements(repeat, text, type="div") {
    for(let i = 1; i <= repeat; i++) {
        let element = document.createElement(type);
        let text_ = document.createTextNode(text);
        element.appendChild(text_);
        element.className = "box";
        element.setAttribute("title", "Element");
        element.id = `id-${i}`;
        document.body.appendChild(element);
    }
}

create.onclick = function() {
    createElements(number.value, text.value, type.value);
}

let link = document.links[0];

link.onclick = function(event) {
    event.preventDefault();
    console.log("Clicked");
};

let username = document.querySelector("input[name='username']");
let password = document.querySelector("input[name='password']");

document.forms[0].onsubmit = function(event) {
    let userValid = false;
    if (username.value.length > 0 && username.value.length <= 10) {
        if (password.value.length > 0 && password.value.length <= 10) {
            userValid = true;
        }
    }
    if(!userValid) {
        console.log("Not Valid !!");
        event.preventDefault();
    }
};


let link = document.links[0];
let username = document.querySelector("input[name='username']");
let password = document.querySelector("input[name='password']");
let button = document.getElementById("btn-test");

window.onload = function() {
    username.focus();
};

password.onblur = function(){
    link.click();
};

button.onclick = function() {
    password.blur();
};

let test_p = document.getElementById("p-test");
let class_list = test_p.classList;
// console.log(test_p.classList);
// console.log(typeof test_p.classList);
console.log(class_list.contains("one"));
console.log(class_list.contains("four"));
console.log(class_list.item(0), class_list.item(1), class_list.item(2));
class_list.add("four");
class_list.remove("one");
class_list.toggle("five");
class_list.toggle("two");
console.log(class_list);
console.log(class_list.toString());


let test_p = document.getElementById("p-test");

test_p.style.color = "red";
test_p.style.fontSize = "20px";

test_p.style.cssText = "color:red; font-size:20px";

test_p.style.removeProperty("color");
test_p.style.setProperty("color", "blue");

console.log(document.styleSheets);
console.log(document.styleSheets[0].rules)

document.styleSheets[0].rules[0].style.removeProperty("color");

document.styleSheets[0].rules[0].style.setProperty("color", "red");

let test_p = document.getElementById("p-test");

let createdElement = document.createElement("h1");
createdElement.className = "header-1";
createdElement.appendChild(document.createTextNode("Hello From Js"));
// test_p.before("Hello World");
// test_p.after(createdElement);
test_p.append("Hello World");
test_p.prepend(createdElement);

test_p.remove();


let test_p = document.getElementById("p-test");

console.log(test_p.nextSibling);
console.log(test_p.previousSibling);
console.log(test_p.nextElementSibling);
console.log(test_p.previousElementSibling);
console.log(test_p.parentElement);


let test_p_cloned = document.getElementById("p-test").cloneNode(true);
test_p_cloned.id = "test-p-cloned";
console.log(test_p_cloned);
document.body.append(test_p_cloned);

let test_p = document.getElementById("p-test");
test_p.textContent = "clicked";

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

test_p.onclick = one;
test_p.onclick = two;

test_p.addEventListener("click", one);
test_p.addEventListener("click", two);


test_p.onclick = "one"; // No Error
test_p.addEventListener("click", "one"); // Error


test_p.onclick = function() {
    let cloned = test_p.cloneNode(true);
    cloned.setAttribute("id", "cloned");
    cloned.className = "cloned";
    cloned.textContent = "Click Cloned";
    test_p.after(cloned);
}

let cloned_p = document.getElementById("cloned");

// cloned_p.onclick = function() {
//     console.log("Cloned Clicked");
// }

document.addEventListener("click", function(event){
   if(event.target.className === "cloned") {
    console.log("Cloned Clicked");
   }
});

document.addEventListener("click", function(event){
    if(event.target.id === "p-test") {
        console.log("p test clicked");
    }
});


document.addEventListener("click", function(){
    console.log("clicked");
});

let links = document.links;
for(let i = 0; i < links.length; i++) {
    if(links[i].classList.contains("open") && links[i].textContent === "Elzero") {
        links[i].click();
    }
}

let myP = document.getElementsByTagName("p")[0];
let myDiv = document.getElementsByTagName("div")[0];
let beforeElement = document.createElement("div");
let afterElement = document.createElement("div");
beforeElement.textContent = "Start";
beforeElement.className = "start";
beforeElement.title = "Start Element";
beforeElement.setAttribute("data-value", "Start");
afterElement.appendChild(document.createTextNode("End"));
afterElement.className = "end";
afterElement.title = "End Element";
afterElement.setAttribute("data-value", "End");
myDiv.before(beforeElement);
myDiv.after(afterElement);
myP.remove();

let myDiv = document.getElementsByTagName("div")[0];

console.log(myDiv.lastChild);

console.log(document.links[0].tagName);

document.addEventListener("click", function(event) {
    console.log(`This Is ${event.target.tagName}`);
});


let lists = document.querySelectorAll("ul li");

lists.forEach(function(element) {
    element.onclick = function() {
        console.log("Hello World");
    }
});

for(let i = 0; i < lists.length; i++) {
    lists[i].onclick = function() {
        console.log(`ON: ${i + 1}`);
    };
}

let names = ["Ali", "Osama", "Faisal", "Abdulaziz", "Ahmed"];

names.forEach((name) => {
    console.log(`Name: ${name}`);
});
