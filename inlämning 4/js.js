//övning 4

//Uppgift 1.
var lista = ["green", "red", "blue", "yellow", "purple"];
console.log(lista);

//Uppgift 2.
var siffror = [1, 2, 3];
console.log(siffror[0]);

//Uppgift 3.
var randomNumbers = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

console.log(randomNumbers[4], randomNumbers);

//Uppgift 4.
var employer = ["maria", "kalle", "åsa", "anka", "göran"];
var employer1 = ["mia", "nalle", "siv", "anna", "gösta"];
var newCompany = employer.concat(employer1);
console.log(newCompany);


//Uppgift 5.
var animals = ["ko", "apa", "katt", "anka", "gås", "hund", "orm", "fågel", "fisk", "gris",];
alert("en lista med djur " + animals);

var animalDelete = prompt("Välj ett djur du vill tabort och skriv in det nedan " + animals);

var numberOfAnimal = (animals.indexOf(animalDelete));

var animalAdd = prompt("skriv in ett djur du vill lägga till i listan?");

animals.splice(numberOfAnimal, 1, animalAdd);

console.log(animals);


//Uppgift 6.
var animalsTwo = ["ko", "apa", "katt", "anka", "gås", "hund", "orm", "fågel", "fisk", "gris",];

var randomItem = animalsTwo[Math.floor(Math.random()*animalsTwo.length)];
console.log(randomItem);

while (true) {
  var guessed = prompt("Gissa på ett djur ur listan " + animalsTwo);

  if (guessed == randomItem) {
    alert("stort grattis du gissade rätt!");
    break;
  } else {
    alert("försök igen!");
  }
}

//Uppgift 7.
var text = ['t', 't', 'ä', 'l', ' ', 'r', 'a', 'v', ' ', 'a', 't', 't', 'e', 'D'];
text.reverse();
console.log(text);
console.log(text.toString());

//Uppgift 8.
var shoppingList = prompt("skriv in fem saker du vill handla? ").split(",");
alert("nu går du och handlar, här är din shoppinglista med: " + shoppingList);
console.log(shoppingList);
var newItems = [];


for (var i = 0; i < 5; i++) {
  var itemDelete = prompt("Checka av vad du har handlat och ta bort det ur listan ");
  console.log(itemDelete);
  var numberOfItem = shoppingList.indexOf(itemDelete);
  if (numberOfItem >= 0) {
      shoppingList.splice(numberOfItem, 1);
  }
  if (numberOfItem < 0 && itemDelete !== "") {
    newItems.push(itemDelete);
  }
}
  alert("Du glömde handla det här: " + shoppingList + " och du köpte det här som ej stod på listan: " + newItems );
//Uppgift 9.

var cars = ["volvo", "bmw", "saab", "lexus", "porsche",];


for (var i = 1; i < cars.length;) {
  cars.sort(function() {
    return 0.5 - Math.random();
  });
  console.log(cars);
  cars.pop();
}
console.log(cars);
console.log(cars + " är vinnare");


//Uppgift 10.
/*Vad är en spread operator för arrayer i javascript och hur kan man använda det?
Spread skrivs ut med ...dinArray det som händer är att den sparar Arrayens värde, vilker gör att du spar tid, ex:
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
samma som
console.log(sum(numers[0], numbers[1], numbers[2]));
// expected output: 6*/


//Uppgift 11.
var yourArray = [1,2,3,4,5,123,4,5,3,4,5,6,7,3,4,5,6,7];
/*Skriv ut längden med length metoden på följande array:  Om du byter ut några nummer i arrayen med några strings, blir längden samma? JA*/

console.log(yourArray.length);
yourArray.splice(2,1,"kalle");
console.log(yourArray);



//Uppgift 12.

let any = prompt("skriv in fem nummer som du vill sortera i storleksordning med det största först ").split(",");

console.log("any NUMBER TEST: ", any);
//for in loop som gör om strings to numbers
for (var i = 0; i < any.length; i++) {
  any[i] = Number(any[i]);
}
console.log(any);


//samma fast med for loop
/*
for(var i in any){
 any[i] = any[i] - 0;
}
*/
//ströst först
console.log(any);

function sortHigh() {
    any.sort(function(a, b){return b-a});
  console.log(any);
}
sortHigh();


//minst först
let anyNumber = [400, 100, 19, 5, 25.7, 10.987];
console.log(anyNumber);

function sortLow() {
    anyNumber.sort(function(a, b){return a-b});
    console.log(anyNumber);
}
sortLow();

//Uppgift 13.
var yourSallery = Number(prompt("Skriv in din lön"));

let sallery = [18000, 22000, 25000, 28000, 30000];

console.log(sallery);

function median(a,b,c,d,e) {
  return (a + b + c + d + e) / 5;
}

var medel = median(...sallery);

var summanLon = medel - yourSallery;
var summanLon2 = yourSallery - medel;
console.log(summanLon);

if (yourSallery > medel ) {
  alert("du tjänar mer än de övriga, jippi, du tjänar: " + summanLon2 + "kr mer än medel" );
} else if (yourSallery == medel) {
  alert("din lön är samma som medellönen");
} else {
  alert("du tjänar mindre än de övriga, sorry, du tjänar: " + summanLon + "kr mindre än de");
}


//Uppgift 14.

var gamer = ["xbox", "playstation", "nintendo wii"];

var fruit = ["äpple", "banan", "citron"];

var car = ["volvo", "saab"];

var questionOne = prompt("vad är en console?");
console.log(questionOne);
var questionTwo = prompt("vad är en frukt ?");
console.log(questionTwo);
var questionThree = prompt("skriv en svensk bil ?");
console.log(questionThree);

var answerOne = gamer.indexOf(questionOne);
var answerTwo = fruit.indexOf(questionTwo);
var answerThree = car.indexOf(questionThree);

console.log(answerOne, answerTwo, answerThree);

var poang = 0;
if (answerOne >= 0) {
  console.log("rätt");
  poang++;
}
if (answerTwo >= 0) {
  console.log("rätt");
  poang++;
}
if (answerThree >= 0) {
  console.log("rätt");
  poang++;
}

alert("Du fick totalt: " + poang + " rätt");


//Uppgift 15.
var pay = Number(prompt("Det här kostar totalt antal kr?"));

var cashIn = Number(prompt("Totalt vad du ska betala, skriv in hur mkt pengar du betalar med"));

var cashStore = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

var cashReturn = Math.round(cashIn - pay);

var changeBack = [];

for (var i = 0; i < cashStore.length; i++) {
  while (cashReturn >= cashStore[i]) {
    cashReturn -= cashStore[i];
    changeBack.push(cashStore[i]);
  }
}


/* används för att gå igenom en array, från 0 & uppåt*/
for (var item in changeBack) {
  console.log(changeBack[item]);
}
/* används om man vill börja på en annan position i arrayen eller gå nedåt */
/*
for (var i = 0; i < changeBack.length; i++) {
  console.log(changeBack[i]);
}
*/
