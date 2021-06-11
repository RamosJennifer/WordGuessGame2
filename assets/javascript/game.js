var charachters = ["Rory", "Lorelai", "Luke", "Sookie", "Michel", "Emily", "Richard", "Lane", "Paris", "Madeline", "Louise", "Dean", "Jess", "Logan"]
var randomize = charachters[Math.floor(Math.random() * charachters.length)]
var currentWord = randomize.toLowerCase();
var underscore = "_";
var underscoredWord = underscore.repeat(currentWord.length)
var lettersGuessed = [];
var wins = 0;
cwArray = Array.from(currentWord);
usArray = Array.from(underscoredWord);
// console.log(currentWord);

for (i = 0; i < usArray.length; i++) {
    document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
}

function newRound() {
    lettersGuessed = [];
    var randomize = charachters[Math.floor(Math.random() * charachters.length)];
    var currentWord = randomize.toLowerCase();
    var underscore = "_";
    var underscoredWord = underscore.repeat(currentWord.length);
    cwArray = Array.from(currentWord);
    usArray = Array.from(underscoredWord);
    // console.log(currentWord);

    for (i = 0; i < usArray.length; i++) {
        document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
    }
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    for (i = 0; i < cwArray.length; i++) {
        var index = 0;

        if (userGuess === cwArray[i]) {
            index = i;
            usArray.splice(index, 1, userGuess);
            var usturnedString = (usArray).join(' ')
            document.getElementById("currentWord").innerHTML = usturnedString;
            var cwturnedString = cwArray.join(' ');
            if (usturnedString === cwturnedString) {
                alert("You win!");
                // Wins
                wins++
                document.getElementById("wins").innerHTML = wins;
                newRound();
            }
        }
        if (userGuess != cwArray[i]) {

            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
    }
}


