// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
    
    var n = Math.random(); 
    n = n * names.length; 
    n = Math.floor(n); 
    return names[n] + " is going to buy lunch today!";
        
    /******Don't change the code below*******/    
    }
    whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);             // call this function..//