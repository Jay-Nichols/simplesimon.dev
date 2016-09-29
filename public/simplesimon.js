(function () {
"use strict";
	var index = 0;
	var gameArray = $("*[data-value]");
	var message = $("message");
	var levelNumber = $("#levelNumber");
	var game = {
		level: 1,
		roundSequence: [],
		allowUserClick: false,
		allowStartClick: true
	}

	function randomSequence() {
		var i = 0;
		game.allowStartClick: false;

		//make random numbers
		setTimeout(function() {
			do {
				game.roundSequence.push(Math.floor(Math.random() * 3));
			} while (game.roundSequence.length < game.level);
		}, 500);

		//animation and setting interval between animation
		var intervalId = setInterval(function() {
			$('[data-value="' + game.roundSequence[i] + '"]').animate({
				opacity: 1
			}, 200).animate({
				opacity: 0.3
			}, 200);
			i++;
			if (i == game.roundSequence.length) {
				clearInterval(intervalId);
			}
		})
		game.allowUserClick = true;
	}
})();


// (function () {
// "use strict";	
	

// 	var redSquare = document.getElementById('red');
// 	var blueSquare = document.getElementById('blue'); 
// 	var	yellowSquare = document.getElementById('yellow');
// 	var	greenSquare = document.getElementById('green');
// 	var allSquares = [redSquare, blueSquare, yellowSquare, greenSquare];
// 	var gamesChoice = [];
// 	var level = 0;
// 	var playersMatch = [];

// //listening for user's choice of squares and comparing to game choice//
// 	var listenToUserInput = function(){
// 		$(this).animate({
// 			opacity: 1
// 		}, 200).animate ({
// 			opacity: 0.3
// 		}, 200)
// 		console.log(gamesChoice);
// 		playersMatch.push($(this).attr('id'));
// 		console.log(playersMatch);
// 		if (playersMatch.join() == gamesChoice.join()) {
// 			startLevel();
// 			animate();
// 			playersMatch = [];
// 		}
// 	}

// 	var startLevel = function() {
// 		var randomNumber = (Math.floor(Math.random() * 3));
// 		var randomlySelectedSquare = allSquares[randomNumber].id;
// 		gamesChoice.push(randomlySelectedSquare);
// 		level++;
// 		console.log(gamesChoice);
// 		console.log(level);

// 	} 


// 	var animate = function() {
// 		var i = 0;
// 		var intervalId = setInterval(function() {
// 			$('#' + gamesChoice[i]).animate({
// 				opacity: 1
// 			}, 200).animate({
// 				opacity: 0.3
// 			}, 200)
// 			i++;
// 			if (i == gamesChoice.length) {
// 				clearInterval(intervalId);
// 			}
// 		}, 1000)
// 	}

// 	$('button').click(function() {

// 	alert("Start Game");
		
// 	$('.square').on('click', listenToUserInput);

	
	

	
// 	startLevel();

// 	animate();



	


// 	});











// })();