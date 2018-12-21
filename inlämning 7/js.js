//Övning 7.

//Uppgift 1.
//Vad är syntaxen för en objektliteral?
var car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

//Uppgift 2.
//På vilka två sätt kan man skapa ett objekt? på det ovan det är bästa.


//Uppgift 3.
//Vilken av de två sätten bör man använda i vardagen? den första.

//Uppgift 4.
/*Skriv ett objekt med två egenskaper (varaiblar) och fyll dem med valfritt värde. */
var carFiat = {
  type: "FiatXL",
  model: "400",
};

//Uppgift 5.
/*Skriv ett objekt med en method som ni kallar på och som i sin tur skriver ut ”hejsan”. */

var hello = {
  välkomstText: "Hejsan"
};
console.log(hello.välkomstText);

var carFiatOne = {
  type: "FiatXL",
  model: "400",
};

console.log(carFiatOne.type);
console.log(carFiatOne.model);
console.log(carFiatOne);

//Uppgift 6.
/*Skriv ett objekt med en method som ni kallar på där ni skickar in ett argument som den methoden skriver ut. Exempelvis kan ni skicka in en sträng ”pelle” som skrivs ut med en alert eller console.log. */

var anotherObject = {
  name: "Fredrik",
  ålder: 34,
  efternamn: function(efternamn){
    alert(anotherObject.name + " " + efternamn);
  }
};

anotherObject.efternamn(prompt('skriv ditt efternamn'));

console.dir(anotherObject);
/*
var newObject = {
  name: prompt("Skriv in ditt namn"),
  efternamn: prompt("Skriv in ditt efternam")
};
newObject["ålder"] = prompt("Skriv din ålder");

alert(newObject.name);
console.log(newObject);
*/
//Uppgift 7.
/*använd bracket notation för att lägga in ”password1” ”password2” ”password3” med 1, 2 och 3 för respektive egenskap. Se powerpoint (s.13) för insperation. */

var password = {};
/*
password["password1"] = prompt("ange lösen");
password["password2"] = 2;
password["password3"] = 3;
//snyggare och vanligare
password.password4 = 4;

console.log(password);
*/

for (var i = 1; i <= 5; i++) {
  password['password' + i] = i;
}
console.log(password);

//Uppgift 8.
/*Skapa ett objekt med en method som heter ”init”. Objektet ska innehålla två variabel(egenskap) som heter ”speed” och ”height”. Den methoden anropar i sin tur en method som heter ”speed2” och ”height2”.  När speed2 anropas av init ska den plussa på speed med 2 och skriva ut resultatet. När height2 anropas av init ska den plussa på height med 1 och skriva ut resultatet. Anropa init 3 ggr.*/

var speedAndHeight = {
  speed: 5,
  height: 9,
  init: function() {
    this.speed2();
    this.height2();
  },
  speed2: function() {
    this.speed += 2;
    console.log(this.speed);
  },
  height2: function() {
    this.height += 1;
    console.log(this.height);
  }
};

speedAndHeight.init();
speedAndHeight.init();
speedAndHeight.init();

//Uppgift 9.
/*Skicka ett objekt till en funktion ni skapar och skriv ut en egenskap från objektet som ni tilldelat den.*/

var sendObject = {
  name: "Michele",
  efternam: "Byman"
};

function write(a){
  console.log(a.name);
  var keys = Object.keys(a)[0];
  console.log(keys);
}

write(sendObject);

//Uppgift 10.
/*Skapa ett objekt där ni sen lägger till 3 egenskaper med en sträng, en number och en boolean. Använd dot notation för att göra det. */

var dotNotation = {};
dotNotation.name = "Michele";
dotNotation.age = 34;
dotNotation.male = true;

console.log(dotNotation);

//Uppgift 11.
/*Skriv ett objekt där ni lägger till 3 egenskaper som föregående övning med nu med bracket notation.*/

var braketNotation = {};
braketNotation["name"] = "Michele";
braketNotation["age"] = 34;
braketNotation["male"] = true;

console.log(braketNotation);

//Uppgift 12.
/*Skriv en funktion som tar emot ett objekt som parameter och tilldelar tre variabel tre olika värden taget från objektet.  
*/


var animation = {
  hairColor: prompt("hårfärg"),
  peruk: "true",
  braids: false
};

function objectX(object) {
  var hair = object.hairColor || "hårlös";
  var peruk = object.peruk;
  var braids = object.braids;
  console.log("objectX",hair, peruk, braids);
}

objectX(animation);

//Uppgift 13.
//Använd objekt.keys och console.logga ut resultatet.
console.log(Object.keys(animation));

//Uppgift 14.
//Använd objekt.keys för att få ut längden av nycklarna i ett objekt ni skapar.
 console.log(Object.keys(animation).length);

//Uppgift 15.
/*Skapa en loop som lägger in en kortlek med 52 kort i ett objekt. Ta sen och dela ut kortleken mellan 4 spelare. Korten som delas ut ska vara slumpmässigt valda. Ta även bort korten från objektet medans dem delas ut (se delete property på nätet för insperation). */

var cards = ["Hjärter ess", "Hjärter 2","Hjärter 3","Hjärter 4", "Hjärter 5", "Hjärter 6", "Hjärter 7", "Hjärter 8", "Hjärter 9", "Hjärter 10", "Hjärter knekt", "Hjärter dam", "Hjärter Kung", "Ruter ess", "Ruter 2","Ruter 3","Ruter 4", "Ruter 5", "Ruter 6", "Ruter 7", "Ruter 8", "Ruter 9", "Ruter 10", "Ruter knekt", "Ruter dam", "Ruter Kung", "Klöver ess", "Klöver 2","Klöver 3","Klöver 4", "Klöver 5", "Klöver 6", "Klöver 7", "Klöver 8", "Klöver 9", "Klöver 10", "Klöver knekt", "Klöver dam", "Klöver Kung", "Spader ess", "Spader 2","Spader 3","Spader 4", "Spader 5", "Spader 6", "Spader 7", "Spader 8", "Spader 9", "Spader 10", "Spader knekt", "Spader dam", "Spader Kung"];

cards.sort(function() {
  return 0.5 - Math.random();
});

var kortlek = {};
var player1 = {};
var player2 = {};
var player3 = {};
var player4 = {};

for (var i = 0; i < 52; i++) {
  kortlek['cards' + (i + 1)] = cards[i];
}

var x = 1;
for (var i = 0; i < 13; i++) {
  player1['cards' + (i + 1)] = kortlek["cards" + x];
  delete kortlek["cards" + x];
  x++;
  player2['cards' + (i + 14)] = kortlek["cards" + x];
  delete kortlek["cards" + x];
  x++;
  player3['cards' + (i + 27)] = kortlek["cards" + x];
  delete kortlek["cards" + x];
  x++;
  player4['cards' + (i + 40)] = kortlek["cards" + x];
  delete kortlek["cards" + x];
  x++;
}
  console.log(player1, player2, player3,player4);

  console.log(kortlek);

//Uppgift 16.
// Skapa två objekt och testa lägg ihop med objekt.assign. Skriv sen ut resultatet i en console.log

var object4 = {...player1, ...player2, ...player3, ...player4};
console.log(object4);

console.log(Object.values(object4));

var object1 = {
  a: 1,
  b: 2,
  c: 3
};

var object2 = {
  d: 33,
  e: 55,
  f: 45
};

var object3 = Object.assign(object1, object2);

//Uppgift 17.
 // Skapa ett objekt med password och username. Använd sen Object.freeze() för att frysa det objektet så det inte går att ändra.

 var objectPasswordUsername = {
   username: "Michele",
   password: "Lösen"
 };

Object.freeze(objectPasswordUsername);

objectPasswordUsername.username = "kalle";

console.log(objectPasswordUsername);

//Uppgift 18.
// Gissa kortet svart eller rött! Gör ett spel där en spelare får välja en färg (röd eller svart). Sen tas ett kort från en kortlek (kortleken = en objektliteral) och jämför kortet som togs med gissningen från användaren om det var rött eller svart. Skriv ut vilket kort som dök upp och om användaren hade fel. Låt användaren sen gissa igen om denne vill. 


var cardsOne = ["Hjärter ess", "Hjärter 2", "Hjärter 3", "Hjärter 4", "Hjärter 5", "Hjärter 6", "Hjärter 7", "Hjärter 8", "Hjärter 9", "Hjärter 10", "Hjärter knekt", "Hjärter dam", "Hjärter Kung", "Ruter ess", "Ruter 2", "Ruter 3", "Ruter 4", "Ruter 5", "Ruter 6", "Ruter 7", "Ruter 8", "Ruter 9", "Ruter 10", "Ruter knekt", "Ruter dam", "Ruter Kung", "Klöver ess", "Klöver 2", "Klöver 3", "Klöver 4", "Klöver 5", "Klöver 6", "Klöver 7", "Klöver 8", "Klöver 9", "Klöver 10", "Klöver knekt", "Klöver dam", "Klöver Kung", "Spader ess", "Spader 2", "Spader 3", "Spader 4", "Spader 5", "Spader 6", "Spader 7", "Spader 8", "Spader 9", "Spader 10", "Spader knekt", "Spader dam", "Spader Kung"];

cardsOne.sort(function() {
  return 0.5 - Math.random();
});

var kortlekOne = {};


for (var i = 0; i < 52; i++) {
  kortlekOne['cards' + (i + 1)] = cardsOne[i];
}

var v = 1;
for (var i = 0; i < 52; i++) {

  var guess = prompt("Gissa färgen på kortet, rött eller svart, du har 50% att vinna!")

  if (guess == "rött" && kortlekOne["cards" + v].includes("Hjärter") || guess == "rött" && kortlekOne["cards" + v].includes("Ruter")) {

    var question = prompt("Grattis!, vill du spela igen? Ja eller Nej");

    if (question == "nej") {
      alert("Detta var det rätta kortet: " + kortlekOne["cards" + v]);
      break;
    }

  } else if (guess == "svart" && kortlekOne["cards" + v].includes("Spader") || guess == "svart" && kortlekOne["cards" + v].includes("Klöver")) {

    var questionTwo = prompt("Grattis!, vill du spela igen? Ja eller Nej");
    if (questionTwo == "nej") {
      alert("Detta var det rätta kortet: " + kortlekOne["cards" + v]);
      break;
    }
  } else {
    alert("fel, rätt kort var " + kortlekOne["cards" + v]);
    var question = prompt("Sorry!, vill du spela igen? Ja eller Nej");
  }
  if (question == "nej") {
    break;
  }
  delete kortlekOne["cards" + v];
  v++;
}

  console.log(kortlekOne);
