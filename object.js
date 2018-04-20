// const instructor = {
//     name: 'Josh',
//     age: 33,
//     teach: function() {
//         console.log('blah, blah, object, blah');
//     }
// }


// console.log(instructor.age);
// instructor.teach();

const first = {
    name: 'Josh',
    age: 33
};
// let second = Object.assign({},first);
let second = {...first};

second.age = 44;

console.log(first);
console.log(second);
