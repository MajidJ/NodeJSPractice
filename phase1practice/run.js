const musicList = require('./bands');



const userArgs = process.argv[2];
if (userArgs in musicList) {
    for (let key in musicList) {
        if (key === userArgs) {
            console.log('A ' + key + ' band is ' + musicList[key]);
        }
    }
} else {
    for (let key in musicList) {
        console.log('A ' + key + ' band is ' + musicList[key])
    }
}

// console.log(result);

