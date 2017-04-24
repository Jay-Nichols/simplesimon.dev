"use strict";

$(document).ready(function(){	

	var redSquare = document.getElementById('red');
	var blueSquare = document.getElementById('blue'); 
	var	yellowSquare = document.getElementById('yellow');
	var	greenSquare = document.getElementById('green');
	var allSquares = [redSquare, blueSquare, yellowSquare, greenSquare];
	var gamesChoice = [];
	var playersMatch = [];

	function startLevel() {
		var randomNumber = (Math.floor(Math.random() * 3));
		var randomlySelectedSquare = allSquares[randomNumber].id;
		gamesChoice.push(randomlySelectedSquare);
		console.log(gamesChoice);
	}

	function animate() {
		$('#' + gamesChoice[]).
	}

	startLevel();
	animate();
	
	
})