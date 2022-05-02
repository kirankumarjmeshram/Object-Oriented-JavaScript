
(function(n){
    delete n;
    return n;
  })(2);
  
  //2

The delete operator is actually only effective on an object's properties; it isn't used to directly 
deallocate resources (i.e., free up memory), and has no effect on variables or names of functions.
As such, the number passed into this immediately-invoked function expression, 2, is returned.
