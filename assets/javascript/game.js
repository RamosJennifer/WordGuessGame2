var charachters = ["Rory", "Lorelai", "Luke", "Sookie", "Michel", "Emily", "Richard", "Lane", "Paris", "Madeline", "Louise", "Dean", "Jess", "Logan", "Christopher", "Jackson", "Babette", "Paty", "Taylor", "Kirk"]
var randomize = charachters[Math.floor(Math.random() * charachters.length)]
var currentWord = randomize.toLowerCase();
var underscore = "_";
var underscoredWord = underscore.repeat(currentWord.length)
var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 10;
cwArray = Array.from(currentWord);
usArray = Array.from(underscoredWord);

for (i = 0; i < usArray.length; i++) {
    document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

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
                showAnswer();
                // newRound();
            }
        }
    }
    if (userGuess !== cwArray[i]) {
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

        // -----------------------------------------------------------------------

        // -----------------------------------------------------------------------

        if (usturnedString === cwturnedString) {
            lettersGuessed.push(userGuess);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
        if (guessesRemaining <= 0) {
            showAnswer();
            newRound();
        }
    }
    function showAnswer() {
        alert("The cwTurnedString " + currentWord);
    }
}


