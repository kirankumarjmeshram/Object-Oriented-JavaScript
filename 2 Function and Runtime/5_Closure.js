function expandArray(){
   var myArray = [1, 1, 1];
   
   return function (){
       myArray.push(1);
   
       return myArray
   }
   
 }
 
 let abc = expandArray();
 //console.log(abc()) //[1,1,1,1]
 //console.log(expandArray.myArray) //undefined