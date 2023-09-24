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