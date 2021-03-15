function functionBMI(weight, height){
    var bmi = (weight / Math.pow(height, 2));
    return bmi;
   }
   
   // functionBMI(60, 159);
   
   function bmiCalculator (weight, height) {
       var interpretation = (weight / Math.pow(height, 2)) * 10000;
       
       if (interpretation < 18.5) {
           return '"Your BMI is "' + interpretation + '", so you are underweight."';
       } else if (interpretation >= 18.5 && interpretation <= 24.9){
           return '"Your BMI is "' + interpretation + '", so you have a normal weight."';
       } else if(interpretation > 24.9) {
           return '"Your BMI is "' + interpretation + '", so you are overweight."';
       }
       return interpretation;
   }
    bmiCalculator(60,167);