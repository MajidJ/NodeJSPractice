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

  const results = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
  return [...new Set(results)];
};

// Don't uncomment until your require is working!

console.log(nameSorter(names));
// Expected output:
// [ 'Cassandra', 'Josh', 'Miles', 'Owen' ]

