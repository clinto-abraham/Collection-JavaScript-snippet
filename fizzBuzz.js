/* var buzzArray = [];
   var number = 0;
   function fizzBuzz(){
       if (called) {
            number +=1;
            buzzArray.push(number);
       }
       return buzzArray;  
   }
   var called = fizzBuzz(); */

        



   var output = [];
   var number = 1;
   function fizzBuzz(){
       while (number <= 100){        // while loops runs till 100 times till statement turns false, here number++; does that job
       var fizz = number % 3;
       var buzz = number % 5;
       
   
      
       if (fizz === 0 &&  buzz === 0){
           
           output.push("fizzBuzz");
       } else if (fizz === 0){
           
           output.push("fizz");
       } else if (buzz === 0){
           
           output.push("buzz");
       } else{
           output.push(number);
       }
       number +=1;
       }
       console.log(output);
   }
   
   fizzBuzz();
   
       
            
   