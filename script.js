
var playBtn = document.querySelector("#play");
var rpsArray = ["r", "p" ,"s"];
var stats = {
    wins: 0,
    loses: 0,
    ties: 0,
}

playBtn.addEventListener("click", computerDecision);

// prompt for the user input
function takeUserInput() {
    var takeUserInput = true;
    var input = "";
    while (takeUserInput) {
        input = prompt("Choose r, p, or s (lower case values)");
        if ((input == "r") || (input == "p") || (input == "s")) {
            return input;
        } else {
            alert("Not an option. Try again.");
        }
    }
}



// computer to choose random from r, p, s


function computerChooseRandom() {
    var random = Math.floor(Math.random() * (rpsArray.length - 1));
    return rpsArray[random];
}

function computerDecision() {
    var user = takeUserInput();
    var computer = computerChooseRandom();
    if (computer == user) {
        alert("It was a Tie");
        stats.ties = stats.ties + 1;
    } else if (((user == "p") && (computer == "r")) || ((user == "r") && (computer == "s")) || ((user == "s") && (computer == "p"))) {   
        alert("Congratulations You won!"); 
        stats.wins = stats.wins + 1;
    }   else { 
        alert("You lost!");
        stats.loses = stats.loses + 1;
    }


    
  
}




//user picks P and computer picks R -- computer wins
//user picks S and computer picks R -- compueter wins
//

// rock beats scissors, paper beats rock, scissors beats paper

// track who won that game (or if tie)

// track stats of who won with variables

// stats page and (play again use confirm)