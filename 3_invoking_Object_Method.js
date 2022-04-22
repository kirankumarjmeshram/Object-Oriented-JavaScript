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