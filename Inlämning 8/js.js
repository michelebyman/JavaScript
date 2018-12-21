// Övning 8.

//Uppgift 1.
/*
Skriv en javascriptkod som skapar en p tag och lägger ut det i dokumentet med innerHTML. Använd lämplig html kod för att demonstrera funktionen.
*/
document.body.innerHTML += "<p>Jag är en P tag, upg1</p>";

//Uppgift 2.
/*
Skriv en javascriptkod som skapar en p tag och lägger ut det i dokumentet med insertbefore.
*/
var paragraf = document.createElement("p");
document.body.appendChild(paragraf);
paragraf.textContent = "Jag är en P tag som är skapad efter den första men hamnar först, upg2";
paragraf.setAttribute('class', 'pragraf');
document.body.insertBefore(paragraf, document.querySelector("p"));

//Uppgift 3.
/*
Skapa en div på er sida som ni lägger på eventLissener. Eventlissener ska anropa en funktion som skriver ut ”hejsan” i consolen. 
*/
var uppgift3 = document.createElement("div");
uppgift3.textContent = "klicka här!, upg3";
uppgift3.setAttribute("class", "uppgift3");
document.body.appendChild(uppgift3);
document.querySelector(".uppgift3").style.height = "100px";
document.querySelector(".uppgift3").style.width = "100px";
document.querySelector(".uppgift3").style.backgroundColor = "brown";
document.querySelector(".uppgift3").addEventListener("click",function() {
  console.log("hejsan");
});
//Uppgift 4.
/*
Skapa en bild på sidan, när användaren hovrar över bilden ska er eventlyssnare skriva ut ”vad duktig du är” på webplatsen. Eventlyssnaren ska vara en anonym funktion skriven i evenlyssnarens parameter.
*/
document.querySelector(".katt").addEventListener("mouseover",function() {
  var uppgift4 = document.createElement("p");
  uppgift4.setAttribute("class", "uppgift4");
  uppgift4.textContent = "vad duktig du är,upg4";
  document.body.appendChild(uppgift4);
});
//Uppgift 5.
/*
Använd clientX och clientY för att se koordinaterna för användarens mus. Skriv ut det på webbplatsen med textContent metoden.
*/

var uppgift4 = document.createElement("div");
uppgift4.setAttribute("class", "cordinations");
document.body.appendChild(uppgift4);
window.addEventListener("mousemove", showCordinations);

function showCordinations(event){
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector(".cordinations").textContent = "X cordination: " + x + " Y cordination: " + y;
}

//Uppgift 6.
/*
Ändra en färg på sidan med hjälp utav style.background-color.
*/
document.querySelector("body").style.backgroundColor = "teal";

//Uppgift 7.
/*
Consol logga ut resultatet du får av följande kod från valfritt element på din webbplats. var style = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle;
*/
var body = document.querySelector("body");
 var style = window.getComputedStyle ? getComputedStyle(body, null) : body.currentStyle;
console.log(style);

//Uppgift 8.
/*
Skapa en div med createElement. Lägg sen på en eventlyssnare som lyssnar efter klick och skriver ut ”click” på webbplatsen. Efter att ni gett diven eventlyssnaren, lägg ut den på sidan med lämplig html och css kod.
*/
//
window.addEventListener("click",function() {
  var uppgift8 = document.createElement("div");
  uppgift8.setAttribute("class", "uppgift8");
  document.body.appendChild(uppgift8);
  uppgift8.textContent = "click";
});
// Uppgift 9.
// Skapa tre div element som ändrar färg:
// Om användaren klickar (click) (varlfi färg)
// Om användaren hovrar (mouse enter) (varlfi annan färg)
// Om användaren tar bort musen från diven (mouse leave) (varlfi tredje färg)

var divOne = document.createElement("div");
 document.body.appendChild(divOne);
divOne.textContent = "Click on me";
divOne.setAttribute("class", "one");
document.querySelector(".one").style.height = "100px";
document.querySelector(".one").style.width = "100px";
document.querySelector(".one").style.backgroundColor = "blue";

document.querySelector(".one").addEventListener("click",function() {
  document.querySelector(".one").style.backgroundColor = "white";
});
document.querySelector(".one").addEventListener("mouseleave",function() {
  document.querySelector(".one").style.backgroundColor = "blue";
});


var divTwo = document.createElement('div');
document.body.appendChild(divTwo);
divTwo.textContent = "Hover over me";
divTwo.setAttribute('class', 'oneDiv');
document.querySelector('.oneDiv').style.width = "100px";
document.querySelector('.oneDiv').style.height = "100px";
document.querySelector('.oneDiv').style.backgroundColor = 'red';

document.querySelector(".oneDiv").addEventListener("mouseover",function() {
  document.querySelector(".oneDiv").style.backgroundColor = "purple";
});
document.querySelector(".oneDiv").addEventListener("mouseleave",function() {
  document.querySelector(".oneDiv").style.backgroundColor = "red";
});

var divThree = document.createElement('div');
document.body.appendChild(divThree);
divThree.textContent = "Leave me";
divThree.setAttribute('class', 'three');
document.querySelector('.three').style.width = "100px";
document.querySelector('.three').style.height = "100px";
document.querySelector('.three').style.backgroundColor = 'green';

document.querySelector(".three").addEventListener("mouseover",function() {
  document.querySelector(".three").style.backgroundColor = "green";
});
document.querySelector(".three").addEventListener("mouseleave",function() {
  document.querySelector(".three").style.backgroundColor = "maroon";
});

// Uppgift 10.
/*
Om användaren klickar på någon tangent på tangentborder ska ni skriva ut ”SLUTA”
Efter 2 sekunder tar ni bort ”SLUTA”.
*/
//Tar bort texten och alla p-taggar-
document.addEventListener("keypress",function() {
  var paragraf = document.createElement("p");
  paragraf.setAttribute("class", "four");
  paragraf.textContent = "Sluta";
  document.body.appendChild(paragraf);
 window.setTimeout(function(){
  paragraf.remove();
 }, 2000);
});
/*
//reloadar hela sidan...
document.addEventListener("keypress",function() {
  var divFour = document.createElement("p");
  divFour.setAttribute("class", "four");
  divFour.textContent = "Sluta";
  document.body.appendChild(divFour);
 window.setTimeout(function(){
  location.reload();
 }, 2000);
});
*/

// Uppgift 11.
/*
Skapa en div som ni lägger på en eventlyssnare. När användaren klickat på den divven 5 ggr tas eventlyssnaren bort (remove eventlissener).
*/


var divEleven = document.createElement("div");
document.body.appendChild(divEleven);
divEleven.textContent = "Click on me";
divEleven.setAttribute("class", "eleven");

document.querySelector(".eleven").style.height = "100px";
document.querySelector(".eleven").style.width = "100px";
document.querySelector(".eleven").style.backgroundColor = "grey";

var counter = 0;
 document.querySelector(".eleven").addEventListener("click",abc);
 function abc(){
   counter++;
   document.querySelector(".eleven").style.backgroundColor = "maroon";
   console.log(counter);
   if (counter == 5) {
     document.querySelector(".eleven").removeEventListener("click", abc);
 }}

// Uppgift 12.
/*
Gör ett program som skapar en ny div varje gång ni klickar med musen någonstans i clientens view / bodyn. Den diven tar ni bort efter 1 sekund.
*/
document.addEventListener("click",function() {
var divTwelve = document.createElement("div");
  divTwelve.setAttribute("class", "twelve");
  divTwelve.textContent = "jag är en div som snart försvinner";
  document.body.appendChild(divTwelve);
 window.setTimeout(function(){
  divTwelve.remove();
}, 1000);
});

// Uppgift 13.
/*
Kolla upp en valfri trigger (typ click, focus, dbclick eller annat) och gör ett exempel som demonstrerar dess funktionalitet. 
*/
var divThirteen = document.createElement("div");
divThirteen.setAttribute("class", "thirteen");
divThirteen.textContent = "Double click me!";
document.body.appendChild(divThirteen);

document.querySelector(".thirteen").addEventListener("dblclick",double);

function double() {
  document.querySelector(".thirteen").textContent = "I was double-clicked!";
}
// Uppgift 14.
/*
Svara på följande frågor:
Hur fungerar event bubbling i eventhantering? 
Handlar om vilken ordning eventen körs på, med event bubbling så körs endast det eventet som
Vad betyder Polyfill och hur kan man lösa browserhanteringen med hjälp av polyfill.io?
en kod som hjälper till för gamla webbläsare att få bättre funktionalitet.
*/
// Uppgift 15.
/*
Gör ett exempel där bubbling i eventhanteringen demonstreras och där ni avvaktiverar bubble med hjälp utav stopPropagation() metoden.
*/

var a = document.createElement("div");
var b = document.createElement("div");
var c = document.createElement("div");

document.body.appendChild(a);
a.appendChild(b);
b.appendChild(c);

a.setAttribute("class", "fifteen");
document.querySelector(".fifteen").style.height = "400px";
document.querySelector(".fifteen").style.width = "400px";
document.querySelector(".fifteen").style.backgroundColor = "yellow";
document.querySelector(".fifteen").addEventListener("click", bubble);
function bubble(){
  document.querySelector(".fifteen").style.backgroundColor = "grey";
  console.log("First");
}

b.setAttribute("class", "fifteenOne");
document.querySelector(".fifteenOne").style.height = "200px";
document.querySelector(".fifteenOne").style.width = "200px";
document.querySelector(".fifteenOne").style.backgroundColor = "red";
document.querySelector(".fifteenOne").addEventListener("click",bubbleOne);
function bubbleOne(event) {
  document.querySelector(".fifteenOne").style.backgroundColor = "maroon";
  event.stopPropagation();
  console.log("Second");
}

c.setAttribute("class", "a");
document.querySelector(".a").style.height = "100px";
document.querySelector(".a").style.width = "100px";
document.querySelector(".a").style.backgroundColor = "blue";
document.querySelector(".a").addEventListener("click",bubbleTwo);
function bubbleTwo() {
  document.querySelector(".a").style.backgroundColor = "green";
  console.log("Third");
}

//Ex 2
// Uppgift 15.
/*
Gör ett exempel som demonstrerar event capturing (motsatsen till event bubbling)
*/
var aOne = document.createElement("div");
var bTwo = document.createElement("div");
var cThree = document.createElement("div");

document.body.appendChild(aOne);
aOne.appendChild(bTwo);
bTwo.appendChild(cThree);


aOne.setAttribute("class", "abc");
document.querySelector(".abc").style.height = "400px";
document.querySelector(".abc").style.width = "400px";
document.querySelector(".abc").style.backgroundColor = "yellow";
document.querySelector(".abc").addEventListener("click", bubbleA, true);
//true reverse the order it is being done...
function bubbleA(){
  document.querySelector(".abc").style.backgroundColor = "grey";
  console.log("First");
}

bTwo.setAttribute("class", "def");
document.querySelector(".def").style.height = "200px";
document.querySelector(".def").style.width = "200px";
document.querySelector(".def").style.backgroundColor = "red";
document.querySelector(".def").addEventListener("click",bubbleOneA, true);
function bubbleOneA(event) {
  document.querySelector(".def").style.backgroundColor = "maroon";
  console.log("Second");
  event.stopPropagation();
  console.log(event.target);
  console.log(event.currentTarget);
}

cThree.setAttribute("class", "ab");
document.querySelector(".ab").style.height = "100px";
document.querySelector(".ab").style.width = "100px";
document.querySelector(".ab").style.backgroundColor = "blue";
document.querySelector(".ab").addEventListener("click",bubbleTwoA, true);
function bubbleTwoA() {
  document.querySelector(".ab").style.backgroundColor = "green";
  console.log("Third");
}

// Uppgift 17.
/*
Skapa ett exempel som demonstrerar skillnaden mellan event.currentTarget vs event.target 
*/


var aOneAb = document.createElement("div");
var bTwoAb = document.createElement("div");


document.body.appendChild(aOneAb);
aOneAb.appendChild(bTwoAb);



aOneAb.setAttribute("class", "abcAb");
document.querySelector(".abcAb").style.height = "400px";
document.querySelector(".abcAb").style.width = "400px";
document.querySelector(".abcAb").style.backgroundColor = "grey";
document.querySelector(".abcAb").addEventListener("click", bubbleAab);

function bubbleAab(event){
  document.querySelector(".abcAb").style.backgroundColor = "grey";
  console.log("First");
  console.log(event.target);
  console.log(event.currentTarget);
}

bTwoAb.setAttribute("class", "defAb");
document.querySelector(".defAb").style.height = "200px";
document.querySelector(".defAb").style.width = "200px";
document.querySelector(".defAb").style.backgroundColor = "black";
document.querySelector(".defAb").addEventListener("click",bubbleOneAab);
function bubbleOneAab(event) {
  document.querySelector(".defAb").style.backgroundColor = "maroon";
  console.log("Second");
}
