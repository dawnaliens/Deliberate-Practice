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