//Övninga 5.

//Uppgift 1.
function myFunction() {

}

//Uppgift 2.
var myFunction = function () {

}

//Uppgift 3.
(function(){
  alert("hej");
}());

//Uppgift 4.
var myFunctionTwo = function(){
  alert("hej");
};

//Uppgift 5.
(function() {
  console.log("asd");
})();

//Uppgift 6.
(function(){
  alert("När jag blir stor vill jag köra en självkörande bil");
}());

//Uppgift 7.
function namnFunction() {
  console.log("7. Jag är en namngiven funktion");
}
namnFunction();

//Uppgift 8.
// 1 kallas parametrar, 2 kallas argument

//Uppgift 9.
function call(a,b) {
  console.log(a + b);
}
call("Detta är uppgift 9. hej", "då" );

//Uppgift 10.
(function sum(a,b){
  console.log(a+b);
}(1,2));

//Uppgift 11.

function getRandom(min, max) {
return Math.random() * ((max - 1) - (min +1)) + (min+1);
}
getRandom(1,10);
console.log(Math.round(getRandom(1,10)));

//Uppgift 12.

function getRandomTwo(min, max) {
return Math.random() * ((max - 1) - (min +1)) + (min+1);
}

var fourNumbers = prompt("Ange fyra nummer, datorn kommer då ge dig ett slumpat tal mellan de två första och sedan ett slumpat nummer mellan de två sista, skriv nummerna separerat med ',' ").split(",");

for (var i = 0; i < fourNumbers.length; i++) {
  fourNumbers[i] = Number(fourNumbers[i]);
}

var randomItem = fourNumbers[Math.floor(Math.random()*fourNumbers.length)];

var indexOfNumber = fourNumbers.indexOf(randomItem);

if (indexOfNumber === 0 || indexOfNumber === 1) {
  console.log(Math.round(getRandomTwo(fourNumbers[0],fourNumbers[1])));
} else if (indexOfNumber === 2 || indexOfNumber === 3) {
  console.log(Math.round(getRandomTwo(fourNumbers[2],fourNumbers[3])));
} else {
  console.log("Du får endast använda siffror!");
}

//Samma som ovan fast lite mindre kod!
/*
function anotherMinMaxFunction(a, b, c, d) {
  var number = Math.round(Math.random()) * 1;
  if (number) {
    var i = Math.floor(Math.random() * ((b - 1) - (a + 1)) + (a + 1));
    console.log(i);
  } else {
    var nextI = Math.floor(Math.random() * ((d - 1) - (c + 1)) + (c + 1));
    console.log(nextI);
  }

}
anotherMinMaxFunction(1, 3, 4, 6);

*/
//Uppgift 13.

evenOrNot(prompt("Skriv in ditt tal och jämför om det är jämt eller ojämt"));

function evenOrNot(number) {
  var compare = number % 2;
  if (compare === 1) {
    alert("Ditt tal är ojämt");
  } else if (compare === 0) {
    alert("Ditt tal är jämt");
  } else {
    alert("Skriv in med siffror tack!");
  }
}

//Uppgift 14.

var name = prompt("Ange ditt namn");
var extraName = ["von bollibongbong den tredje!", "von bollibongbong den fjärde!", "von bollibongbong den 999!"];

function nameTwo() {
  var newName = name + " " + extraName[Math.floor(Math.random() * extraName.length)];
  alert(newName);
}
nameTwo();

//Uppgift 15.
/*
Om du skriver en namngiven funktion. Vad händer om du kallar på den innan funktionen har blivit deklarerad?  blir det.  Om du kallar på följande funktioner och console loggar ut resultatet, vad händer? Och varför? 
*/
/*nedan om man kallar på den skriver den ut svaret av funktionen så länge du skickar med ett argument, varför? för det är en namngiven funktion, den hoistar*/

console.log(c(3));
function c(b){
	return b + 1;
} 

/* nedan om man kallar på den skriver den ut undefined, här deklarerar den variablen först därför det blir undefined */

console.log(a);
var a = function(b){
    return b + 1;
}

//Uppgift 16.

(function question() {
  var questions = [
    "Nu ska du få en fråga med två alternativ på, frågan är vad heter du Kalle eller Pelle?",
    "Nu ska du få en fråga med två alternativ på, frågan är vad heter din moster Anna eller Helena?"
  ];

  var answersArray = ["Kalle", "Anna"];

  var questionIndexNumber = Math.floor(Math.random() * questions.length);

  var randomQuestion = questions[questionIndexNumber];

  var answer = prompt(randomQuestion);


  if (answer == answersArray[questionIndexNumber]) {
    alert("rätt svar!, du vann en miljon :) ");
  } else {
    alert("fel svar, sorry! Bättre lycka nästa gång!");
  }
}());

//Uppgift 17.

var cards = ["Hjärter ess", "Hjärter 2","Hjärter 3","Hjärter 4", "Hjärter 5", "Hjärter 6", "Hjärter 7", "Hjärter 8", "Hjärter 9", "Hjärter 10", "Hjärter knekt", "Hjärter dam", "Hjärter Kung", "Ruter ess", "Ruter 2","Ruter 3","Ruter 4", "Ruter 5", "Ruter 6", "Ruter 7", "Ruter 8", "Ruter 9", "Ruter 10", "Ruter knekt", "Ruter dam", "Ruter Kung", "Klöver ess", "Klöver 2","Klöver 3","Klöver 4", "Klöver 5", "Klöver 6", "Klöver 7", "Klöver 8", "Klöver 9", "Klöver 10", "Klöver knekt", "Klöver dam", "Klöver Kung", "Spader ess", "Spader 2","Spader 3","Spader 4", "Spader 5", "Spader 6", "Spader 7", "Spader 8", "Spader 9", "Spader 10", "Spader knekt", "Spader dam", "Spader Kung"];

console.log(cards);
cards.sort(function() {
  return 0.5 - Math.random();
});

cards.slice(0).forEach(function() {
  console.log(cards);
  alert(cards[0]);
  cards.splice(0, 1);
});

console.log(cards);

//Uppgift 18.

var draken = 10;
var player = 10;

while (true) {
  var attackOrNOt = Number(prompt("Du har stött på en drake, om du skriver 2, så gömmer vi oss, om du skriver 1 så attackerar vi "));
  // ger ett nummer 1 eller 2.
  var randomDefence = ["block", "kill"]; //block är även ej hittad.
  //block har index=0, noblock = 1.
  var randomDefenceIndexPlayer = Math.floor(Math.random() * randomDefence.length);
  /*a blir 1(attack) eller 2(gömmer sig). b blir 0(block) eller 1(kill).*/

  /*numberA blir 1(attack) eller 2(gömmer sig). numberB blir 0(block) eller 1(kill).*/

  function playerAttack(numberA, numberB) {
    if (numberA == 1 && numberB == 1) {
      alert("Attack, du tog ett liv från draken");
      draken--;
      console.log("du har: " + player + " liv och draken har: " + draken + " liv ");
    } else if (numberA == 1 && numberB == 0) {
      alert("Draken blockade precis och du tog inget liv från draken");
    } else {
      alert("Du gömmer dig din fegis");
    }
  }
  playerAttack(attackOrNOt, randomDefenceIndexDrake);

  alert("Drakens chans att attckera!");
  var randomDefenceIndexDrake = Math.floor(Math.random() * randomDefence.length);
  // ger ett nummer 0 eller 1.

  function drakeAttack(a, b) {
    if (a == 1 && b == 1) {
      alert("Attack från drake du förlorade precis ett poäng");
      player--;
      console.log("du har: " + player + " liv och draken har: " + draken + " liv ");
    } else if (a == 2 && b == 0) {
      alert("Draken tog precis två liv från sig själv, för den halckade och hittade ej dig");
      draken -= 2;
      console.log("du har: " + player + " liv och draken har: " + draken + " liv ");
    } else if (a == 2 && b == 1) {
      alert("Draken hittade dig och tog precis två liv från dig");
      player -= 2;
    } else {
      alert("Draken träffade ej dig för du blockade");
    }
  }
  drakeAttack(attackOrNOt, randomDefenceIndexPlayer);
  console.log("du har: " + player + " liv och draken har: " + draken + " liv ");

  if (player <= 0) {
    alert("Draken vann, grattis");
    break;
  } else if (draken <= 0) {
    alert("Draken förlorade, grattis!");
    break;
  }
}
