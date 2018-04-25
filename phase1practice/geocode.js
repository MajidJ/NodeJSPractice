
// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
const geocoder = require('geocoder');


// Take in the command line arguments
// const city = process.argv[2];
// const state = process.argv[3];

let place = process.argv;
let argsString = '';

for (let i=2; i < place.length; i++) {
    argsString += place[i];
}


// Build your address as an array or string
geocoder.geocode(argsString, function ( err, data ) {
// geocoder.geocode(city + ", " + state, function ( err, data ) {
    // do something with data 
    console.log(JSON.stringify(data.results, ));
  });



// Then use Geocoder NPM to geocode the address
