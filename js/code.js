const screen2 = document.querySelector(".screen");
const one = document.getElementById("item1");
const two = document.getElementById("item2");
const three = document.getElementById("item3");
const four = document.getElementById("item4");
const five = document.getElementById("item5");
const six = document.getElementById("item6");
const seven = document.getElementById("item7");
const eight = document.getElementById("item8");
const nine = document.getElementById("item9");
const zero = document.getElementById("item0");
const plus = document.getElementById("item+");
const minus = document.getElementById("item-");
const multi = document.getElementById("item*");
const divi = document.getElementById("item/");
const equals = document.getElementById("item=");
const ac = document.getElementById("itemAC");
const point = document.getElementById("item.");

let num1 = "";
let num2 = "";
let number1 = 0;
let number2 = 0;
let result = 0;
let suma = false;
let resta = false;
let mult = false;
let div = false;

one.addEventListener("click", () => {
  screen2.innerHTML += one.value;
  num1 += one.value;
  num2 += one.value;
});

two.addEventListener("click", () => {
  screen2.innerHTML += two.value;
  num1 += two.value;
  num2 += two.value;
});

three.addEventListener("click", () => {
  screen2.innerHTML += three.value;
  num1 += three.value;
  num2 += three.value;
});

four.addEventListener("click", () => {
  screen2.innerHTML += four.value;
  num1 += four.value;
  num2 += four.value;
});

five.addEventListener("click", () => {
  screen2.innerHTML += five.value;
  num1 += five.value;
  num2 += five.value;
});

six.addEventListener("click", () => {
  screen2.innerHTML += six.value;
  num1 += six.value;
  num2 += six.value;
});

seven.addEventListener("click", () => {
  screen2.innerHTML += seven.value;
  num1 += seven.value;
  num2 += seven.value;
});

eight.addEventListener("click", () => {
  screen2.innerHTML += eight.value;
  num1 += eight.value;
  num2 += eight.value;
});

nine.addEventListener("click", () => {
  screen2.innerHTML += nine.value;
  num1 += nine.value;
  num2 += nine.value;
});

zero.addEventListener("click", () => {
  screen2.innerHTML += zero.value;
  num1 += zero.value;
  num2 += zero.value;
});

point.addEventListener("click", () => {
  screen2.innerHTML += ".";
  num1 += ".";
  num2 += ".";
});

plus.addEventListener("click", ()=>{
  suma = true;
  screen2.innerHTML += "+";
  number1 = parseFloat(num1);
  num2 = "";
});

minus.addEventListener("click", () => {
  resta = true;
  screen2.innerHTML += "-";
  number1 = parseFloat(num1);
  num2 = "";
});
multi.addEventListener("click", () => {
  mult = true;
  screen2.innerHTML += "*";
  number1 = parseFloat(num1);
  num2 = "";
});
divi.addEventListener("click", () => {
  div = true;
  screen2.innerHTML += "/";
  number1 = parseFloat(num1);
  num2 = "";
});

ac.addEventListener("click", () => {
  number1 = 0;
  number2 = 0;
  num1 = "";
  num2 = "";
  result = 0;
  suma = false;
  resta = false;
  mult = false;
  div = false;
  screen2.innerHTML = "";
});
equals.addEventListener("click", () => {
  console.log(number1);
  number2 = parseFloat(num2);
  console.log(number2);
  console.log(result)
  if (suma && resta == false && mult == false && div == false) {
    result = number1 + number2;
    num1=result;
    suma = false;
  } else if (resta && suma == false && mult == false && div == false) {
    result = number1 - number2;
    num1=result;
    resta = false;
  }else if (mult && resta == false && resta == false && div == false) {
    result = number1 * number2;
    num1=result;
    mult = false;
  } else if (div && suma == false && resta == false && mult == false) {
    result = number1 / number2;
    num1=result;
    div = false;
  }
  console.log(result)
  screen2.innerHTML = result;
  result= 0;
});
