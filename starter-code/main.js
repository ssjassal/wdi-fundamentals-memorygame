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

var getListId = document.getElementById('game-board');
	getListId.innerHTML = document.createElement ('div');
	
