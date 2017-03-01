console.log("JS file is connected to HTML! Woo!")
// var cardOne = null;
// var cardTwo = null;
// var cardThree = null;
// var cardFour = null;


// cardOne = "Queen";
// cardTwo = "Queen";
// cardThree = "King";
// cardFour = "King";

// // if (cardOne == cardTwo) || (cardThree == cardFour) 
// // {
// // 	alert('You have found a match!');

// // }
// // else 
// // {
// // 	alert ('Sorry try again.');
// // }

var cards = ['rabbit', 'rabbit', 'cheshire', 'cheshire'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

function createBoard() 
{
  for (var i=0; i<cards.length; i++) 
  {
    var createCard = document.createElement('div');
    createCard.className = 'card';
    createCard.setAttribute('data-card', cards[i]);
    console.log (createCard);
    createCard.addEventListener('click', isTwoCards);
    console.log (createCard);
    gameBoard.appendChild(createCard);
  }
}

createBoard();
function isTwoCards() {
  //console.log ("In isTwoCards")
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'cheshire') {
		this.innerHTML = "<img src='/Users/soniyajassal/Fundamentals/wdi-fundamentals-memorygame/starter-code/images/cheshire_final.png'>"; // king
	} else {
		this.innerHTML = "<img src='/Users/soniyajassal/Fundamentals/wdi-fundamentals-memorygame/starter-code/images/rabbit_final.png"; //queen
	}

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

