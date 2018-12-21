//övning 2

// Uppgift 1.
var antalKort = 52;
var extraKort =  3;
console.log("denna kortlek innehåller " + antalKort + " kort & " + extraKort + " extra jokrar");

/* Uppgift 2.
datatyper i Javascript:
strings
boolean
numbers
null
undefind
symbol
*/

// Uppgift 3.

var a = 200;
var b = 33443;
var c = 9834;
var d = 35;
console.log(a+b+c+d + "kr");


// Uppgift 4.
var age = 34;
var year = 2050;
console.log((year-2018+age));

// Uppgift 5.

function fToC(F){
  return C = (5/9) * (F - 32);
}

var c = fToC(prompt("skriv in farenhiet och se vad det blir i celcius"));

console.log(c);
/*
console.log('konvertering: ' +  cToF(c) + 'F', 'blir: ' + c + 'C');
*/
function cToF(c){
  return f = (c * 1.8)+32;
}

var f = cToF(prompt("skriv in celcius och se vad det blir i farenhiet"));

console.log('konvertering: ' +  fToC(f) + 'C', 'blir: ' + f + 'F');

// Uppgift 6.
var ett = "1";
var tva = "1"
var sum = (ett + tva)
console.log(sum);


// Uppgift 7.
function omkrets(d){
  return o = d * Math.PI;
}

var a = prompt("skriv in diametern på cirkeln du vill veta omkretsen på");

console.log(omkrets(a));
