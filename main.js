var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); //selects the span inside the p tag
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) { //we can use == but due to this we need to turn numInput.value to string; check it out on line 47
            p1Display.classList.add("winner"); //the green color
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener("click", function() {
    reset(); //makes sure when you click reset everything is zero
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0; //to show 0 on player 1
    p2Display.textContent = 0; //to show 0 on player 2
    p1Display.classList.remove("winner"); //to remove the green color
    p2Display.classList.remove("winner");
    gameOver = false; //to be able to play again after clicking reset
}
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value; //outputs the recently changed value
    winningScore = Number(this.value); //the value that is been listened to which is numInput
    reset(); //when someone changes the value everything gets to zero 
});