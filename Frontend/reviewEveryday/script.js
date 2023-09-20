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