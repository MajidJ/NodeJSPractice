// Write a function that takes an array of names and returns a dedupped 
// array of properly capitalized names sorted alphabetically

// First require your data
const names = require('./names.js');
let dedupped = [];

/**
* This function takes an array of names and returns a dedupped array sorted alphabetically and capitalized
* @param {array} names 
* @return {array} 
*/
const nameSorter = names => {

  // You aweosme code here. Probably map(), slice(), sort() and charCodeAt()
  // as well as your spread operator and set() plus much, much more!!

  names.map(function(name) {
    name = name.toLowerCase().split("");
    name[0] = name[0].toUpperCase();
    name = name.join("");
    if (dedupped.indexOf(name) === -1) {
      dedupped.push(name);
    }
  })
  dedupped.sort();
  console.log(dedupped);
}

// Don't uncomment until your require is working!

console.log(nameSorter(names))
// Expected output:
// [ 'Cassandra', 'Josh', 'Miles', 'Owen' ]

