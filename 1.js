console.log("Scripts connected");

let age;
age = 24;
age = 30;

const PI = 3.14159265;

var name = "Misha";

// 1 - логгирование через консоль
// console.log("JS Math: " + ("5" + 2).toString());

// 2 - алерт
// alert("JS Math: " + ("5" + 2).toString());

// 3 - хард-райт
// document.write("JS Math: " + ("5" + 2).toString());

// Поиск по id
let title = document.getElementById("title");
console.log(title.textContent);

// Поиск по классу
let text = document.getElementsByClassName("text").item(0);
console.log(text.textContent);

// Поиск по тэгу
let h1 = document.getElementsByTagName("h1").item(0);
console.log(h1.textContent);

let paragraphs = document.querySelectorAll(".text");

paragraphs.forEach(function (item) {
    console.log(item);
});

let img1 = document.getElementById("img_1");
// Получение атрибута
let img1Scr = img1.getAttribute("src");
console.log(img1Scr);
// Изменение атрибута
img1.setAttribute("alt", "error photo");
console.log(img1.hasAttribute("alt"));
// Удаление атрибута
// img1.removeAttribute("alt");

console.log(img1.alt);

let loginInput = document.getElementById("login_field");
loginInput.value = "Admin";

let mainBlock = document.getElementById("main_block");
console.log(mainBlock.innerHTML);
mainBlock.innerHTML = "<h2>HA_HA_HA</h2>"

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    mainBlock.children.item(0).textContent = "Ха-ха-ха";
    //alert("You're awesome!");
});

let div = document.createElement("div");
div.textContent = "HI!";
//mainBlock.append(div); // Добавили элемент в конец списка
//document.body.appendChild(div);
mainBlock.prepend(div);


let list = document.getElementById("list");

let template = document.getElementById("cardTemplate");
let clone = template.content.cloneNode(true);
// Что за true? Зачем оно?
// true говорит шаблону, что надо скопировать весь элемент и 
// вложенные элементы
// А false сказал бы, что надо скопировать только сам элемент
// без вложений

list.append(clone);


let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function (event) {
    console.log(event.target);
});

// Бегаем по дереву элементов
console.log(mainBlock.parentElement);
console.log(mainBlock.children);

let strVal = "bbaaAAAA ";

console.log(strVal.indexOf("A"));
console.log(strVal.includes("A"));
console.log(strVal.startsWith("bb"));


console.log(strVal.toUpperCase());
console.log(strVal.toLowerCase());
console.log(strVal.trim());
console.log(strVal.substring(4).trim());

let val1 = "5";
let val2 = 2;
let incorrectVal = val1 + val2;
let correctVal = Number(val1) + val2;

console.log(incorrectVal);
console.log(correctVal);

if (correctVal.toString() == "52") {
    console.log("Icorrect");
}

// let val = condition ? if_true : if_false

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

let arr = [1, 2, 3];

arr.push(10);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr[1]);

let sayHelloFunc = function () {
    console.log("Hello");
}

sayHelloFunc.apply();

let sum2 = (a, b) => a + b;

let sumVal = sum2(1, 4);

let sayHelloFuncToSmbd = function (name = "Alex") {
    console.log(name);
}
sayHelloFuncToSmbd.apply();

function sum(...numbers) {
    let result = 0;

    for (let numb of numbers) {
        result += numb;
    }

    return result;
}

let student = {
    name: "Misha",
    class: 10
};

console.log(student.class);
// delete student.class;
// console.log(student.class);

for (let key in student) {
    console.log(key);
    console.log(student[key]);
}

let a = { x: 1 };
let b = a;
b.x = 10;
console.log(b.x);
console.log(a.x);

console.log({} == {});

// Поверхностное копирование
// let copy = Object.assign({}, student);
// console.log(copy);

let copy = {...student};
console.log(copy);

// Глубокое копирование
let deepCopy = JSON.parse(JSON.stringify(student));
console.log(deepCopy);

/*
ПЕРЕМЕННЫЕ:

let: 
- имеет блочную зону видимости 
- позволяет изменять значение
- не позволяет поавторное объявление
- не нужна инициализация

var: (устаревшее)
- функциональная зона видимости
- позволяет изменять значение 
- есть повторное объявление
- не нужна инициализация

const:
- имеет блочную зону видимости
- не позволяет изменять значение
- не позволяет повторное объявление
- нужна инициализация
*/



/*
ТИПЫ ДАННЫХ:

1. Number
- возраст, цена, кол-во. Что-то счетное
let age = 25;
let price = 99.99;

2. String
- строковые значения
let name = "Misha";

3. Boolean
- правда/ложь
let isActive = true;

4. Null
- намеренное отсутсвие информации
let result = null;

5. Undefined
- переменная объявлена, но без присвоенного значения
let val;

6. Object
- сложные составные данные
let user = {
name: "Misa",
age: 24
}
*/

/*
ТИПЫ ВИДИМОСТИ ФУНКЦИЙ:
- глобальная
- локальная
- блочная
*/