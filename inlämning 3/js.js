//Övning 3.

//uppgift 1.
var a = prompt("skriv in ett siffra, det ska jämföras med ett annat");
var b = 20;

if (a === b) {
  console.log("siffrorna är detsamma, grattis!");
}
else {
  console.log("oh nej...siffrorna är olika");
}

//uppgift 2.
var a = prompt("skriv in ett siffra, det ska jämföras med ett annat");
var b = 20;

if (a !== b) {
  console.log("siffrorna är inte detsamma");
}
else {
  console.log("siffrorna är detsamma");
}

//uppgift 3.
var language = prompt("type your language please? ");
if (language === "eng") {
  console.log("Welcome!");
}
else if (language === "fr") {
  console.log("Aur of var!");
}
else if (language === "ty") {
  console.log("Wilcommen!");
}
else if (language === "thai") {
  console.log("Saeadee caaap!");
}
else if (language === "ca") {
  console.log("Welcome!");
}
else {
  console.log("Denna person verkar kunna ett språk vi inte behärskar");
}

//uppgift 4.
var pers1 = 10; //IG >15
var pers2 = 20; //G
var pers3 = 30; //G >=39
var pers4 = 40; //VG <39
var pers5 = 50; //VG
var iG = 15;
var g = 39;
// var vG = 40;

function betyg(){
  var name = prompt("skriv ditt namn");
  var score = prompt("skriv ditt poäng");

  if (score < iG) {
    console.log(name + " har IG")
  } else if (score < g) {
    console.log(name + " har G");
  } else {
    console.log(name + " har VG")
  }
}
betyg();

//uppgift 5.
function robot(){
  var leftLeg = prompt("skriv in antingen: nere, böjt, highkick");
  var rightLeg = prompt("skriv in antingen: nere, böjt, highkick");
  var body = prompt("skriv in antingen: ligga, sitta, står");

  if (body === "står") {
    if (leftLeg === "böjt") {
      if (rightLeg === "highkick") {
        console.log("Roboten sitter ner, har vänster ben böjt och höger ben laddar för en highkick och är samtidigt påväg att göra en piroett")
      }else {
        console.log("roboten " + body + " har sitt vänster ben " + leftLeg + " laddar med sitt högra " + rightLeg);
      }
    }else {
      console.log("roboten " + body + " har sitt vänster ben " + leftLeg + " laddar med sitt högra " + rightLeg);
    }
  }else {
    console.log("roboten " + body + " har sitt vänster ben " + leftLeg + " laddar med sitt högra " + rightLeg);
  }
}
robot();

//uppgift 6.
var leftLeg = "highkick";
var rightLeg = "böjt";
var body = "står";

if (body === "står" && leftLeg === "böjt" && rightLeg === "highkick" ) {
      console.log("Roboten sitter ner, har vänster ben böjt och höger ben laddar för en highkick och är samtidigt påväg att göra en piroett")
}else {
  console.log("roboten " + body + " har sitt vänster ben " + leftLeg + " och laddar upp för ngt riktigt speciellt " + rightLeg);
}

//uppgift 7.
var correct = false;
while(!correct){
  var password = prompt("skriv ditt lösenord")
  var confirmPassword = prompt("verifiera ditt lösenord")

  if (password === confirmPassword) {
    alert("bra du passerade!")
    correct = true;
  }
  else {
    alert("gör om gör rätt")
  }
}

//extra,enklare skrivsätt.
while (true) {
  var password = prompt("skriv ditt lösenord")
  var confirmPassword = prompt("verifiera ditt lösenord")

  if (password === confirmPassword) {
    alert("bra du passerade!")
    break;
  }
  else {
    alert("gör om gör rätt")
  }
}

//uppgift 8.
//Math.random slupmar ett nummer mellan 0 och 1

var nummer = prompt("skriv in ett nummer, detta kommer ge dig ett tal som multipliceras med ett slumpat tal mellan 0 och 1 sedan avrundarn datorn den och ger tillbaka ett tal med två decimaler");

function mathRandom(nu){
 return (Math.random() *  nu).toFixed(2);
}

console.log(mathRandom(nummer));

//uppgift 9.
var tal = Math.random();

if (tal < 0.5) {
  console.log(tal);
} else if (tal >= 0.5 && tal < 0.8) {
  console.log("hemligt");
}

//uppgift 10.
var wallet = prompt("how much do you have in your wallet");
var catFood = 65.99;

if (wallet < catFood) {
  console.log("måste hämta cash");
} else {
  var cans = wallet / catFood;
  console.log(Math.floor(cans));
}

//uppgift 11.

while (true) {
  var player = prompt("VIll du vara michael jackson eller bob marley, skriv in nedan och tryck ok");

  if ( player === "michael jackson" || player === "bob marley") {
    alert( "Nice nu börjar vi " + player);
    alert( player + " tänk på att stava rätt, som det står i alternativen annars får du fel");
    break;
  } else {
    alert("du missade något tyvärr måste du spela detta spel så skriv in vilken artis du vill vara :)");
  }

}

var quest1 = prompt("Fråga 1: Vad för hårfärg har: " + player + " ?, (mörkt eller ljust)");
var score = 0;

if (quest1 === "mörkt" && player === "bob marley" || quest1 === "ljust" && player === "michael jackson") {
  score++;
  alert("Bra " + score + " rätt");
} else {
  alert("Tyvärr fel, bättre lycka på nästa fråga. Dina poäng = " + score );
}

var quest2 = prompt("Fråga 2: Lever " + player + " ?, (ja eller nej)");

if (quest2 === "nej" && player === "bob marley" || quest2 === "nej" && player === "michael jackson") {
  score++;
  alert("Bra " + score + " rätt");
} else {
    alert("Tyvärr fel, bättre lycka på nästa fråga. Dina poäng = " + score );
}

var quest3 = prompt("Fråga 3: Hur gammal blev: " + player + " ?, (50 eller 36)");

if (quest3 === "36" && player === "bob marley" || quest3 === "50" && player === "michael jackson") {
  score++;
  alert("Bra " + score + " rätt");
} else {
    alert("Tyvärr fel, bättre lycka på nästa fråga. Din totala poäng = " + score );
}

var quest4 = prompt("Fråga 4: Vad för musikgenre spelade: " + player + " ?, (pop eller reggae)");

if (quest4 === "reggae" && player === "bob marley" || quest4 === "pop" && player === "michael jackson") {
  score++;
  alert("Bra " + score + " rätt");
} else {
    alert("Tyvärr fel, bättre lycka på sista frågan. Din poäng är = " + score );
}

var quest5 = prompt("Fråga 5: Rökte " + player + " ciggareter?, (ja eller nej)");

if (quest5 === "ja" && player === "bob marley" || quest5 === "nej" && player === "michael jackson") {
  score++;
  alert("Bra totalt fick du " + score + " rätt");
} else {
    alert("Tyvärr fel, bättre lycka nästa gång. Din totala poäng = " + score );
}


//uppgift 12.

alert("dax att spra lite pengar, skoj va :)");
var savings = prompt("Hur mkt vill du sätta in? (endast siffror) ");
var interest = prompt("Vad har du för ränta? (endast siffror)");
var bankInterest = 2;
var year = prompt("hur länge vill du spara dina pengar (i antal år)");
var total = Math.floor(savings * Math.pow((interest/100+1),year));
var totalWithBankInterest = Math.floor(savings * Math.pow((bankInterest/100+1),year));
var profit = total - savings;
var profitBank = totalWithBankInterest - savings;
var compare = profit - profitBank;

if (total > totalWithBankInterest) {
    alert("Du tjänar mer på att behålla ditt sparsätt, du tjänar: " + compare + " Det här kommer du sparat eftet tio år " + total);
} else if (total < totalWithBankInterest) {
    alert("Du tjänar mer på att byta till vår bank, med ditt sparsätt, förlorar du: " + compare);
}  else {
  alert("wow, ditt sätt och bankens sätt är det samma, spara tid flytta inte dina pengar!")
}

//uppgift 13.

var randomNumber =  Math.floor(Math.random() * 100) + 1;

var chans = 1;

 for (var i = 0; i < 5; i++) {
   var tal = prompt("skriv in ett tal mellan 1 och 100, du har fem chanser på dig, detta är din chans nr: " + chans);

   if (randomNumber < tal) {
     alert("fel, försök igen, gissa lägre!")
     chans++;
   } else if (randomNumber > tal) {
     alert("fel, försk igen, gissa högre");
     chans++;
   } else {
     alert("rätt");
     break
   }
}


//uppgift 14.

   var tal1 =  Math.floor(Math.random() * 5) + 1;
   var tal = prompt("skriv in ett tal mellan 1 och 5, du har en chans på dig");

    (tal1 == tal) ? alert("rätt, bra gissat") :  alert("fel")
