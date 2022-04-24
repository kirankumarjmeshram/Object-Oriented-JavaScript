
// forEach() , map() , filter()

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
  }
  
  function returnsThree() {
    return 3;
  }
  
  let result = callAndAdd(2, returnsThree);
  
  console.log(result);
  // 5

  //FOREACH
  [1, 5, 2, 4, 6, 3].forEach(function (n) {
    if (n % 2 !== 0) {
      console.log(n);
    }
  });
  
  // 1
  // 5
  // 3

  const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

favoriteFlavors.forEach(function(flavor) {
  // debugger;
  console.log('I enjoy ' + flavor + ' ice cream!');
});
/*
I enjoy cookie dough ice cream!
I enjoy salted caramel ice cream!
I enjoy toffee ice cream!

*/
// we pass an anonymous callback that takes a number, num, as an argument:
[1, 2, 3, 4].forEach(function(num) {
    console.log(num);
 });

 //Passing in a defined function as the callback works just fine
 function logNum (num) {
    console.log(num);
  }
  
  [1, 2, 3, 4].forEach(logNum);


  //MAP
  const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
  return name.length;
});

// the map() method returns a new array; it does not modify the original array.
console.log(nameLengths) /[ 5, 7, 8 ]

/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(({name,artist,sales})=>{
    return `${name} by ${artist} sold ${sales} copies`
})
console.log(albumSalesStrings)
/* 
[ '25 by Adele sold 1731000 copies',
  'Views by Drake sold 1608000 copies',
  'Lemonade by Beyonce sold 1554000 copies',
  'Traveller by Chris Stapleton sold 1085000 copies',
  'A Pentatonix Christmas by Pentatonix sold 904000 copies',
  'Hamilton: An American Musical by Original Broadway Cast Recording sold 820000 copies',
  'Blurryface by Twenty One Pilots sold 738000 copies',
  'The Very Best of Prince by Prince sold 668000 copies',
  'Anti by Rihanna sold 603000 copies',
  'Purpose by Justin Bieber sold 554000 copies' ]
*/

//FILTER

/* Using filter()
 
  Using the musicData array and filter():
    - Return only album objects where the album's name is
      10 characters long, 25 characters long, or anywhere in between
    - Store the returned data in a new `results` variable
 
  Note:
    - Do not delete the musicData variable
    - Do not alter any of the musicData content
 */

 musicData = [
        { artist: 'Adele', name: '25', sales: 1731000 },
        { artist: 'Drake', name: 'Views', sales: 1608000 },
        { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
        { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
        { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
        { artist: 'Original Broadway Cast Recording', 
          name: 'Hamilton: An American Musical', sales: 820000 },
        { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
        { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
        { artist: 'Rihanna', name: 'Anti', sales: 603000 },
        { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
    ];
    
    const results = musicData.filter(el =>{
        return (el.name.length >=10 && el.name.length <=25)
    });
    
    console.log(results);
    
    /* output 
    [ { artist: 'Pentatonix',
        name: 'A Pentatonix Christmas',
        sales: 904000 },
      { artist: 'Twenty One Pilots',
        name: 'Blurryface',
        sales: 738000 },
      { artist: 'Prince',
        name: 'The Very Best of Prince',
        sales: 668000 } ]
        */