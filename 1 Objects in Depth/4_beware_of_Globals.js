// Global Variables are Properties on window

var currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating
// true
// Globals and var, let, and const

let currentlyEating = 'ice cream';

window.currentlyEating === currentlyEating 
// false!

//Global Functions are Methods on window
function learnSomethingNew() {
    window.open('https://www.udacity.com/');
  }
  
  window.learnSomethingNew === learnSomethingNew
  // true