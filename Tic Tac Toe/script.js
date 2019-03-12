
const P1 = document.querySelector(".player-turn .player1");
const P2 = document.querySelector(".player-turn .player2");
const boxes = document.getElementsByClassName("box");
const onePlayer = document.querySelector(".one-player");
const twoPlayer = document.querySelector(".two-players");
const startBanner = document.querySelector(".start-banner");
const replayButton = document.querySelector(".replay-button");
const replayBanner = document.querySelector(".replay-banner");
const restartGame = document.querySelector(".restart-button");
let P1Score = document.querySelector(".player1-score");
let P2Score = document.querySelector(".player2-score");
let turn = 0;

//creates symbols 'X' + 'O' when boxes are clicked
function giveSymbol() {

	if (turn % 2 == 0) {
		P1.classList.remove("player1-turn");
		P2.classList.add("player2-turn");
		return "X";
	} else {
		P2.classList.remove("player2-turn");
		P1.classList.add("player1-turn");
		return "O";
	}
}

//winning conditions
function winner() {
	const winningCondition = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]

	for(let i = 0; i < winningCondition.length; i++) {
		const condition = winningCondition[i];

		if(boxes[condition[0]].innerHTML == boxes[condition[1]].innerHTML && boxes[condition[0]].innerHTML == boxes[condition[2]].innerHTML && boxes[condition[0]].innerHTML != "") {
			return true;
		}
	}
	return false;
}

//if the round is a tie, run this
function draw() {
	if(!winner() && turn == 9) {
		return true;
	} else {
		return false;
	}
}

//resets game for new round
function reset() {
	for(let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = "";
	}

	turn = 0;
}

//banners to indicate who won / if it's a tie
replayBanner.onclick = function() {
	replayBanner.classList.add("hidden");
	P1.classList.add("player1-turn");
	P2.classList.remove("player2-turn");
	reset();
}

//resets scoreboard, restarts the game from scratch
restartGame.onclick = function() {
	reset();
	P1.classList.remove("player1-turn");
	P2.classList.remove("player2-turn");
	P1Score.innerHTML = 0;
	P2Score.innerHTML = 0;
	startBanner.classList.remove("hidden");
}

//game mechanics
onePlayer.onclick = function() {
	startBanner.classList.add("hidden");
	P1.innerHTML = "You";
	P2.innerHTML = "Bot";
	P1.classList.add("player1-turn");

	for(let i = 0; i < boxes.length; i++) {
		const box = boxes[i];

		box.onclick = function() {
			if (box.innerHTML == "" && !winner()) {
				box.innerHTML = giveSymbol();
				if (winner()) {
					if (giveSymbol() == "X") {
						replayButton.innerHTML = "You Won!";
						P1Score.innerHTML++;
					} 
					replayBanner.classList.remove("hidden");
				}

				turn++;

				if(draw()) {
					replayButton.innerHTML = "It's A Draw!";
					replayBanner.classList.remove("hidden");
				} 
			}

			if (turn < 9) {
				let randomNumber = Math.floor(Math.random() * boxes.length);
			
				while (boxes[randomNumber].innerHTML != "") {
					randomNumber = Math.floor(Math.random() * boxes.length);
				}

				let botBox = boxes[randomNumber];

				setTimeout(botMove, 200);

				function botMove() {
					if (botBox.innerHTML == "" && !winner()) {
						botBox.innerHTML = giveSymbol();
						if (winner()) {
							if (giveSymbol() == "O") {
								replayButton.innerHTML = "Bot Won!";
								P2Score.innerHTML++;
							}
							replayBanner.classList.remove("hidden");
						}

						turn++;

						if(draw()) {
							replayButton.innerHTML = "It's A Draw!";
							replayBanner.classList.remove("hidden");
						} 
					}
				}
			}
		}
	}
}

twoPlayer.onclick = function() {
	startBanner.classList.add("hidden");
	P1.innerHTML = "Player 1";
	P2.innerHTML = "Player 2";
	P1.classList.add("player1-turn");

	for(let i = 0; i < boxes.length; i++) {
		const box = boxes[i];

		box.onclick = function() {
			if (box.innerHTML == "" && !winner()) {
				box.innerHTML = giveSymbol();
				if (winner()) {
					if (giveSymbol() == "X") {
						replayButton.innerHTML = "Player 1 Won!";
						P1Score.innerHTML++;
					} else if (giveSymbol() == "O") {
						replayButton.innerHTML = "Player 2 Won!";
						P2Score.innerHTML++;
					}
					replayBanner.classList.remove("hidden");
				}

				turn++;

				if(draw()) {
					replayButton.innerHTML = "It's A Draw!";
					replayBanner.classList.remove("hidden");
				} 
			}
		}
	}
}