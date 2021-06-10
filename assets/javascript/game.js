var charachters = ["Rory", "Lorelai", "Luke", "Sookie", "Michel", "Emily", "Richard", "Lane", "Paris", "Madeline", "Louise", "Dean", "Jess", "Logan"]
var randomize = charachters[Math.floor(Math.random() * charachters.length)];
var currentWord = randomize.toLowerCase();
var underscore = "__ ";
var underscoredWord = underscore.repeat(currentWord.length)
var lettersGuessed = [];

console.log(currentWord);
console.log(currentWord.length);
document.getElementById("currentWord").innerHTML = underscoredWord;
// document.getElementById("lettersGuessed").innerHTML = lettersGuessed;


document.onkeyup = function(event){
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    
    
    for (i=0;i<currentWord.length;i++){
        if (userGuess === currentWord[i]){
            alert("hit at index " + [i]);
            // underscoredWord[currentWord[i]].push(userGuess);
        }
        if (userGuess != currentWord[i]){
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
    }
}


