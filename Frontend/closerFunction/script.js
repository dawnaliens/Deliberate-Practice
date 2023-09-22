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

const checkIn = function(flightNum, passenger){
    flightNum = 'CZ100';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 6456465){
        alert('Check in');
    }else{
        alert('Wrong Passport!')
    }
}

// checkIn(flight, richard);
// console.log(flight)
// console.log(richard)

const exit = '2023/09/22';

const Tom = {
    name: 'Tom',
    passport: 123456789
}

const checkOut = function(exitTime, GuestName){
    exitTime = '2023/09/22';
    GuestName.name = 'Hi ' + GuestName.name;
    if(GuestName.passport === 123456789){
        alert(`${GuestName.name} has checked in.`)
    }else{
        alert('Wrong one!')
    }
}

checkOut(exit, Tom);
console.log(exit)
console.log(Tom)