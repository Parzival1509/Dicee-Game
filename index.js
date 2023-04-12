// Generating Random Numbers from 1-6
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// Selecting the Dice images
var diceImage1 = document.querySelectorAll("img")[0];
var diceImage2 = document.querySelectorAll("img")[1];

// Generating Random Dice Image
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Changing the Dice Images according to the Random Numbers
diceImage1.setAttribute("src", randomImageSource1);
diceImage2.setAttribute("src", randomImageSource2);

// If Player 1 wins
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
// If Player 2 wins
else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
// Draw
else {
  document.querySelector("h1").innerHTML = "Draw"
}
