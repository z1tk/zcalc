const previous = document.querySelector(".previous-operand"),
current = document.querySelector(".current-operand"),
one = document.getElementById("1"),
two = document.getElementById("2"),
three = document.getElementById("3"),
four = document.getElementById("4"),
five = document.getElementById("5"),
six = document.getElementById("6"),
seven = document.getElementById("7"),
eight = document.getElementById("8"),
nine = document.getElementById("9"),
zero = document.getElementById("0"),
decimal = document.getElementById("."),
clear = document.getElementById("clear-all"),
del = document.getElementById("delete"),
equals = document.getElementById("equals"),
divide = document.getElementById("divide"),
multiply = document.getElementById("multiply"),
subtract = document.getElementById("subtract"),
add = document.getElementById("add");

let cur = "";
let pre = "";
var on = '';

del.addEventListener('click', () => {
    let n = cur.slice(0, -1);
    cur = n;
    current.innerHTML = cur;
})

clear.addEventListener('click', () => {
    cur = "";
    pre = "";
    current.innerHTML = cur;
    previous.innerHTML = pre;
})

divide.addEventListener('click', () => {
    pre = cur;
    previous.innerHTML = pre;
    cur = "";
    current.innerHTML = cur;
    equals.addEventListener('click', d);
})

multiply.addEventListener('click', () => {
    pre = cur;
    previous.innerHTML = pre;
    cur = "";
    current.innerHTML = cur;
    equals.addEventListener('click', m);
})

subtract.addEventListener('click', () => {
    pre = cur;
    previous.innerHTML = pre;
    cur = "";
    current.innerHTML = cur;
    equals.addEventListener('click', s);
})

add.addEventListener('click', () => {
    pre = cur;
    previous.innerHTML = pre;
    cur = "";
    current.innerHTML = cur;
    equals.addEventListener('click', a);
})

one.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "1";
    current.innerHTML = cur;
})

two.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "2";
    current.innerHTML = cur;
})

three.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "3";
    current.innerHTML = cur;
})

four.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "4";
    current.innerHTML = cur;
})

five.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "5";
    current.innerHTML = cur;
})

six.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "6";
    current.innerHTML = cur;
})

seven.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "7";
    current.innerHTML = cur;
})

eight.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "8";
    current.innerHTML = cur;
})

nine.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "9";
    current.innerHTML = cur;
})

zero.addEventListener('click', () => {
    on = on + 1;
    cur = cur + "0";
    current.innerHTML = cur;
})

decimal.addEventListener('click', () => {
    on = on + 1;
    cur = cur + ".";
    current.innerHTML = cur;
})

function d() {
    let x = parseFloat(pre);
    let y = parseFloat(cur);
    let answer = x / y;
    pre = ""
    cur = answer;
    previous.innerHTML = pre;
    current.innerHTML = answer;
    equals.removeEventListener('click', d);
}

function a() {
    let x = parseFloat(pre);
    let y = parseFloat(cur);
    let answer = x + y;
    pre = ""
    cur = answer;
    previous.innerHTML = pre;
    current.innerHTML = answer;
    equals.removeEventListener('click', a);
}

function s() {
    let x = parseFloat(pre);
    let y = parseFloat(cur);
    let answer = x - y;
    pre = ""
    cur = answer;
    previous.innerHTML = pre;
    current.innerHTML = answer;
    equals.removeEventListener('click', s);
}

function m() {
    let x = parseFloat(pre);
    let y = parseFloat(cur);
    let answer = x * y;
    pre = ""
    cur = answer;
    previous.innerHTML = pre;
    current.innerHTML = answer;
    equals.removeEventListener('click', m);
}






