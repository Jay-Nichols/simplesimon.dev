(function () {
"use strict";	
	

	var redSquare = document.getElementById('red');
	var blueSquare = document.getElementById('blue'); 
	var	yellowSquare = document.getElementById('yellow');
	var	greenSquare = document.getElementById('green');
	var allSquares = [redSquare, blueSquare, yellowSquare, greenSquare];
	var gamesChoice = [];
	var level = 0;
	var playersMatch = [];

//listening for user's choice of squares and comparing to game choice//
	var listenToUserInput = function() {
		$(this).animate({
			opacity: 1
		}, 200).animate ({
			opacity: 0.3
		}, 200)
		console.log(gamesChoice);
		playersMatch.push($(this).attr('id'));
		console.log(playersMatch);
		if (playersMatch.join() == gamesChoice.join()) {
			startLevel();
			animate();
			playersMatch = [];
		} 
	}

	var startLevel = function() {
		var randomNumber = (Math.floor(Math.random() * 3));
		var randomlySelectedSquare = allSquares[randomNumber].id;
		gamesChoice.push(randomlySelectedSquare);
		level++;
		console.log(gamesChoice);
		console.log(level);

	}


	var animate = function() {
		var i = 0;
		var intervalId = setInterval(function() {
			$('#' + gamesChoice[i]).animate({
				opacity: 1
			}, 200).animate({
				opacity: 0.3
			}, 200)
			i++;
			if (i == gamesChoice.length) {
				clearInterval(intervalId);
			}
		}, 1000)
	}

		
	$('.square').on('click', listenToUserInput);

	$('button').click(function() {

	alert("Start Game");
	
	

	
	startLevel();

	animate();

	


	});











})();