// COMMENTS

/* Comment type 1 - good for inner content*/

// Comment type 2  - good for one line

// VRIABLES

// Camel style

let name = prompt("Hello! What's your name? ");
alert ("Hello, " + name + ".");

// let birthYear = prompt ("What is your birth year, " + name + "?");
// const age = Date().getFullYear() - birthYear;
// alert ("You are " + age + "y.o.");

// тут нужно разобраться, как сделать чтобы функция брала в аргумент результат работы другой функции.


// Площадь прямоугольника
let squareSide = prompt ("What is the length of a square side?");
let squareArea = squareSide*squareSide;
alert ("So the area of th square is " + squareArea);

// Запитай у користувача радіус кола і виведи площу такої окружності.
let radius = prompt ("What is the circle radius in meters?");
alert ("So the circle area is " + (2 * Math.PI * radius * radius) + " sqaure meters");
/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/
let distance = prompt ("What is the distance between city A nad city B in kilometers?");
let time = prompt ("How many hours do you want to get there?");
alert ("So you need to drive " + ( distance / time ) + " km/hours to get there");

//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.99;
let usd = prompt ("Please, put number of USD to convert to EUR");
let eur = (usd * exchangeRate);
alert ( usd + "USD is " + eur + "EUR, with exchange rate of " + exchangeRate ); 
