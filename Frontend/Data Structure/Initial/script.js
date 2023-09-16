'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [23, 45, 100];
const first = arr[0];
const second = arr[1];
const third = arr[2];

const [a, b, c] = arr;
console.log(arr);
console.log(a)
console.log(b)
console.log(c)

let [menu1, ,menu2] = restaurant.mainMenu;
const temp = menu1;
menu1 = menu2;
menu2 = temp;
console.log(menu1)
console.log(menu2)
console.log(temp)

console.log(restaurant.order(2, 0))

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [23, 45, [99, 100]];
const [test1, , test2] = nested;
console.log(test1); // 99
console.log(test2); // 100