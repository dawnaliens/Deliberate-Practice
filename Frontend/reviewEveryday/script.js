var name = 'Richard';
var age = 25;
++age;  // age = age + 1
console.log(age);   // 26
console.log(++age); // 27
console.log(age++ + 20);    // 47


for (var i = 0; i < name.length; i++) {
  if (i == 3){
    continue;
  }
  console.log(`I am trying to learn ${name[i]}`)
}

// condition ? exprIfTrue : exprIfFalse

value1 = 23; 
value2 = 45;
value3 = 10;
var result = value1 > value2 ? true : false;
var another = value2 > value3 ? true : false;
console.log(result);    // false
console.log(another);   // true

const array = [23, 45, 100];
const anotherArray = [23, 45, array[0], array[1], array[2]]
console.log(anotherArray);

const newArr = [...array, 69, 79, 89, ...anotherArray];
console.log(newArr)

var testArr = new Array();
console.log(testArr);
console.log(testArr.length);
testArr.push(23);
testArr.push('Richard');
testArr.push(100);
console.log(testArr);
console.log(testArr.length);

let res1 = 100; 
let res2 = 200; 
let res3 = 58;

// condition ? exprIfTrue : exprIfFalse
const result1 = res1 > res2 ? true : false;
const result2 = res1 > res3 ? true : false;
const result3 = res3 < res2 ? true : false;
console.log(result1)
console.log(result2)
console.log(result3)

console.log("         ")

let array1 = [23, 45, 99, 100, 200];
array1.push(258);
console.log(array1);
// Remove the last element
array1.pop();
console.log(array1);
// Remove the first element
array1.shift();
console.log(array1);

const arr23 = [23, 45, 199];
const newArray = [1, 2, ...arr23];
console.log(newArray)

var aPerson = new Object()
aPerson = {
  name:'Richard',
  age: 25,
  city: "Shenzhen",
  skill: function(greeting){
    console.log("Hi there " + greeting)
  },
}

console.log(aPerson.skill("Hello World"));

console.log(1 + "Hello World");

const array23 = [23, 45, 99, 100,200, 400]
array23.forEach(function(id, name){
  console.log(`${id}: ${name}`)
})