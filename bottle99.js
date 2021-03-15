var bottles = 99;
function bottle99(){
    while (bottles <= 99 && bottles >= 1){
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer");
    bottles-=1;
    console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.");  
    }
}
bottle99();