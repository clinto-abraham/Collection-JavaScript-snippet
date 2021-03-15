function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆  
        //Write your code here:
         var seq = [];
         for (var seq = 0; seq = n; seq.length <= n){
             
             if (n === 1){
             seq.push(0);
             return seq;
             } else if (n === 2){
                   seq.push(0);
                   seq.push(1);
                   return seq;
             } else {
           
                seq.push(0);
                seq.push(1);
                var a = (seq.length - 2);
                var b = seq.length;
                var sliceSeq = seq.slice(a, b);        
                sliceSeq = sliceSeq[0] + sliceSeq[1];
                seq = seq.push(sliceSeq);
                
                console.log(seq);    
            }
            return seq;
        }
        
       
            console.log(seq);
        //Return an array of fibonacci numbers starting from 0.   
    //Do NOT change any of the code below 👇
    }
    
    fibonacciGenerator (5);
    
    /*  for(var i = 0; i = seq[n-1];  i = seq[n-seq.length] + seq[(n+1)-seq.length]){
           
            seq.push(i);
        } */
    