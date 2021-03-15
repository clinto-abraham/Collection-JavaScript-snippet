function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.
        var leap = "Leap year.";
        var notLeap = "Not a leap year.";
        var yearDivBy4 = year % 4;
        var yearDivBy100 = year % 100;
        var yearDivBy400 = year % 400;
            
    if (yearDivBy4 != 0) {
        return notLeap;
    } else {
        return leap;
        if (yearDivBy100 != 0){
            return leap;
        } else {
            return notLeap;
            if (yearDivBy400 != 0){
                return notLeap;
            } else {
                return leap;
            }
        }
    }
     
        
    
    /**************Don't change the code below****************/    
    
    }
    
    isLeap(1968);