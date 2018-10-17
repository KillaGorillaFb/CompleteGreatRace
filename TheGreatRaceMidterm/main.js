/*
Developer:  Frankie Barrios
Date: 10/10/18
Purose: Implement a page that simulates 
a race between two or more competing players.
*/

//Global Variables -- Will be used in multiple functions
var raceSpeed;

//Each of the vars grab each racers div
var cullenDiv = document.getElementById("cDiv");
var gregDiv = document.getElementById("gDiv");
var frankieDiv = document.getElementById("fDiv");
var phillipDiv = document.getElementById("pDiv");

//These vars are the current racer positions
var cPos;
var gPos;
var fPos;
var pPos;

//These vars grab ahold of each players race img
var cImage = document.getElementById("Cullen");
var gImage = document.getElementById("Greg");
var fImage = document.getElementById("Frankie");
var pImage = document.getElementById("Phillip");

//Triggers onLoad and sets up race
function getReady() {
  //Players current positions
  cPos = 0;
  gPos = 0;
  fPos = 0;
  pPos = 0;

  //Places players at start line
  cullenDiv.style.left = cPos + "px";
  gregDiv.style.left = gPos + "px";
  frankieDiv.style.left = fPos + "px";
  phillipDiv.style.left = pPos + "px";

  //On page load displays players race images
  cImage.src = "Cullen.png";
  gImage.src = "Greg.png";
  fImage.src = "Frankie.png";
  pImage.src = "Phillip.png";

  //Places players race images in block display format
  cImage.style.display = "block";
  gImage.style.display = "block";
  fImage.style.display = "block";
  pImage.style.display = "block";

  //Hides Win images during race
  document.getElementById("CullenWins").style.display = "none";
  document.getElementById("GregWins").style.display = "none";
  document.getElementById("FrankieWins").style.display = "none";
  document.getElementById("PhillipWins").style.display = "none";

  //Makes Light image start button
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("start").style.width = "95px";
  document.getElementById("start").style.height = "110px";

  //Allows me to make the winner img the new start button and light unclickable/ hidden
  document.getElementById("start2").style.display = "none";
}

function startRace() {
  getReady();
  document.getElementById("start").style.display = "none"; //Hides red light so green light can display
  document.getElementById("start2").style.width = "95px"; //Once initial light clicked, this one appears
  document.getElementById("start2").style.display = "block"; //Once initial light clicked, this one appears
  document.getElementById("start2").style.height = "110px";

  //Runs movement() 
  raceSpeed = setInterval(movement); 
}

function movement() {
  var randCullenPos = Math.floor(Math.random() * 7);//Increase or decrease multiplier to change race speed
  var randGregPos = Math.floor(Math.random() * 7);
  var randFrankiePos = Math.floor(Math.random() * 7);
  var randPhillipPos = Math.floor(Math.random() * 7);

  //Adds random gen position advance to current position value to move player
  cPos += randCullenPos;
  gPos += randGregPos;
  fPos += randFrankiePos;
  pPos += randPhillipPos;

  //After random number added to current position, this makes the position change
  cullenDiv.style.left = cPos + "px";
  gregDiv.style.left = gPos + "px";
  frankieDiv.style.left = fPos + "px";
  phillipDiv.style.left = pPos + "px";

  //Setting Finish Line -- Gets Racers to stop by clearing interval
  if (cPos > 1300 || gPos > 1300 || fPos > 1300 || pPos > 1300) {
    //Handles how far racers will go and finds winner
    clearInterval(raceSpeed); //Once players hit value set, stops running movement function
    winner();
  } //end of if
}

//Winner Function
function winner() {
  //Decides the winner
  if (cPos > 1300) {
    cullenWins();
  } //end of if
  else if (gPos > 1300) {
    gregWins();
  } //end of else if
  else if (fPos > 1300) {
    frankieWins();
  } //end of else if
  else {
    phillipWins();
  } //end of else
} //Not going to worry about a tie at this point

// Makes the winning images visible & hides race images
function cullenWins() {
  cImage.style.display = "none";
  gImage.style.display = "none";
  fImage.style.display = "none";
  pImage.style.display = "none";
  document.getElementById("CullenWins").style.display = "block";
  document.getElementById("CullenWins").style.width = "175px";
  document.getElementById("CullenWins").style.height = "auto";
  document.getElementById("CullenWins").style.position = "fixed";
  document.getElementById("CullenWins").style.top = "40%";
  document.getElementById("CullenWins").style.left = "45%";
} //end of cullenWins()

function gregWins() {
  gImage.style.display = "none";
  fImage.style.display = "none";
  pImage.style.display = "none";
  cImage.style.display = "none";
  document.getElementById("GregWins").style.display = "block";
  document.getElementById("GregWins").style.width = "175px";
  document.getElementById("GregWins").style.height = "auto";
  document.getElementById("GregWins").style.position = "fixed";
  document.getElementById("GregWins").style.top = "40%";
  document.getElementById("GregWins").style.left = "45%";
} //end of gregWins()

function frankieWins() {
  fImage.style.display = "none";
  pImage.style.display = "none";
  cImage.style.display = "none";
  gImage.style.display = "none";
  document.getElementById("FrankieWins").style.display = "block";
  document.getElementById("FrankieWins").style.width = "175px";
  document.getElementById("FrankieWins").style.height = "auto";
  document.getElementById("FrankieWins").style.position = "fixed";
  document.getElementById("FrankieWins").style.top = "40%";
  document.getElementById("FrankieWins").style.left = "45%";
} //end of frankieWins()

function phillipWins() {
  pImage.style.display = "none";
  cImage.style.display = "none";
  gImage.style.display = "none";
  fImage.style.display = "none";
  document.getElementById("PhillipWins").style.display = "block";
  document.getElementById("PhillipWins").style.width = "175px";
  document.getElementById("PhillipWins").style.height = "auto";
  document.getElementById("PhillipWins").style.position = "fixed";
  document.getElementById("PhillipWins").style.top = "40%";
  document.getElementById("PhillipWins").style.left = "45%";
  document.getElementsByTagName("body").style.backgroundImage; url("Graduation.jpg");
} //end of PhillipWins()
