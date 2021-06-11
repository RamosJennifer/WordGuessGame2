var charachters = ["Rory", "Lorelai", "Luke", "Sookie", "Michel", "Emily", "Richard", "Lane", "Paris", "Madeline", "Louise", "Dean", "Jess", "Logan"]
var randomize = charachters[Math.floor(Math.random() * charachters.length)];
var currentWord = randomize.toLowerCase();
var underscore = "_";
var underscoredWord = underscore.repeat(currentWord.length)
var lettersGuessed = [];
cwArray = Array.from(currentWord);
usArray = Array.from(underscoredWord);

console.log(currentWord);

for (i = 0; i < usArray.length; i++) {
    // console.log(i);
    document.getElementById("currentWord").innerHTML = (usArray[i] + " ").repeat(usArray.length);
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);

    for (i = 0; i < cwArray.length; i++) {
        var index = 0;

        if (userGuess === cwArray[i]) {
            index = i;
            usArray.splice(index, 1, userGuess);
            document.getElementById("currentWord").innerHTML = (usArray).join(' ')
        }
        if (userGuess != cwArray[i]) {

            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
    }
}


