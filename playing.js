// Strings methods

let browserType = 'Mozilla';
browserType.length;//spits out the length of the string 
console.log(browserType.length);
browserType[0]; //retrieves a specific string character 
browserType.indexOf('zilla'); // used to check if there position of a substring
browserType.slice(0,3) // used to extract a substring
browserType.toLowerCase() // converts all the alphabetic charaters in a string to lower case
browserType.replace('Moz', 'Van') // replaces 1st parameter with 2nd parameter

// Array
var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles']; //is an array. array are much like lists in python
shopping[0]; // returns 'bread'
shopping[0] = 'spagetti'; // replace bread with spagetti in array
randon [2][2]; // multidimentional array
shopping.length; // returns the length of array

// Example of some array method
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');    // splits a string into a substring and return an array
var myNewString = myArray.join(','); // opposite if split and returns a string
var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // returns a string
myArray.push('Cardiff'); // Adds Cardiff to the end of array
myArray.pop; // opposite of push
/*
unshift() and shift() work in exactly the same way as push() and pop(), 
respectively, except that they work on the beginning of the array, not the end.
*/

