// prompt("What is your name?");
// prompt("What is your crush's name?");

var loveScore = Math.round(Math.random() * 100) + 1;

if (loveScore >= 70) {
    alert("Your loveScore is : " + loveScore + ". You are like Angela loving Brad Pit!!");
} else if (loveScore <= 30) {
    alert("Your loveScore is : " + loveScore + ". You went bankruptcy in love!");
} else {
    console.log("My loveScore is : "+ loveScore + ". We are in the game!!");
}
