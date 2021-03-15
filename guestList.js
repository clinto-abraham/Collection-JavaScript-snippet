var guestList = ["Clinto","Abraham","Mini","Sneha","Jesus","Father in Heaven","Holy Spirit","Mother Mary"];
var name = prompt("What is your name?");

var firstL = name.slice(0,1).toUpperCase(); 
var lastL = name.slice(1,name.length).toLowerCase(); 
name = firstL + lastL;

function partyInvites(name){
    if (guestList.includes(name) == true){
        return "Welcome, " + name + "! to the party. Glad to see you soon!";
    } else {
        return "Sorry, " + name + ". We are full due to Corona meeting norms! Will meet you another day";
    }
}

partyInvites(name);
