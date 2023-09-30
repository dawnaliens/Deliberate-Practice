'use strict';

const bookings = [];

// Default value in the parameter
const createBooking = function(flightNum, numPassengers = 1, price = 200 * numPassengers){

    // numPassengers = numPassengers || 1;
    // price = price || 200;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('RJB123');
createBooking('ABC456', 5, 1000);
createBooking('WEQ789', 3);

// Another way
createBooking('123456', undefined, 2003)

const flight = 'CZ303';
const richard = {
    name: 'Richard',
    passport: 6456465
}

// const checkIn = function(flightNum, passenger){
//     flightNum = 'CZ100';
//     passenger.name = 'Mr. ' + passenger.name;
//     if (passenger.passport === 6456465){
//         alert('Check in');
//     }else{
//         alert('Wrong Passport!')
//     }
// }

// checkIn(flight, richard);
// console.log(flight)
// console.log(richard)

// const exit = '2023/09/22';

// const Tom = {
//     name: 'Tom',
//     passport: 123456789
// }

// const checkOut = function(exitTime, GuestName){
//     exitTime = '2023/09/22';
//     GuestName.name = 'Hi ' + GuestName.name;
//     if(GuestName.passport === 123456789){
//         alert(`${GuestName.name} has checked in.`)
//     }else{
//         alert('Wrong one!')
//     }
// }

// checkOut(exit, Tom);
// console.log(exit)
// console.log(Tom);

const flightNum = flight;
const passenge = richard;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);
}

// newPassport(richard);
// checkIn(flight, richard);

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const highFive = function(){
    console.log('55555');
}

document.body.addEventListener('click', highFive);
['Richard', 'Tom', 'Fiona'].forEach(highFive);

const greeting = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greeting('Richard');
greeterHey('Richard');
greeterHey('Steve');

greeting('Hello')('Richard');

const anotherGreet = (anotherGreet) => {
    return (anotherName) =>{
        console.log(`${anotherGreet} ${anotherName}`);
    }
}

const testGreet = greeting => name => console.log(
    `${greeting} ${name}`
);

const anotherHey = anotherGreet('Richard');
anotherHey('Fiona')
anotherHey('Anna')
anotherGreet('Hi')('Richard')

testGreet('Hi')('Fiona');

const airPlane = {
    airline: 'AirNZ',
    airCode: 'NZ',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline}
        flight ${this.airCode}${flightNum}`);
        this.bookings.push({flight: `${this.airCode}${flightNum}`, name})
    },
    
}

airPlane.book(9527, 'Richard Liu');
airPlane.book(23, 'Smith');
console.log(airPlane);


const airing = {
    name: 'Richard',
    airCode: 'CZ',
    bookings: [],
};

const book = airPlane.book;

// Error
// book(23, 'Richard Liu');

// Call Method
book.call(airing, 23, 'Richard Liu');
console.log(airing);

book.call(airPlane, 9527, 'William Liang');
console.log(airPlane);

const swiss = {
    name: 'Swiss Air Line',
    airCode: 'LX',
    bookings: [],
}

book.call(swiss, 100, 'Fiona Lai');
console.log(swiss);

// Apply Method
const flightData = [299, 'George Liu'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData);

// book.call(airing, 23, 'Richard Liu');
// bind method

const bookEW = book.bind(airPlane);
const bookLH = book.bind(airing);
const bookLX = book.bind(swiss);
bookEW(45, 'Richard Liu')

const bookEW23 = book.bind(airPlane, 23);
bookEW23('Richard Liu');
bookEW23('Michael Liang');

// With event listeners


// Closures
const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();