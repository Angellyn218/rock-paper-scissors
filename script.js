
var playBtn = document.querySelector("#play");
var rpsArray = ["r", "p" ,"s"];
var stats = {
    wins: 0,
    loses: 0,
    ties: 0,
}

playBtn.addEventListener("click", takeUserInput);

// prompt for the user input
function takeUserInput() {
    var takeUserInput = true;
    var input = "";
    while (takeUserInput) {
        input = prompt("Choose R, P, or S");
        if ((input == "r") || (input == "R") || (input == "p") || (input == "P") || (input == "s") || (input == "S")) {
            return input;
        } else {
            alert("Not an option. Try again.");
        }
    }
}

// computer to choose random from r, p, s

// rock beats scissors, paper beats rock, scissors beats paper

// track who won that game (or if tie)

// track stats of who won with variables

// stats page and play again