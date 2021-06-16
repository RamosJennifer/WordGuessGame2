var charachters = ["Rory", "Lorelai", "Luke", "Sookie", "Michel", "Emily", "Richard", "Lane", "Paris", "Madeline", "Louise", "Dean", "Jess", "Logan", "Christopher", "Jackson", "Babette", "Patty", "Taylor", "Kirk"]
    // Randomizing Charachters
var randomize = charachters[Math.floor(Math.random() * charachters.length)]
var currentWord = randomize.toLowerCase();
// Converting randomized word into an underscored string
var underscore = "_";
var underscoredWord = underscore.repeat(currentWord.length)
    // Empty & Begining Count Variables
var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 10;
// Array>String>Array
cwArray = Array.from(currentWord);
usArray = Array.from(underscoredWord);

// Starting game underscored word
for (i = 0; i < usArray.length; i++) {
    document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
}

// user controlled function
document.onkeyup = function(event) {
    // tracking users actions
    var userGuess = event.key.toLowerCase();

    // New Round
    function newRound() {
        lettersGuessed = [];
        guessesRemaining = 10;
        randomize = charachters[Math.floor(Math.random() * charachters.length)];
        currentWord = randomize.toLowerCase();
        underscore = "_";
        underscoredWord = underscore.repeat(currentWord.length);
        cwArray = Array.from(currentWord);
        usArray = Array.from(underscoredWord);
        for (i = 0; i < usArray.length; i++) {
            document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
        }
    }

    // If user guess is correct
    for (i = 0; i < cwArray.length; i++) {
        var index = 0;
        if (userGuess === cwArray[i]) {
            index = i;
            usArray.splice(index, 1, userGuess);
            var usturnedString = (usArray).join(' ')
            document.getElementById("currentWord").innerHTML = usturnedString;
            var cwturnedString = cwArray.join(' ');
            if (usturnedString === cwturnedString) {
                guessesRemaining = 1;
                wins++
                document.getElementById("wins").innerHTML = wins;
            }
        }
    }
    // if user guess is incorrect
    if (userGuess !== cwArray[i]) {
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

        if (usturnedString === cwturnedString) {
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
        if (guessesRemaining === 0) {
            showAnswer();
            newRound();
        }
    }
    // --------------------------------------------------------
    // if (userGuess === ){
    //     console.log("This letter has been guessed before.")
    // }
    // console.log("-------------------------------")
    //----------------------------------------------------------

    function showAnswer() {
        alert("The answer was " + currentWord);
    }
}