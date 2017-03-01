console.log("JS file is connected to HTML! Woo!")
var cardOne = null;
var cardTwo = null;
var cardThree = null;
var cardFour = null;


cardOne = "Queen";
cardTwo = "Queen";
cardThree = "King";
cardFour = "King";

// if (cardOne == cardTwo) || (cardThree == cardFour) 
// {
// 	alert('You have found a match!');

// }
// else 
// {
// 	alert ('Sorry try again.');
// }

var gameBoard = document.getElementById('game-board');

// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var createCard = document.createElement('div');

    // add a class to the card element which will help link styling
    createCard.className = 'card';

    // append the card to the board
    gameBoard.appendChild(createCard);
  }

}
