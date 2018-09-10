//
// Object Destructuring
//

// const person = {
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructing
//

const address = [];

const [, , state = 'New York'] = address;

console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);