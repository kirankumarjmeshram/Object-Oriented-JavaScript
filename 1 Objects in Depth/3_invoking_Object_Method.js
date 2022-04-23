const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    }
  };
developer.sayHello(); // 'Hi there!'

developer['sayHello']();// 'Hi there!'

//Write an expression that invokes the alerter() function in the following array, myArray:
const myArray = [ function alerter() { console.log('Hello!'); } ];
myArray[0]() //Hello!

/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

const chameleon = {
    color : "green",
    changeColor  : function () {
        if(this.color === "green"){
              this.color = 'pink';
        }else if(this.color === 'pink'){
            this.color = "green";
        }
      
    }
}

chameleon.changeColor ()
console.log(chameleon.color)