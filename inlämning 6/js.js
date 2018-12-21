//Övning 6.

//Uppgift 1.
//Skriv syntax för en for loop och ge ett exempel hur den kan användas
var arrayOne = [1, 2, 3, 4, 5];

for (var i = 0; i < arrayOne.length; i++) {
  console.log("Den här loopen körs tills den gått igenom arrayen, dvs 5ggr");
}

//Uppgift 2.


//Skriv syntaxen för en for in loop och ge ett exempel hur den kan användas
//den kan användas om man vill skriva ut en hel array, index.
for (var variable in arrayOne) {
  console.log(variable);
}

//Uppgift 3.
//Skriv syntaxen för en while loop och ge ett exempel hur den kan användas

//While loop används så länge ett påstående är sant.
let z = 1;
while (z < 3) {
  console.log(" The number is " + z);
  z++;
}

//Uppgift 4.
//Skriv syntaxen för en do while loop och ge ett exempel hur den kan användas
/*The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.*/
let x = 1;
do {
  console.log("The number is " + x);
  x++;
}
while (x < 3);

//Uppgift 5.
/*
Skapa en while loop som är inställd på att köra 1000 varv. Men det ska finnas 1% chans att whileloopen avbryts innan den avslutats. Exempelvis kan ni göra detta med en randomfunktion och break i loopen.
*/
/*
var qwerty = 1;
var randomNumber = Math.floor((Math.random() * 100000) + 1);

while (qwerty < 1001) {
console.log(qwerty);
qwerty++;
if (qwerty == randomNumber) {
break;
}
}
*/
//Uppgift 6.
/*Skapa en for loop som skriver ut varje element i en array med 10 valfria värden. */
var arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arrayTwo.length; i++) {
  console.log(arrayTwo[i]);
}

//Uppgift 7.
/*Skapa en loop som summerar alla värden i en array. Arrayen innehåller 10 valfria värden.*/
var result = 0;
for (var i = 0; i < arrayTwo.length; i++) {
  result += arrayTwo[i];
}
console.log('%c Nice! ' + result, 'background: pink; color: green; font-size:34px;');

//Uppgift 8.
//Ni har fått en array med förnamn och efternamn:
var arr = ['Nils', 'person', 'Jan', 'Svensson', 'Karl', 'Karlsson', 'Per', 'Pettersson', 'Sam', 'Nodesson', 'Tim', 'berners-lee'];
/*Kan ni plocka ut efternamnen och lägga dem i en array?

(Gör det med en loop)*/

var newArr = [];

for (var i = 1; i < arr.length; i += 2) {
  newArr.push(arr[i]);
}
console.log(newArr);
//lösning om man vill ta bort namnen, från den första listan.

/*
Kan ni plocka ut efternamnen och lägga dem i en array?

(Gör det med en loop)
*/
/*
var newArr = [];

for (var i = 1; i < arr.length; i+=2) {
newArr.push(arr[i]);
arr.splice(i, 1);
i--;
}
console.log(arr);
console.log(newArr);
*/
//Uppgift 9.
var stars = ["*", "**", "***", "****", "*****"];

for (var i = 0; i < stars.length; i++) {
  console.log(stars[i]);
}


console.log(stars[4]);
console.log("  " + stars[2]);
console.log("    " + stars[0]);

/*
var newStar = new Array(5).fill(null);
for (var i = 0; i < newStar.length; i++) {
  var popStar = stars.pop([i]);
  console.log(popStar);
}
*/
//Uppgift 10.
/*Skriv en for loop som itererar från 0 till 10. För varje varv multiplicerar den talet med 5 (ex. 0*5, 1*5, 2*5, 3*5…)*/
var numberOne = 0;
for (var i = 0; i <= 10; i++) {
  var numberTot = numberOne * 5;
  numberOne++;
  console.log(numberTot);
}

//Uppgift 11.
var nameOne = ['Nisse', 'Inger', ' ', 'Andreas', 'Ricky', ' ', 'Greger', 'Robin', 'Yngva', 'Mohsen', 'Martin', 'Adrian'];

//Loopa igenom dem och skriv ut första bokstaven från varje index'.

for (var i = 0; i < nameOne.length; i++) {
  console.log(nameOne[i].charAt(0));
}

//Uppgift 12.
var randomFive = [1, 2, 3, 4, 5];

for (var i in randomFive) {
  console.log("skriver ut det här x antal ggr beroende på arrayens längd");
}

//Uppgift 13.
/*Rysk rulett. Skapa ett en variant av rysk rulett. Spelet går ut på att två personer möter varandra. Dem laddar en pistol med 1 skott av 6 möjliga (mjuka gummikulor). Varje runda får en av personerna skjuta ett skott och se om det var blankt eller om personen sköt sig själv. Den person som inte blev skjuten är vinnaren.

Ni måste använda en loop för att lösa uppgiften. */

// en random kula i hylsan...
var deathBullet = Math.floor((Math.random() * 6));

var bulletArray = new Array(5).fill(null);

bulletArray.splice(deathBullet, 0, "kula");
console.log(bulletArray);

while (true) {

  console.log("Player one");
  var kill = bulletArray.pop();
  console.log(bulletArray);

  if (kill == "kula") {
    console.log("Death");
    break;
  }

  console.log("Player two");
  var kill = bulletArray.pop();
  console.log(bulletArray);

  if (kill == "kula") {
    console.log("Death");
    break;
  }
}
/*
//här är det random varje gång det byts spelare.
while (deathBullet != 1) {
var deathBullet = Math.floor((Math.random() * 6) + 1);
console.log("player one");
if (deathBullet == 1) {
  console.log("you died");
  break;
}
var deathBullet = Math.floor((Math.random() * 6) + 1);
console.log("player two");
if (deathBullet == 1) {
  console.log("you died");
  break;
}
}
*/
//Uppgift 14.
/*
Ett företag har bett er att skapa en funktion för att sortera hattar efter antal. Den ena hatten har färgen grön, den andre röd och resten blå. Dem ligger just nu huller om buller i följande array ['bluehat', 'greenhat', 'redhat', 'bluehat', 'bluehat']. Företaget vill att ni gör en funktion som sorterar hattarna och lägger dem i varsin array beroende på färg, och att det görs i en funktion som kan användas även om hattarna skulle bli fler.

1. arrayHats = ['bluehat', 'greenhat', 'redhat', 'bluehat', 'bluehat'];
2. Skicka arrayHats till en funktion som sorterar dem efter färg och lägger dem I varsin ny array. 3. Skriv ut resultatet:
rrayGreenHats = ['greenhat'];
ArrayBlueHat = ['bluehat', 'bluehat', 'bluehat'];
ArrayRedHat = ['redhat'];*/



var hats = ['bluehat', 'greenhat', 'redhat', 'bluehat', 'bluehat'];
hats.push(prompt("skriv in hatten du vill lägga till, antingen redhat, greenhat, bluehat "));
console.log(hats);
var arrayBlueHat = [];
var arrayRedHat = [];
var arrayGreenHat = [];


var i = 0;
(function hatsSort() {
  while (i < hats.length) {
    var hatRandom = hats.pop();
    switch (hatRandom) {
      case "bluehat":
        arrayBlueHat.push(hatRandom);
        break;
      case "redhat":
        arrayRedHat.push(hatRandom);
        break;
      case "greenhat":
        arrayGreenHat.push(hatRandom);
        break;
    }
  }
})();

console.log(arrayRedHat);
console.log(arrayGreenHat);
console.log(arrayBlueHat);
console.log(hats);
